// @ts-check
const { themes } = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shapper',
  tagline: 'Precise Rigs, Endless Perspective',
  favicon: 'img/favicon.png',

  url: 'https://mysteropodes.github.io',
  baseUrl: '/shapper-docs/',

  organizationName: 'mysteropodes',
  projectName: 'shapper-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/shapper-social.png',
      navbar: {
        title: 'Shapper',
        logo: {
          alt: 'Shapper Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Help Guide',
          },
          {
            href: 'https://mysteropode.com',
            label: 'Mysteropode',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Getting Started', to: '/installation' },
              { label: 'Mask Influences', to: '/mask-influences' },
            ],
          },
          {
            title: 'Links',
            items: [
              { label: 'Gumroad', href: 'https://gumroad.com' },
              { label: 'Mysteropode', href: 'https://mysteropode.com' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Mysteropode — Shapper`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
