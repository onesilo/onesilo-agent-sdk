/**
 * The package version, read from package.json at runtime so the reported
 * version cannot drift from what npm installed.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const version: string = (() => {
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    for (const rel of ["../package.json", "../../package.json"]) {
      try {
        const parsed = JSON.parse(readFileSync(join(here, rel), "utf8")) as {
          name?: string;
          version?: string;
        };
        if (parsed.name?.includes("agent-sdk") && parsed.version) {
          return parsed.version;
        }
      } catch {
        /* try next */
      }
    }
  } catch {
    /* fall through */
  }
  return "0.0.0";
})();
