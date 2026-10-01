---
name: maap-platform
description: Query MAAP jobs, batches, costs, and workspace files from your AI agent. A Streamable-HTTP MCP server hosted by the MAAP Console, secured with Keycloak OAuth.
---

# MAAP Platform MCP Server

The **MAAP Platform** MCP server lets an AI agent query the MAAP job-processing
system (HySDS) and your MAAP workspace directly. It is **hosted by the MAAP
Console** — you do not install or run any code from this marketplace; you point
your agent at the server's HTTP endpoint and authenticate.

- **Source:** [`MAAP-Project/maap-console-ui`](https://github.com/MAAP-Project/maap-console-ui/tree/main/server/src/mcp) (the server lives in the console's backend)
- **Transport:** Streamable HTTP (`POST`/`GET`/`DELETE` on `/mcp`, session via the `Mcp-Session-Id` header) — **not** stdio
- **Auth:** Keycloak OAuth 2.0 (Bearer JWT). The server advertises OAuth discovery so most agents can complete the login flow automatically.

## Tools

| Tool | What it does |
| --- | --- |
| `search_jobs` | Search your MAAP jobs by status, tag, and other filters |
| `get_job_detail` | Get full detail for a single job |
| `get_job_cost` | Get the compute cost of a job |
| `list_batches` | List job batches |
| `get_batch_stats` | Get aggregate stats for a batch |
| `list_workspace_files` | List files in your MAAP workspace |
| `get_workspace_file` | Read a workspace file |

## Endpoints

| Environment | URL |
| --- | --- |
| Production | `https://console.maap-project.org/mcp` |
| Local dev | `http://localhost:3001/mcp` |

## Connect from your AI agent

### Claude Code / any harness that reads `.mcp.json`

Add the server to your `.mcp.json` (or your agent's MCP config):

```json
{
  "mcpServers": {
    "maap-platform": {
      "type": "http",
      "url": "https://console.maap-project.org/mcp"
    }
  }
}
```

Your agent will discover the OAuth requirement (the server responds `401` with a
`WWW-Authenticate: Bearer resource_metadata=".../.well-known/oauth-protected-resource"`
header) and walk you through the Keycloak login. The server supports OAuth
dynamic client registration and the `authorization_code` + `refresh_token`
grants.

### Manual token

If your harness needs a token directly, supply a Keycloak-issued Bearer JWT in
the `Authorization: Bearer <token>` header. OAuth discovery is available at:

- `/.well-known/oauth-protected-resource`
- `/.well-known/oauth-authorization-server`

## Access notes

- The MAAP Console and this MCP server are **access-controlled**; you need a MAAP
  account. Some tools are gated to the `operator` role.
- This marketplace entry is a **link/reference** to the externally hosted server
  — installing it does not copy any server code into your project.
