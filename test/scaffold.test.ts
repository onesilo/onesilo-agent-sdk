import { test } from "node:test";
import assert from "node:assert/strict";
import { SDK_NAME } from "../src/index.ts";

test("scaffold exports", () => {
  assert.equal(SDK_NAME, "@onesilo/agent-sdk");
});
