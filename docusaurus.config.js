// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hi! I'm Adnan Rahić",
  tagline:
    "I help developer-first companies grow for a living, craft code, and share knowledge at events across the globe. I've been helping products build DevRel programs since 2018.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://adnanrahic.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/home.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      metadata: [
        // Basic Meta Tags
        {
          name: "description",
          content:
            "I help developer-first companies grow for a living, craft code, and share knowledge at events across the globe. I've been helping products build DevRel programs since 2018",
        },
        {
          name: "keywords",
          content:
            "Developer Relations, DevRel, Product Marketing, Product Growth, Solution Engineering",
        },
        { name: "author", content: "Adnan Rahic" },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Hi! I'm Adnan Rahić" },
        {
          property: "og:description",
          content:
            "I help developer-first companies grow for a living, craft code, and share knowledge at events across the globe. I've been helping products build DevRel programs since 2018",
        },
        { property: "og:url", content: "https://adnanrahic.com" },
        {
          property: "og:image",
          content: "https://adnanrahic.com/img/home.png",
        },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: "@adnanrahic" },
        { name: "twitter:title", content: "@adnanrahic" },
        {
          name: "twitter:description",
          content:
            "I help developer-first companies grow for a living, craft code, and share knowledge at events across the globe. I've been helping products build DevRel programs since 2018",
        },
        {
          name: "twitter:image",
          content: "https://adnanrahic.com/img/home.png",
        },

        // Robots
        { name: "robots", content: "index, follow" },

        // Viewport and Mobile Optimization
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // Theme Color for Mobile Browsers
        { name: "theme-color", content: "#000000" }, // Set to your site's main color
      ],
      navbar: {
        title: "@adnanrahic",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/talks", label: "Talks", position: "left" },
          { to: "/about", label: "About", position: "left" },
          {
            href: "https://github.com/adnanrahic",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Sitemap",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Talks",
                to: "/talks",
              },
              {
                label: "About",
                to: "/about",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Bento",
                href: "https://bento.me/adnanrahic",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/adnanrahic/",
              },
              {
                label: "Twitter / X",
                href: "https://twitter.com/adnanrahic",
              },
              {
                label: "GitHub",
                href: "https://github.com/adnanrahic",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <code>adnanrahic.com</code>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
