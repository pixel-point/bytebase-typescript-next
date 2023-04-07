// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Inter Fallback', ...defaultTheme.fontFamily.sans],
      title: ['Sharp Grotesk', 'Sharp Grotesk Fallback', ...defaultTheme.fontFamily.sans],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      white: colors.white,
      black: '#0F1624',
      primary: {
        1: '#5647EB',
        2: '#32279B',
      },
      secondary: {
        1: '#FFE666',
        2: '#1FD68A',
        3: '#3DB8F5',
        4: '#EB477E',
        5: '#EC93EC',
      },
      gray: {
        15: '#172136',
        30: '#364563',
        40: '#4D5E80',
        50: '#6A7895',
        60: '#8893AA',
        70: '#A7AFBE',
        80: '#C4C9D4',
        90: '#E2E4E9',
        94: '#EDEFF2',
        97: '#F6F7F8',
      },
      tones: {
        'purple-light': '#F0F2FF',
        'purple-dark': '#ACB2D2',
        'blue-light': '#F0FAFE',
        'blue-dark': '#9CBAC9',
        'green-light': '#F2FCF8',
        'green-dark': '#9CC9B6',
        'yellow-light': '#FEFEE1',
        'yellow-dark': '#E2E29C',
        'pink-light': '#FDF2FD',
        'pink-dark': '#D2ACD2',
      },
      code: {
        blue: '#192AE6',
      },
      tags: {
        purple: '#382E9E',
      },
    }),
    screens: {
      '3xl': { max: '1919px' },
      '2xl': { max: '1599px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '413px' },
    },
    fontSize: {
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      30: '30px',
      32: '32px',
      34: '34px',
      36: '36px',
      38: '38px',
      40: '40px',
      44: '44px',
      46: '46px',
      48: '48px',
      50: '50px',
      52: '52px',
      54: '54px',
      56: '56px',
      60: '60px',
      64: '64px',
      68: '68px',
      72: '72px',
      80: '80px',
      85: '85px',
      88: '88px',
      90: '90px',
      104: '104px',
      112: '112px',
    },
    letterSpacing: {
      tighter: '-0.025em',
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
    },
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
      boxShadow: {
        menu: '0px 5px 15px 0px rgba(172, 178, 210, 0.5)',
        icon: '0px 5px 15px rgba(172, 178, 210, 0.8)',
      },
      backgroundImage: {
        cite: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 34.28%, rgba(240, 242, 255, 0.5) 100%)',
      },
    },
  },

  corePlugins: {
    container: false,
  },
};
