import { extendTheme, ThemeConfig} from "@chakra-ui/react";
// we need to customize the default theme offered by chakra ui
// extendTheme: This is a function provided by Chakra UI that allows you to extend and customize 
// the default theme.
// ThemeConfig: This is an interface in Chakra UI that defines the configuration options for the theme.
//  In this case, you are using it to set the initialColorMode to 'dark'.

const config: ThemeConfig = {
    initialColorMode: 'dark'
}
// const config: This declares a constant variable named config 
// using the const keyword. The variable is going to hold the configuration object for the Chakra UI theme.
// This specifies the type of the variable config. In TypeScript 
// (or environments with type checking), it's explicitly stating that config should adhere
//  to the ThemeConfig interface. 
// The term "adhere" means to stick to, follow, or conform to a particular set of rules, guidelines, standards,
//  or expectations. In the context of programming and type systems, when we say that a variable adheres to a
//   certain type or interface, it means
//  that the variable's structure and content align with the specifications defined by that type or interface.
// { initialColorMode: 'dark' }: This is an object that sets a specific configuration option:
// initialColorMode: This option sets the initial color mode for the theme. In this case, it is set to 'dark',
//  indicating that the default color mode when the application starts will be the dark color scheme.

const theme = extendTheme({config});
// extendTheme: This is a function provided by Chakra UI that allows you to extend and customize the default theme.
//  It takes an object as an argument, where you can specify various customizations for the theme.

export default theme;

// to make sure that this is working, go to chrome dev tools then go to "applications" then go to local storage
// and delete the key having value "light" 
// we do this because chakra ui stores the mode in the local storage so that it can remember it in the future
// so "light" mode was already stored ie before applying these changes
