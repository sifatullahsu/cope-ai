import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      screens: {
        default: '1420px'
      }
    },
    fontFamily: {
      primary: ['var(--font-familjen_grotesk)']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        textPrimary: '#9391A8',
        textSecondary: '#FCFCFC'
      }
    }
  },
  plugins: [require('daisyui')]
}
export default config
