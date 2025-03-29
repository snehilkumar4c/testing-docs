const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HashiCorp Vault Documentation',
  tagline: 'Secure, store and tightly control access to tokens, passwords, certificates, encryption keys',
  favicon: 'img/favicon.ico',

  url: 'https://snehilkumar4c.github.io',
  baseUrl: '/my-docs/',
  organizationName: 'snehilkumar4c',
  projectName: 'my-docs',
  trailingSlash: false,

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Display the documentation as a landing page
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Vault Documentation',
        logo: {
          alt: 'Vault Logo',
          src: 'img/vault-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://www.vaultproject.io',
            label: 'Website',
            position: 'right'
          },
          {
            href: 'https://github.com/hashicorp/vault',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Other Products',
            position: 'right',
            items: [
              {
                label: 'Terraform',
                href: 'https://www.terraform.io',
              },
              {
                label: 'Consul',
                href: 'https://www.consul.io',
              },
              {
                label: 'Nomad',
                href: 'https://www.nomadproject.io',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/installation',
              },
              {
                label: 'Vault Overview',
                to: '/docs/vault',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'HashiCorp Forum',
                href: 'https://discuss.hashicorp.com/c/vault',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hashicorp/vault',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HashiCorp. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
