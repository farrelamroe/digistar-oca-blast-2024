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
        red: {
          100: '#EC2164',
          200: '#DA3632',
        },
        blue: {
          100: '#49A9F6',
        },
        black: {
          100: '#1D1B20',
          200: '#FFFFFF',
        },
        grey: {
          100: '#F9FAFB',
          200: '#E6E6EB',
          300: '#CAC4D0',
          400: '#79747E',
        },
      },
      fontFamily: {
        roboto: ['Roboto'],
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
