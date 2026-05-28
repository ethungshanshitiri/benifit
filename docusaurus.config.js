// @ts-check

const config = {
  title: 'BeNiFIt',
  tagline: 'MSCA fellowship on intrabody nanoscale communication for in vivo biomarker sensing',
  favicon: 'img/benifit-mark.svg',

  url: 'https://ethungshanshitiri.github.io',
  baseUrl: '/benifit/',

  organizationName: 'ethungshanshitiri',
  projectName: 'benifit',
  trailingSlash: true,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: false,
          routeBasePath: 'news',
          blogSidebarCount: 0
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/benifit-hero.svg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'BeNiFIt',
        logo: {
          alt: 'BeNiFIt logo',
          src: 'img/benifit-mark.svg'
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/overview', label: 'Overview', position: 'left'},
          {to: '/research-outputs', label: 'Research Outputs', position: 'left'},
          {to: '/news', label: 'News & Media', position: 'left'},
          {to: '/team-contact', label: 'Team & Contact', position: 'left'},
          {href: 'https://github.com/ethungshanshitiri/benifit', label: 'GitHub', position: 'right'}
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigate',
            items: [
              {label: 'Home', to: '/'},
              {label: 'Overview', to: '/overview'},
              {label: 'Research Outputs', to: '/research-outputs'},
              {label: 'News & Media', to: '/news'},
              {label: 'Team & Contact', to: '/team-contact'},
              {label: 'Outreach', to: '/outreach'}
            ]
          },
          {
            title: 'Open Science',
            items: [
              {label: 'GitHub profile', href: 'https://github.com/ethungshanshitiri'},
              {label: 'Project repository', href: 'https://github.com/ethungshanshitiri/benifit'},
              {label: 'Simulator repository', href: 'https://github.com/ethungshanshitiri/intrabodySimulator'},
              {label: 'UPC', href: 'https://www.upc.edu/en'},
              {label: 'N3Cat', href: 'https://n3cat.upc.edu/'}
            ]
          },
          {
            title: 'Partners',
            items: [
              {label: 'NTNU', href: 'https://www.ntnu.edu/'},
              {label: 'WBRG at NTNU', href: 'https://ous-research.no/home/balasingham/Group-members/8089'}
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BeNiFIt. MSCA fellowship website built with Docusaurus and deployed on GitHub Pages.`
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula
      }
    })
};

module.exports = config;
