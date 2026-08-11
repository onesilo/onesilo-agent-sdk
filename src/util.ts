/** Small shared helpers (extracted from onesilo-buzz). */

export function since(startMs: number, nowMs: number = Date.now()): string {
  const ms = Math.max(0, nowMs - startMs);
  return ms < 1000 ? `${ms}ms` : `${(ms / 1000).toFixed(1)}s`;
}
