import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'EveryX Docs', // Updated Project Name
  tagline: 'The Central Knowledge Base for EveryX Prediction Markets',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // Set the production url of your site here
  url: 'https://docs.everyx.io', // Placeholder based on your brief
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'EveryX', 
  projectName: 'everyx-docs', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Updated edit URL placeholder
          editUrl:
            'https://github.com/EveryX/everyx-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/EveryX/everyx-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    
    // CONFIG UPDATE: Force Dark Mode for the "Space" aesthetic
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, // Set to true if you want to lock it to dark mode only
      respectPrefersColorScheme: false,
    },
    
    navbar: {
      title: 'EveryX',
      logo: {
        alt: 'EveryX Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar', // Matches the ID in sidebars.ts
          position: 'left',
          label: 'Documentation', // Renamed from 'Tutorial' to match your project
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/EveryX',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Core Concepts',
              to: '/docs/core-concepts', // Matches your new file structure
            },
            {
              label: 'Trading Guide',
              to: '/docs/trading-guide',
            },
            {
              label: 'Platform Mechanics',
              to: '/docs/platform-mechanics',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus', // Update with EveryX Discord
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/docusaurus', // Update with EveryX Twitter
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/EveryX',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EveryX. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;