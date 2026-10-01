# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-09-28

### Added

- Initial release of the **MAAP AI Plugins** marketplace, built on the
  [NASA-AMMOS/slim-framework](https://github.com/NASA-AMMOS/slim-framework).
- `algorithm-to-ogc` skill (scaffolded stub) — convert a science algorithm into
  an OGC Application Package.
- `maap-platform` MCP server entry — an externally hosted, OAuth-secured
  Streamable-HTTP server (in `MAAP-Project/maap-console-ui`) for querying MAAP
  jobs, batches, costs, and workspace files.
- Registry-driven build: `static/data/registry.json` is the hand-authored source
  of truth, and `.claude-plugin/marketplace.json` is generated from it by
  `src/conf/generate-marketplace.js`.
- Multi-marketplace support: federate remote registries via
  `marketplaceConfig.registries`.
