export function filter(req: Express.Request, file: Express.Multer.File, cb) {
  if (file.mimetype === 'application/pdf') cb(null, false);
  else cb(null, true);
}
// filefilter: filter
// Ha nem felel meg a mime type akkor üres lesz a file --> !file -> hiba
