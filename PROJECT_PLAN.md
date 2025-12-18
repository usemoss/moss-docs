# Moss Docs Revamp Plan

Phase-oriented plan with status checkboxes. Update status as we ship. Completed items marked `[x]`.

## Phase 1 — IA, Homepage, Quickstarts (DONE)
- [x] Redesign IA to intent-first sidebar (Start → Build → Integrate → Reference)
- [x] Rewrite homepage as router with pick-your-path cards
- [x] Create single-path Quickstart (JS) with visible success
- [x] Create single-path Quickstart (Python) with visible success

## Phase 2 — Build Recipes & Integrations (DONE)
- [x] Add core Build recipes (Offline-first Search, Agent Memory, Local Embeddings, Docs Q&A)
- [x] Add additional Build recipes (Electron app local search, Browser extension memory)
- [x] Add Integrate pages (Authentication, Indexing Data, Retrieval, Storage & Persistence, Deployment/Production)
- [x] Add reusable Next steps footer and apply across pages

## Phase 3 — SDK Alignment & Examples (DONE)
- [x] Align SDK usage with moss-samples (JS `@inferedge/moss`, Python `inferedge-moss`)
- [x] Add .env guidance and dotenv usage to quickstarts
- [x] Add JS/Python upsert examples with options
- [x] Clarify retrieval options and filters

## Phase 4 — Branding & Navigation Polish (IN PROGRESS)
- [x] Add Moss icon in navbar (theme-aware)
- [x] Decide final navbar treatment (wordmark with embedded moss icon, normal size)
- [x] Set final brand colors (gradient-inspired magenta → violet palette; tuned for contrast)
- [ ] (Optional) TOC styling: add right-rail accent line (would require custom CSS/theming beyond Mintlify defaults)

## Phase 5 — Reference & Quality Gate (TODO)
- [x] Pull SDK behavior from moss-samples into quickstarts and Integrate pages (env vars, load/query, lifecycle ops)
- [ ] Replace sample OpenAPI with Moss spec and re-enable API Reference tab
- [ ] Add SDK method signatures/examples per method in `reference/sdk`
- [ ] Add error codes/messages table in `reference/errors`

## Phase 6 — Recipes & Visual Aids (TODO)
- [ ] Add simple diagrams/ASCII for each Build recipe
- [ ] Add 1–2 more high-impact recipes if needed (e.g., offline mobile search, help-center reranking)

## Phase 7 — Feedback & Validation (TODO)
- [ ] Add Contribute/Feedback links globally (footer or header)
- [ ] Run `npx mint@latest build` to validate links/MDX
- [ ] Manual QA: click all homepage cards and Next steps links
- [ ] Open PR for review and merge

## Notes / Decisions
- API Reference hidden until Moss spec is available (avoids Mint sample confusion)
- Navbar currently uses wordmark (icon + text) with the provided moss-dark asset embedded; size reset to the preferred smaller treatment
- Homepage “Explore the SDK reference” points to `/reference/sdk`
