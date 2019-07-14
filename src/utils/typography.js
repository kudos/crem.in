import Typography from "typography"

const sansSerifFonts = ['Lato', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'sans-serif']
const serifFonts = ['PT Serif', 'Apple Garamond', 'Baskerville', 'Times New Roman', 'Droid Serif', 'Times','Source Serif Pro', 'serif']

const typography = new Typography({
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '300',
        '400',
        '700',
        '900',
      ],
    },
    {
      name: 'PT Serif',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  baseFontSize: '21rem',
  baseLineHeight: 1.4,
  headerFontFamily: sansSerifFonts,
  bodyFontFamily: serifFonts,
  headerWeight: '900',
  headerColor: '#404040',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
      textDecoration: 'none',
      color: '#404040',
    },
    'h1, h3': {
      fontSize: rhythm(1.3),
      lineHeight: rhythm(1.7),
    },
    h4: {
      fontWeight: '300',
    },
    a: {
      color: '#1EAEDB',
    },
    'h5 a': {
      fontSize: rhythm(.8),
      fontWeight: '500',
      color: '#1EAEDB',
      textDecoration: 'underline',
      fontFamily: serifFonts.join(','),
    },
    small: {
      color: '#999',
      fontWeight: '400',
    },
    footer: {
      textAlign: 'right',
      color: '#999',
      fontSize: rhythm(.6),
      fontFamily: sansSerifFonts.join(','),
    },
    '.gatsby-highlight': {
      borderRadius: '5px',
      marginBottom: rhythm(1),
    },
    'pre.language-bash': {
      padding: `${rhythm(.5)} !important`,
      borderRadius: '5px'
    },
    'code.language-bash': {
      fontSize: `${rhythm(.6)} !important`,
      lineHeight: `${rhythm(1)} !important`,
    },
    li: {
      listStyle: `none`,
    },
    ul: {
      marginLeft: 0,
    },
    '.resume li': {
      listStyle: `disc`,
    },
    '.resume ul': {
      marginLeft: rhythm(1),
    },
    '.resume h2': {
      fontWeight: 300,
      fontSize: rhythm(1.3),
    },
    '.resume h3': {
      fontSize: rhythm(.8),
      marginBottom: 0,
    },
    '.resume small': {
      fontFamily: sansSerifFonts.join(','),
    },
    '.skills ul': {
      width: '45%',
      float: 'left',
    }
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
