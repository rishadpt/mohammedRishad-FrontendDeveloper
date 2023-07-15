import { extendTheme } from '@chakra-ui/react';
import '@fontsource/jost/100.css';
import '@fontsource/jost/200.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import '@fontsource/jost/800.css';
import '@fontsource/jost/900.css';

const breakpoints = {
  sm: '576px',
  md: '769px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1400px',
};

const fonts = {
  heading: 'Jost, sans-serif',
  body: 'Jost, sans-serif',
};

const theme = extendTheme({
  breakpoints,
  fonts,
  colors: {
    white: '#FFFFFF',
    soft: {
      orange: '#FFE1E1',
      gray: '#F7F7F7',
    },
    brand: {
      primary: {
        // 50: '#FFECE8',
        // 100: '#FFBFB1',
        // 200: '#FF947F',
        // 300: '#FF6F51',
        // 400: '#FE421B'
        50: '#ffebde',
        100: '#ffc8b0',
        200: '#ffa67f',
        300: '#FF8F5F',
        400: '#fe5f1c',
      },
    },
    text: {
      black: {
        200: '#c0bfbf',
        300: '#a5a5a5',
        400: '#8b8b8b',
        500: '#727272',
        600: '#595959',
        700: '#354860',
        800: '#292525',
        900: '#150a0d',
      },
      blackRed: {
        100: '#3F1010',
      },
    },
    semantic: {
      success: '#48BB78',
      failure: '#E53E3E',
    },
  },
  components: {
    Heading: {
      variants: {
        sectionTitle: {
          color: 'text.black.700',
          fontWeight: 800,
          textAlign: 'center',
          fontSize: ['1.4rem', '2rem', null, null, '2.6rem'],
        },
        primary: {
          color: 'white',
          fontSize: ['1.4rem', '2.5rem', null, null, '3rem'],
          lineHeight: ['33px', '54px'],
          fontWeight: 500,
        },
        secondary: {
          color: 'text.black.700',
          fontSize: ['1rem', '1.2rem', '2rem'],
        },
        tertiary: {
          color: 'text.black.700',
          fontWeight: 800,
          fontSize: ['1.2rem', null, '1.7rem'],
        },
        smaller: {
          color: 'text.black.700',
          fontWeight: 600,
          fontSize: ['0.9rem', null, '1rem'],
        },
        footerTitle: {
          color: 'white',
          fontWeight: 500,
          fontSize: ['0.9rem', null, '1.2rem'],
          borderBottom: '2px solid white',
          pb: 2,
          width: 'max-content',
        },
      },
    },
    FormLabel: {
      variants: {
        primary: {
          color: 'text.black.600',
          fontSize: ['0.9rem', '1rem'],
        },
      },
    },
    Text: {
      variants: {
        subTitle: {
          color: 'text.black.600',
          fontSize: ['1rem', '1.2rem', '1.4rem'],
        },
        description: {
          color: 'text.black.600',
          fontSize: ['0.8rem', '0.9rem', '1rem'],
        },
        fade: {
          fontSize: ['0.8rem', '1rem'],
          color: 'text.black.500',
        },
        footer: {
          color: 'white',
          fontSize: ['0.8rem', '0.9rem'],
        },
      },
    },

    Button: {
      variants: {
        solid: {
          bg: 'brand.primary.300',
          border: '2px solid',
          borderColor: 'brand.primary.300',
          color: 'white',
          px: { base: 4, xl: 8 },
          py: { base: 2, xl: 4 },
          fontSize: { base: 'sm', xl: 'md' },
          rounded: 'lg',
          _hover: {
            bg: 'brand.primary.400',
            borderColor: 'brand.primary.400',
          },
        },
        outlined: {
          bg: 'transparent',
          color: 'brand.primary.300',
          border: '2px solid',
          borderColor: 'brand.primary.300',
          px: { base: 4, xl: 8 },
          py: { base: 2, xl: 4 },
          rounded: 'lg',
          fontSize: { base: 'sm', xl: 'md' },
          _hover: {
            bg: 'brand.primary.300',
            color: 'white',
          },
        },
        normal: {
          border: 'none',
          borderRadius: '0',
          p: '0',
          m: '0',
          borderLeft: '1px solid #D0D5DD',
          borderRight: '1px solid #D0D5DD',
          marginInlineStart: '0',
        },
        active: {
          bg: '#F9FAFB',
          borderRadius: '0',
          p: '0',
          m: '0',
          borderLeft: '1px solid #D0D5DD',
          borderRight: '1px solid #D0D5DD',
          marginInlineStart: '0',
        },
      },
    },
  },
  layerStyles: {
    myCustomLayerStyle: {
      zIndex: '10', // Set your desired z-index value
    },
  },
  styles: {
    global: () => ({
      body: {
        scrollBehaviour: 'smooth',
      },
    }),
  },
});

export default theme;
