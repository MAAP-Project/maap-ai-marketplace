---
sidebar_position: 1
---

# About

> _AI plugins for the Multi-Mission Algorithm and Analysis Platform._

## What is this?

**MAAP AI Plugins** is a public marketplace of AI plugins — **skills** and **MCP
servers** — for the NASA
[Multi-Mission Algorithm and Analysis Platform (MAAP)](https://maap-project.org/).
Instead of hunting through documentation, MAAP users can discover a plugin here
and install it directly into their AI agent or harness of choice.

It is built on an open-source, reusable framework
([NASA-AMMOS/slim-framework](https://github.com/NASA-AMMOS/slim-framework)),
customized for MAAP.

**What makes it useful:**
- 🤖 **AI-native** — plugins that your agent invokes automatically
- 🎯 **One-command installation** — works with Claude Code and other agentic tools
- 🌐 **Open source** — free to use, fork, and contribute
- 🛰 **MAAP-aware** — built around MAAP algorithms, jobs, and workflows

---

## What it provides

Browse and install from the [marketplace](/):

**🎯 Skills**
AI-powered workflows for MAAP tasks — for example, converting an algorithm into
an OGC Application Package.

**🔌 MCP Servers**
Integrations that connect your agent to MAAP services — for example, the **MAAP
Platform** MCP server for querying jobs, batches, costs, and workspace files.

The catalog can also **federate** other marketplaces — remote registries appear
alongside the local catalog in a registry picker.

---

## How it works

### For users

1. **Browse** the [marketplace](/)
2. **Install** via your AI tool. For Claude Code:
   ```
   /plugin marketplace add MAAP-Project/maap-ai-marketplace
   /plugin install <name>@maap-ai-marketplace
   ```
3. **Use** by asking your AI assistant

**Compatible AI tools:** Claude Code, and other agentic assistants with skill /
MCP support.

### For contributors

This is a community-driven catalog.
[Contribute](/docs/contribute/submit-ai-plugin) by adding a new skill or MCP
server, or improving an existing one.

---

## How it is built

The marketplace follows a **single source of truth** philosophy: everything is
driven from `static/data/registry.json`. The Claude Code plugin manifest
(`.claude-plugin/marketplace.json`) is generated from it automatically by the
build. See the [contributing guide](/docs/contribute/submit-ai-plugin) for
details.
