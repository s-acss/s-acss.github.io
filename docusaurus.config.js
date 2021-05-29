/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SACSS',
  tagline: 'Dinosaurs are cool',
  url: 'https://s-acss.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 's-acss', // Usually your GitHub org/user name.
  projectName: 'sacss', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-cn': {
        label: '简体中文',
      },
    },
  },
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'SACSS',
      logo: {
        alt: 'SACSS',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro.about',
          label: '📄 Docs',
        },
        {
          href: 'https://www.npmjs.com/package/sacss',
          label: '⬇️ NPM',
        },
        {
          href: 'https://github.com/s-acss/sacss',
          label: '🐱 GitHub',
        },
        {
          href: 'https://github.com/s-acss/sacss/discussions',
          label: '🧲 Discussions',
          position: 'right',
        },
        // {
        //   to: '/blog',
        //   label: 'Blog',
        //   position: 'right'
        // },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SACSS, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          include: ['**/*.md', '**/*.mdx'], // Extensions to include.
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ziven27/sacss/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:'https://github.com/ziven27/sacss/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // 以下参数将被直接传递给 @docusaurus/plugin-content-sitemap （设置为 false 则表示禁用此插件）
        sitemap:  {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-E818CNKJJB',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
};
