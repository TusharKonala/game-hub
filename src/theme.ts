import { extendTheme, ThemeConfig} from "@chakra-ui/react";


const config: ThemeConfig = {
    initialColorMode: 'dark'
}


const theme = extendTheme({config,
colors: {
    gray: {
        50: '#f9f9f9',
        100: '#ededed',
        200: '#d3d3d3',
        300: '#b3b3b3',
        400: '#a0a0a0',
        500: '#898989',
        600: '#6c6c6c',
        700: '#202020',
        800: '#121212',
        900: '#111'
    }
}});

// we are customizing the theme, we are mapping different shades of grey(50,100,etc) to our preferred shades
// for eg: 50 is assigned the value #f9f9f9 (gray is an object with keys ie properties like
// 50,100, etc whic represents its different shades)


export default theme;


