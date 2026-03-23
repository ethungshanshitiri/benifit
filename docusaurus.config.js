// @ts-check

const config = {
  title: 'BeNiFIt',
  tagline: 'In vivo biomarker sensing through intrabody nanoscale communication',
  favicon: 'img/benifit-mark.svg',

  url: 'https://ethungshanshitiri.github.io',
  baseUrl: '/benifit/',

  organizationName: 'ethungshanshitiri',
  projectName: 'benifit',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: 'news'
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
          {to: '/project', label: 'Project', position: 'left'},
          {to: '/research-outputs', label: 'Research Outputs', position: 'left'},
          {to: '/outreach', label: 'Outreach', position: 'left'},
          {to: '/news', label: 'News & Media', position: 'left'},
          {to: '/team-contact', label: 'Team & Contact', position: 'left'},
          {href: 'https://github.com/ethungshanshitiri', label: 'GitHub', position: 'right'}
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigate',
            items: [
              {label: 'Home', to: '/'},
              {label: 'Project', to: '/project'},
              {label: 'Research Outputs', to: '/research-outputs'},
              {label: 'Outreach', to: '/outreach'},
              {label: 'News & Media', to: '/news'},
              {label: 'Team & Contact', to: '/team-contact'}
            ]
          },
          {
            title: 'Open Science',
            items: [
              {label: 'GitHub profile', href: 'https://github.com/ethungshanshitiri'},
              {label: 'Project repository', href: 'https://github.com/ethungshanshitiri/benifit'},
              {label: 'UPC', href: 'https://www.upc.edu/en'},
              {label: 'N3Cat', href: 'https://n3cat.upc.edu/'}
            ]
          },
          {
            title: 'Partners',
            items: [
              {label: 'IBEC', href: 'https://ibecbarcelona.eu/'},
              {label: 'NTNU', href: 'https://www.ntnu.edu/'},
              {label: 'WBRG', href: 'https://www.balasingham.com/'}
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BeNiFIt. Built with Docusaurus and deployed on GitHub Pages.`
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula
      }
    })
};

module.exports = config;
