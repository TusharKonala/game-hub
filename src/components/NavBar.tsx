import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
// import: This is a JavaScript keyword used to bring in external modules or files
// into your current module (in this case, a React component).
// logo: This is the name given to the imported module or file. In this case,
// it represents the image file "logo.webp."
// The choice of the variable name is arbitrary and can be anything you prefer
// .. means "go up one level" in the directory structure.
// "../assets/" is the path where you want to go.
// "logo.webp" is the name of the image file you want to import.
// So, ../assets/logo.webp means: "Go up one level, then into the 'assets'
// directory, and finally, look for a file named 'logo.webp'.

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      {/* we cannot pass the image name directly, we need to first import it as a module and then we can
      pass it
      First element in the navbar is an image,
      boxSize="60px": specifies the size of the image */}
      <Text>NavBar</Text>
    </HStack>
    // Hstack: Horizontal Stack, it ensures that elements are ordered in horizontal manner
  );
};

export default NavBar;
