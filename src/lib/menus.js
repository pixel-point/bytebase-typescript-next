import ROUTE from './route.ts';

export const MENUS = {
  header: [
    { title: 'Solutions', href: ROUTE.SOLUTIONS },
    { title: 'Blog', href: ROUTE.BLOG },
    {
      title: 'Docs',
      items: [
        {
          name: 'Get Started',
          description: 'Instantly validates tax ID numbers ',
          linkUrl: '/',
          iconName: 'rocket',
        },
        {
          name: 'CLI',
          description: 'Ensures your compliance with DAC7',
          linkUrl: '/',
          iconName: 'cli',
        },
        {
          name: 'API',
          description: 'Issues locally compliant invoices',
          linkUrl: '/',
          iconName: 'api',
        },
        {
          name: 'How-To',
          description: 'Sends authorities tax data in real',
          linkUrl: '/',
          iconName: 'howTo',
        },
      ],
    },
    { title: 'Pricing', href: ROUTE.PRICING },
    { title: 'About us', href: ROUTE.ABOUT },
  ],
  mobile: [
    { title: 'Solutions', href: ROUTE.SOLUTIONS },
    { title: 'Blog', href: ROUTE.BLOG },
    {
      title: 'Docs',
      items: [
        {
          name: 'Get Started',
          description: 'Instantly validates tax ID numbers ',
          linkUrl: '/',
          iconName: 'rocket',
        },
        {
          name: 'CLI',
          description: 'Ensures your compliance with DAC7',
          linkUrl: '/',
          iconName: 'cli',
        },
        {
          name: 'API',
          description: 'Issues locally compliant invoices',
          linkUrl: '/',
          iconName: 'api',
        },
        {
          name: 'How-To',
          description: 'Sends authorities tax data in real',
          linkUrl: '/',
          iconName: 'howTo',
        },
      ],
    },
    { title: 'Pricing', href: ROUTE.PRICING },
    { title: 'About us', href: ROUTE.ABOUT },
  ],
};
