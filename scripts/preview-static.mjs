import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { basePath } from "../lib/paths.mjs";

const directory = resolve("out");
const port = Number(process.env.PORT || 3000);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".woff2": "font/woff2",
};

await stat(resolve(directory, "index.html"));

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (basePath && pathname === basePath) {
      response.writeHead(308, { Location: `${basePath}/` }).end();
      return;
    }
    if (basePath && !pathname.startsWith(`${basePath}/`)) {
      response.writeHead(404).end("Not found");
      return;
    }
    let file = resolve(directory, `.${pathname.slice(basePath.length) || "/"}`);
    if (file !== directory && !file.startsWith(`${directory}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    response.writeHead(200, { "Content-Type": types[extname(file)] || "application/octet-stream" });
    createReadStream(file).on("error", () => response.destroy()).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Static preview: http://127.0.0.1:${port}${basePath}/`);
});
