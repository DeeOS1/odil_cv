export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");

export function publicPath(path) {
  return `${basePath}${path}`;
}
