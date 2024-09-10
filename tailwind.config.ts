import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: '#EC2164',
          'api-10': '#E9EAEA',
          'api-20': '#D3D4D5',
          'api-30': '#BDBFC1',
          'api-50': '#909497',
          'api-60': '#22292F',
          'ai-50': '#5F3988',
        },
        schemes: {
          'on-surface': '#1D1B20',
          outline: '#79747E',
          'outline-variant': '#CAC4D0',
        },
        primary: {
          10: '#FEF3F6',
          20: '#FAD0DD',
          50: '#FD1C63',
          60: '#E81255',
        },
        grey: {
          100: '#F9FAFB',
          200: '#E6E6EB',
        },
        neutral: {
          10: '#FFFFFF',
          30: '#F4F5F7',
          50: '#C1C7D0',
          90: '#253858',
        },
        fills: {
          tertiary: '#787880',
        },
      },
      fontFamily: {
        roboto: ['Roboto'],
        inter: ['Inter'],
      },
      boxShadow: {
        navbar:
          '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
