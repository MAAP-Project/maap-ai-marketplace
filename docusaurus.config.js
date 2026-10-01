// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// ---------------------------------------------------------------------------
// CUSTOMIZE ME: the values below are the main things to change when adopting
// this framework for your own project. Everything else is driven from here,
// from `static/data/registry.json`, and from the `brandingConfig` block.
// ---------------------------------------------------------------------------

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MAAP AI Plugins",
  tagline:
    "AI plugins — skills and MCP servers — for the Multi-Mission Algorithm and Analysis Platform, discoverable and installable by AI agents.",
  favicon: "/img/maap-favicon.png",

  // Set the production url of your site here
  url: "https://maap-project.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/maap-ai-marketplace/",

  // GitHub pages deployment config.
  organizationName: "MAAP-Project",
  projectName: "maap-ai-marketplace",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/MAAP-Project/maap-ai-marketplace/tree/main/",
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/MAAP-Project/maap-ai-marketplace/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/nasamaap-logo.png",
      navbar: {
        title: "MAAP AI Plugins",
        logo: {
          alt: "MAAP",
          src: "img/nasamaap-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "contributeSidebar",
            position: "left",
            label: "Contribute",
          },
          {
            type: "docSidebar",
            sidebarId: "faqSidebar",
            position: "left",
            label: "FAQ",
          },
          {
            type: "docSidebar",
            sidebarId: "aboutSidebar",
            position: "left",
            label: "About",
          },
          {
            href: "https://github.com/MAAP-Project/maap-ai-marketplace",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Contribute a plugin",
                to: "/docs/contribute/contributing/",
              },
              {
                label: "FAQ",
                to: "/docs/faq",
              },
              {
                label: "About",
                to: "/docs/about",
              },
            ],
          },
          {
            title: "MAAP",
            items: [
              {
                label: "MAAP Project",
                href: "https://maap-project.org/",
              },
              {
                label: "MAAP Documentation",
                href: "https://docs.maap-project.org/en/latest/",
              },
              {
                label: "MAAP on GitHub",
                href: "https://github.com/MAAP-Project",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Marketplace on GitHub",
                href: "https://github.com/MAAP-Project/maap-ai-marketplace",
              },
              {
                label: "GitHub Discussions",
                href: "https://github.com/MAAP-Project/maap-ai-marketplace/discussions",
              },
            ],
          },
        ],
        copyright: `MAAP AI Plugins — a marketplace for the NASA Multi-Mission Algorithm and Analysis Platform.<br/>Copyright © ${new Date().getFullYear()}. Contents licensed under Apache License Version 2.0.<br/>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
        defaultMode: "light",
        respectPrefersColorScheme: false,
      },
    }),

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  // Custom fields for marketplace framework configuration
  customFields: {
    // Enhanced branding configuration for easy customization
    brandingConfig: {
      // Visual Assets
      logoPath: "/img/nasamaap-logo.png",

      // Hero Section Control
      hero: {
        showCornerFeatures: true, // Toggle corner features display
        cornerFeatures: [
          {
            position: "top-left",
            icon: "ai-centric.png",
            text: "AI plugins that install straight into your agent or harness",
            enabled: true,
          },
          {
            position: "bottom-left",
            icon: "community.svg",
            text: "Built by the MAAP community for the MAAP community",
            enabled: true,
          },
          {
            position: "top-right",
            icon: "iterative.svg",
            text: "Fully open source",
            enabled: true,
          },
          {
            position: "bottom-right",
            icon: "scope.svg",
            text: "Skills and MCP servers for Earth science at scale",
            enabled: true,
          },
        ],
        customTagline: "AI plugins for the MAAP platform.", // Short hero subtitle
      },

      // Marketplace Control
      marketplace: {
        showEmptyState: true, // Show friendly message when marketplace is empty
        // Note: registries are configured under marketplaceConfig.registries
      },
    },

    marketplaceConfig: {
      // Registries the website loads and displays. The first entry is the
      // local, hand-authored source of truth (static/data/registry.json).
      // To federate another MAAP or partner marketplace, add its published
      // registry.json URL below — the browser shows a registry picker when
      // more than one is listed. Example:
      //   "https://<org>.github.io/<repo>/data/registry.json",
      registries: [
        "./static/data/registry.json", // Local registry (hand-authored source of truth)
      ],
    },
  },
};

module.exports = config;
