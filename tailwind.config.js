module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    backgroundColor: theme => ({
      'rosa': { DEFAULT: '#D9185F', light: '#DF5B8C', dark: '#590A27' },
      'amarillo': { DEFAUL: '#FCC301', ligth: '#FDD44C', dark: '#7D6000' },
      'verde': { DEFAULT: '#43BF0A', ligth: '#70CA47', dark: '#164003' },
      'cafe': { DEFAULT: '#8C7777', ligth: '#D9B8B8', dark: '#594C4C' },
      'cafe-section': '#D5CAC6',
      'danger': '#e3342f',
      'base': '#F2EEEB',
    }),
    textColor: theme => ({
      'rosa': { DEFAULT: '#D9185F', light: '#DF5B8C', dark: '#590A27' },
      'amarillo': { DEFAUL: '#FCC301', ligth: '#FDD44C', dark: '#7D6000' },
      'verde': { DEFAULT: '#43BF0A', ligth: '#70CA47', dark: '#164003' },
      'cafe': { DEFAULT: '#8C7777', ligth: '#D9B8B8', dark: '#594C4C' },
      'cafe-section': '#D5CAC6',
      'danger': '#e3342f',
      'base': '#F2EEEB',
    }),
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    }
  },
  variants: {},
  plugins: [],
}
