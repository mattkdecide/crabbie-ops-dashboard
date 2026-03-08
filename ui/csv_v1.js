// csv_v1.js
// Minimal CSV parser (RFC 4180-ish) supporting quoted fields and commas/newlines.

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let i = 0;
  let inQuotes = false;

  const pushField = () => {
    row.push(field);
    field = '';
  };
  const pushRow = () => {
    // Ignore trailing empty line
    if (row.length === 1 && row[0] === '' && rows.length === 0) return;
    rows.push(row);
    row = [];
  };

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        // Escaped quote
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }

    if (ch === ',') {
      pushField();
      i += 1;
      continue;
    }

    if (ch === '\n') {
      pushField();
      pushRow();
      i += 1;
      continue;
    }

    if (ch === '\r') {
      // Handle CRLF
      if (text[i + 1] === '\n') {
        pushField();
        pushRow();
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }

    field += ch;
    i += 1;
  }

  // Flush last field/row.
  pushField();
  if (row.length) pushRow();

  if (rows.length === 0) return [];

  const header = rows[0].map((h) => h.trim());
  const out = [];
  for (let r = 1; r < rows.length; r += 1) {
    const obj = {};
    const cols = rows[r];
    if (cols.length === 1 && cols[0].trim() === '') continue;
    for (let c = 0; c < header.length; c += 1) {
      obj[header[c]] = (cols[c] ?? '').trim();
    }
    out.push(obj);
  }
  return out;
}
