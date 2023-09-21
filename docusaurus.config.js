// @ts-check

const { openApiPluginConfig, navbarDropdown } = require('./apis');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VATSIM.dev',
  tagline: 'Documentation, tips, and tricks for developers on VATSIM',
  favicon: 'img/favicon.ico',

  url: 'https://vatsim.dev',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/vatsimnetwork/vatsim.dev/tree/main/',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      /** @type {import('docusaurus-plugin-openapi-docs').PluginOptions} */
      ({
        id: 'apiDocs',
        docsPluginId: 'classic',
        config: openApiPluginConfig,
      }),
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'VATSIM.dev',
        logo: {
          alt: 'VATSIM Developers Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'dropdown',
            items: [
              {
                to: '/services/apis',
                label: 'Overview',
              },
              ...navbarDropdown,
            ],
            position: 'left',
            label: 'APIs',
          },
          {
            href: 'https://tech.vatsim.net/',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/vatsimnetwork',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              { label: 'Instagram', href: 'https://instagram.com/vatsimnet' },
              { label: 'Facebook', href: 'https://facebook.com/vatsimnet' },
              { label: 'Twitter', href: 'https://twitter.com/vatsim' },
              { label: 'GitHub', href: 'https://github.com/vatsimnetwork' },
            ],
          },
          {
            title: 'Sites',
            items: [
              { label: 'Homepage', href: 'https://vatsim.net/' },
              { label: 'Support Helpdesk', href: 'https://support.vatsim.net/' },
              { label: 'Community Discord', href: 'https://community.vatsim.net/' },
              { label: 'MyVATSIM', href: 'https://my.vatsim.net/' },
              { label: 'Statistics', href: 'https://stats.vatsim.net/' },
              { label: 'Forums', href: 'https://forum.vatsim.net/' },
              { label: 'Network Status', href: 'https://network-status.vatsim.net/' },
            ],
          },
          {
            title: 'Organisation',
            items: [
              { label: 'Logos', href: 'https://vats.im/logo' },
              { label: 'Brand Guidelines', href: 'https://vats.im/brand' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VATSIM Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
