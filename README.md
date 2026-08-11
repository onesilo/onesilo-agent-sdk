# @onesilo/agent-sdk

The TypeScript SDK for building **One Silo agents** — agents that have
memory, are model-neutral, and are governed, because they run on the One
Silo control plane rather than beside it.

- **Memory** — silos the owner grants, through the standard
  [MemoryStore interface](https://github.com/onesilo/silo-spec/blob/main/spec/memory-store-v0.1.0.md):
  `remember` / `recall` / `forget` / `recent`, with honest write outcomes
  (`stored | queued | needs_confirmation` — never auto-confirmed).
- **Compute** — the control plane's OpenAI-compatible endpoint
  (`POST /v1/chat/completions`); the same agent runs on a cloud model or
  the owner's own hardware. The contract is invariant; placement is policy.
- **Governance** — pairing via OAuth 2.1 dynamic client registration; silo
  access is granted (and revoked) in the owner's dashboard, never via
  scopes; every tool call and turn is audited server-side.

The canonical consumer is [Buzz](https://github.com/onesilo/onesilo-buzz),
the open-source workspace memory agent — the reference implementation this
SDK is extracted from.

## Status

Pre-release. The package is being extracted from Buzz (Agent Smith
SILO-123); the surface will follow the MemoryStore spec and the compute
contract documented in the One Silo developer docs.

## Who this is for

One Silo agents are a capability of your One Silo account, not a separate
developer product: enterprise teams deploying custom agents into their
org, and individuals self-hosting an agent against their own silos. Usage
runs against the account's plan.

## License

[Apache-2.0](LICENSE). See [NOTICE](NOTICE).
