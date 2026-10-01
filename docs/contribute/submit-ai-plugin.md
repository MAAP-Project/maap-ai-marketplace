---
sidebar_position: 1
---

# Submit an AI Plugin

Want to share your work with the MAAP community? Here's how to contribute an AI
plugin — a **skill** or an **MCP server** — to the marketplace.

## Quick Start

**3 simple steps:**

1. **Create an issue** to discuss your idea
2. **Build your contribution** — add the content and a registry entry
3. **Submit a pull request** — we'll review and help you merge it

---

## Step 1: Create an Issue

Before building, open an issue on the
[marketplace repository](https://github.com/MAAP-Project/maap-ai-marketplace)
to discuss your idea. This helps the community give early feedback and avoids
duplicate work.

---

## Step 2: Build Your Contribution

### Add the content folder

Create your plugin under `static/marketplace/`:

```
static/marketplace/skills/your-skill-name/
├── SKILL.md      # Main documentation (required)
├── scripts/      # Automation scripts (optional)
└── assets/       # Templates, configs, docs (optional)
```

MCP servers go under `static/marketplace/mcp-servers/your-server-name/MCP.md`.
(An **externally hosted** MCP server needs only a registry entry — see below —
plus an optional `MCP.md` doc page describing how to connect to it.)

`SKILL.md` / `MCP.md` use a two-field frontmatter:

```markdown
---
name: your-skill-name
description: What it does. Use when <the trigger condition for the agent>.
---
```

### Add a registry entry — the source of truth

This marketplace is **registry-driven**. You hand-author
**`static/data/registry.json`**, and the Claude Code plugin manifest
(`.claude-plugin/marketplace.json`) is **generated from it** by the build. You
never edit `marketplace.json` directly.

Add an entry to the `skills` array (or `mcp`) in `static/data/registry.json`:

```json
{
  "name": "your-skill-name",
  "displayName": "Your Plugin Display Name",
  "description": "What it does and when to use it",
  "category": "algorithms",
  "tags": ["OGC", "algorithm", "application-package"],
  "example": "Convert my algorithm into an OGC Application Package",
  "lastUpdated": "2026-09-28"
}
```

**You only author the semantic fields.** The build derives the rest:

| Field | Who sets it |
| --- | --- |
| `name`, `displayName`, `description`, `category`, `tags`, `example`, `lastUpdated` | **You** (hand-authored) |
| `dependencies`, `version`, `author`, `homepage`, `repository`, `license` | **You** (optional) |
| `type`, `skill_file_url`, `zip_file_path` | **Build** (derived — do not write them) |

For an **externally hosted** MCP server (one that lives in another repo or is
run as a hosted service — like the MAAP Platform server), hand-author a `source`
object and/or `npm_package`, and set `"external_only": true`. For example:

```json
{
  "name": "maap-platform",
  "displayName": "MAAP Platform MCP Server",
  "description": "Query MAAP jobs, batches, and workspace files from your agent.",
  "category": "infrastructure",
  "tags": ["mcp-server", "external"],
  "external_only": true,
  "source": {
    "source": "github",
    "repo": "https://github.com/MAAP-Project/maap-console-ui"
  },
  "skill_file_url": "/maap-ai-marketplace/marketplace/mcp-servers/maap-platform/MCP.md",
  "homepage": "https://github.com/MAAP-Project/maap-console-ui/tree/main/server/src/mcp",
  "lastUpdated": "2026-09-28"
}
```

An external entry gets no downloadable zip; its `skill_file_url` is hand-authored
(point it at your `MCP.md` doc page).

### Regenerate the marketplace manifest

After editing `registry.json`, run:

```bash
npm run prebuild
```

This regenerates `.claude-plugin/marketplace.json` from your registry. Commit
**both** `registry.json` and `marketplace.json` in your pull request — CI checks
that they are in sync.

---

## Step 3: Submit Your Pull Request

1. Fork the repository and clone your fork
2. Work on a branch off `main`
3. Push your changes and open a pull request
4. Link related issues and provide a demo where possible

**We'll check for:**
- ✅ Clear purpose and documentation
- ✅ A valid registry entry
- ✅ `registry.json` and `marketplace.json` in sync
- ✅ Works with an agentic AI tool

---

## Tips for Success

**Do:**
- ✅ Start with a small, focused contribution
- ✅ Get early feedback via issues
- ✅ Run `npm run prebuild` and commit the regenerated manifest
- ✅ Write a clear `description` with a "Use when…" trigger

**Don't:**
- ❌ Edit `.claude-plugin/marketplace.json` by hand
- ❌ Hand-write the derived fields (`type`, `skill_file_url`, `zip_file_path`)
- ❌ Copy an externally hosted MCP server's code into this repo — link to it instead

---

**Questions?** Ask in
[GitHub Discussions](https://github.com/MAAP-Project/maap-ai-marketplace/discussions)
or open an issue.
