import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./Theme";
// importing theme
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <ChakraProvider>: This is a component provided by Chakra UI. It serves as a context provider
     for your Chakra UI theme and other configuration options.
theme={theme}: The theme prop is used to pass your custom Chakra UI theme to the provider. 
This allows all Chakra UI components within the <ChakraProvider> to use the customized theme you defined
   in the theme variable. */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* <ColorModeScript>: This is a component provided by Chakra UI specifically 
      for initializing the color mode of the application. It is usually placed in the head 
      of your HTML document. */}
      {/* {theme.config.initialColorMode}: refer to "theme.ts" */}
      {/* However, if you're already using <ChakraProvider> and setting the theme there, using <ColorModeScript>
       might not be necessary unless you have specific requirements for initializing the color mode separately */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
