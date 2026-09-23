# JavaScript/TypeScript dead-code showcase

This deliberately unhealthy, synthetic project contains one small example of
each requested finding. It is a separate project rooted at `test-js-ts`; do not
analyze the surrounding DCA implementation repository as the target.

## Expected findings

| Finding family | Deliberate example | Expected analyzer signal |
| --- | --- | --- |
| Unused file | `src/orphan.ts` | `unused_files` |
| Unused export | `abandonedFormatter` in `src/customer.ts` | `unused_exports` |
| Unused types | `LegacyCustomerRecord` and `UnusedCustomerTuple` | `unused_types` |
| Unused dependency | `left-pad` in `package.json` | `unused_dependencies` |
| Type-only production dependency | `type-fest`, imported only with `import type` | `type_only_dependencies` in production mode |
| Unused enum members | `CustomerStatus.Suspended` and `.Deleted` | `unused_enum_members` |
| Unused class member | `CustomerService.deleteAllCustomers` | `unused_class_members` |
| Circular dependency | `cycle-a.ts` ↔ `cycle-b.ts` | `circular_dependencies` |
| Stale suppression | Suppression above the used `buildCustomerLabel` export | `stale_suppressions` |
| Boundary violation | API layer imports the infrastructure layer | `boundary_violations` |

`nanoid`, `CustomerStatus.Active`, `CustomerService.findById`, and
`buildCustomerLabel` are live controls. They help demonstrate that the analyzer
does not simply flag every dependency, enum member, class method, or export.

## Current DCA product boundary

DCA's current Fallow adapter can ingest all array-shaped finding families from
the pinned Fallow JSON report. It gives first-class entity labels to unused
files, exports, types, dependencies, enum/class members, type-only dependencies,
and cycles. Boundary violations and stale suppressions are still ingested, but
currently have the generic `unknown` entity label.

Automated sealed remediation is narrower than detection. It currently has
first-class transforms only for unused files, unused exports, unused types,
unused production dependencies, and unused development dependencies. Enum
members, class members, cycles, type-only dependencies, stale suppressions, and
boundary violations should be presented as detected review candidates—not as
fully supported automatic cleanup.

## Suggested demo commands

Run repository-controlled commands only in the approved isolated runner:

```sh
fallow dead-code --format json
fallow dead-code --unused-enum-members --unused-class-members --format json
fallow dead-code --production --format json
fallow suppressions
```

Finding counts may differ by Fallow version and flags. Verify the exact output
before presenting a customer claim.
