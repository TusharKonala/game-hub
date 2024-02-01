import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      {/* "space-between" instructs the container to distribute the items evenly along the main axis,
       with equal space between the items, and also ensuring that the first
        and last items are flush against the container edges. */}
      {/* Padding is the space between the content of an element and its borders */}
      <Image src={logo} boxSize="60px" />

      <ColorModeSwitch></ColorModeSwitch>
      {/* adding switch in navbar */}
    </HStack>
  );
};

export default NavBar;
