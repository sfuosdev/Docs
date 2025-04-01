import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "SFU OS Dev club Docs",
  tagline: "Friendly documentation tool for OS Dev club",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://sfuosdev.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/Docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sfuosdev", // Usually your GitHub org/user name.
  projectName: "Docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sfuosdev/Docs",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sfuosdev/Docs",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "SFU OS Dev Docs",
      logo: {
        alt: "SFU OS Dev logo",
        src: "img/oslogo_transparent.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorials",
        },
        {
          type: "docSidebar",
          sidebarId: "pmSidebar",
          position: "left",
          label: "Project Management",
        },
        {
          type: "docSidebar",
          sidebarId: "execSidebar",
          position: "left",
          label: "Executives",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://github.com/sfuosdev" target="_blank" style="content: \'\'; width: 24px; height: 24px; background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg\'); background-repeat: no-repeat; background-size: 24px 24px; display: flex"></a>',
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://discord.gg/2xn6cTKGUq" target="_blank" style="display: flex; align-items: center;"><img src="https://img.icons8.com/ios-filled/50/000000/discord-logo.png" alt="Discord" style="width: 24px; height: 24px; margin-right: 8px;" /></a>',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
            {
              label: "Project Management",
              to: "/docs/intro-pm",
            },
            {
              label: "Exec",
              to: "/docs/intro-exec",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Instagram",
              href: "https://www.instagram.com/sfu_osdev/",
            },
            {
              label: "Discord",
              href: "https://discord.gg/2xn6cTKGUq",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/sfu-osdev",
            },
          ],
        },
        {
          title: "Helpful resources",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com",
            },
            {
              label: "GitHub",
              href: "https://github.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SFU Open Source Development Club. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
