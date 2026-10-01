# Frequently Asked Questions (FAQ)

> _Common questions about the MAAP AI Plugins marketplace and how to get started._

---

### Q: What is this marketplace for?

It helps MAAP users find and install AI plugins — **skills** and **MCP
servers** — for the Multi-Mission Algorithm and Analysis Platform. Use it to:

- Convert science algorithms into OGC Application Packages
- Query MAAP jobs, batches, costs, and workspace files from your AI agent
- Automate other MAAP workflows as new plugins are contributed

It is ideal for standardizing how MAAP users work with algorithms and the
platform from inside an AI agent.

---

### Q: What do I need to use these plugins?

You're recommended to have an _agentic_ AI tool installed, such as:

- **Claude Code** — command-line AI agent by Anthropic
- Other AI assistants with skill / MCP support

**Important:** the AI tool needs to be an _agentic_ tool — not a browser-based
chatbot. It should be able to read/write files, execute commands, and automate
workflows.

**Installing a plugin (Claude Code):**

```
/plugin marketplace add MAAP-Project/maap-ai-marketplace
/plugin install <name>@maap-ai-marketplace
```

Then use it by following the **example usage** shown on the plugin's page. MCP
servers are connected via your agent's MCP config rather than installed as a
skill — see the server's page for details.

---

### Q: What's the difference between a Skill and an MCP Server?

**Skills** are specialized instruction sets that guide AI agents through a
specific task — "recipes" for workflows like converting an algorithm to OGC.

**MCP Servers** (Model Context Protocol) are integrations that connect AI agents
to external services and APIs — such as the MAAP Console's job and workspace
tools. An MCP server can be hosted elsewhere; this marketplace links to it and
explains how to connect.

---

### Q: Do the plugins have to live in this repository?

- **Skills** in this initial marketplace live in-repo under
  `static/marketplace/skills/`.
- **MCP servers** can be **externally hosted** — the marketplace links to the
  repo or hosted endpoint rather than copying the code in (the MAAP Platform
  server is a link to `MAAP-Project/maap-console-ui`).
- Whole **other marketplaces** can be surfaced here via **federation** (adding
  their registry URL to `marketplaceConfig.registries`).

---

### Q: How do I contribute my own plugin?

1. **Review the guidelines:** see
   [Submit an AI Plugin](/docs/contribute/submit-ai-plugin).
2. **Create your artifact:** develop your skill or MCP server.
3. **Test it** with an agentic AI tool.
4. **Submit a pull request** adding it to `static/marketplace/` and an entry to
   `static/data/registry.json`.

---

## Still have questions?

Open an issue or start a discussion on the
[marketplace repository](https://github.com/MAAP-Project/maap-ai-marketplace).
