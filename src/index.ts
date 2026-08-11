/**
 * @onesilo/agent-sdk — building blocks for One Silo agents, extracted from
 * the Buzz reference agent (Agent Smith SILO-123).
 *
 * Memory: the MemoryStore contract + distillation decorators.
 * Compute: the control plane's OpenAI-compatible endpoint client.
 * Pairing: OAuth 2.1 dynamic client registration.
 * Transport plumbing: MCP client with pluggable auth, bucket routing,
 * turn-window segmentation, and the local node client.
 */
export * from "./types.js";
export * from "./mcp-client.js";
export * from "./oauth.js";
export * from "./buckets.js";
export * from "./compute.js";
export * from "./compute-distill.js";
export * from "./node-distill.js";
export * from "./window.js";
export * from "./node-client.js";
export { version } from "./version.js";
export const SDK_NAME = "@onesilo/agent-sdk";
