# JavaScript/TypeScript dead-code showcase

This is a deliberately unhealthy, small TypeScript project for demonstrating
dead-code analysis to customers. It is designed to be pushed as its own GitHub
repository and analyzed as a standalone project.

## What it demonstrates

The source contains examples of unused files, exports, types, dependencies,
type-only production dependencies, enum members, class members, circular
dependencies, stale suppressions, and an architecture boundary violation. It
also contains live controls so a demo can show that genuinely used code is not
reported indiscriminately.

See [EXPECTED_FINDINGS.md](EXPECTED_FINDINGS.md) for the complete map and the
current DCA detection/remediation boundary.

## Run locally

Requires Node.js 20 or newer.

```sh
npm install
npm run typecheck
```

To inspect the dead-code candidates with Fallow, install the pinned Fallow
version in your analysis environment and run:

```sh
fallow dead-code --format json
fallow dead-code --unused-enum-members --unused-class-members --format json
fallow dead-code --production --format json
fallow suppressions
```

The project intentionally contains findings. A failing dead-code quality gate
is expected; the goal is to demonstrate detection and classification, not to
make this fixture clean.

## Repository layout

```text
src/index.ts                         entry point and live controls
src/customer.ts                      exports, types, enum, class, type-only import
src/orphan.ts                        unreachable file
src/cycle-a.ts / src/cycle-b.ts      circular dependency
src/api/                             API layer
src/infrastructure/                  boundary target
```

This repository is a synthetic test subject. Do not use its findings as proof
that a production code path is safe to remove without human review.
