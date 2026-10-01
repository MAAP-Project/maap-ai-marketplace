# MAAP AI Plugins Marketplace

A public marketplace of **AI plugins** — skills and MCP servers — for the
NASA [Multi-Mission Algorithm and Analysis Platform (MAAP)](https://maap-project.org/).
Plugins are discoverable on a website and installable directly into AI coding
tools (Claude Code, and others).

**[Browse the catalog](https://maap-project.github.io/maap-ai-marketplace/)**

## Install (Claude Code)

Add the marketplace to your agent, then install any plugin:

```bash
/plugin marketplace add MAAP-Project/maap-ai-marketplace
```

MCP servers are connected via your agent's MCP config — for example, the
MAAP Platform server:

```bash
claude mcp add --transport http maap-platform https://console.maap-project.org/mcp
```

See each plugin's page in the catalog for full install and connection details.

## Architecture

This repository is built on the reusable
[NASA-AMMOS/slim-framework](https://github.com/NASA-AMMOS/slim-framework) and
follows a **single source of truth** philosophy:

- **`static/data/registry.json`** — the hand-authored source of truth. It
  describes the marketplace identity and every skill / MCP server.
- **`.claude-plugin/marketplace.json`** — **generated** from `registry.json` by
  `src/conf/generate-marketplace.js`. This is what Claude Code reads when a user
  runs `/plugin marketplace add <repo>`. It is committed so consumers can use it
  without building the site.
- **`static/marketplace/`** — the actual content of each plugin (`SKILL.md` /
  `MCP.md`, assets, scripts). One folder per entry.
- The [Docusaurus](https://docusaurus.io/) website renders the registry into a
  searchable catalog.

```
registry.json  ──(npm run prebuild)──▶  marketplace.json
   (you edit)                              (generated, committed)
```

## Local development

```bash
npm ci          # install dependencies
npm run prebuild # generate marketplace.json + file manifests + zips
npm start       # local dev server (http://localhost:3000)
npm run build   # production build (runs prebuild first)
```

## Add a plugin

1. Create the content folder, e.g. `static/marketplace/skills/<name>/SKILL.md`
   (plus any `assets/` and `scripts/`). MCP servers go under
   `static/marketplace/mcp-servers/<name>/MCP.md`.
2. Add an entry to the `skills` (or `mcp`) array in `static/data/registry.json`.
3. Run `npm run prebuild` to regenerate `.claude-plugin/marketplace.json`, then
   commit both files.

See [`docs/contribute/submit-ai-plugin.md`](docs/contribute/submit-ai-plugin.md)
for the full guide, including how to register an **externally hosted** MCP server.

## Federating other marketplaces

Add remote registry URLs to `marketplaceConfig.registries` in
`docusaurus.config.js`. The website loads each one and shows a registry picker:

```js
registries: [
  "./static/data/registry.json",                       // this catalog
  "https://<org>.github.io/<repo>/data/registry.json", // a remote marketplace
],
```

## License

Apache 2.0 — see [LICENSE](LICENSE).

## Credits

- Built on the [NASA-AMMOS/slim-framework](https://github.com/NASA-AMMOS/slim-framework) (Apache 2.0).
- UI components adapted from [aitmpl.com](https://aitmpl.com) (MIT License).
