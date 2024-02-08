import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
// this library consists of icons for repersenting various platform (ps, xbox)
import { MdPhoneIphone } from "react-icons/md";
// This is using object destructuring
//  in a React component to extract the MdPhoneIphone component from the imported module.
// so we are basically grabbing a property from an object
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

export interface Props {
  platforms: Platform[];
  // an array of Platform objects
}

const PlatformIconList = ({ platforms }: Props) => {
  // Props Interface:
  // The Props interface is defined using TypeScript.
  //  It specifies that the PlatformIconList component expects a prop named platforms,
  //   which should be an array of Platform objects.
  // ({ platforms }: Props):
  // This is object destructuring used in the function parameter of the PlatformIconList component.
  // It extracts the platforms prop from the props object, allowing you to use platforms
  //  directly within the component without referring to props.platforms.
  const iconMap: { [key: string]: IconType } = {
    // specifies that iconMap is an object where the keys are strings, and the values are of type IconType.
    pc: FaWindows,
    playstation: FaPlaystation,
    // we are assigning a value which is an icon to a key called "playstation"
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  //   this object will be used to map the name of each platform to an icon
  // the keys of each object will represent the slug of each platform
  //   the value of a slug will be a value in small case font
  //   for eg: slug: 'playstation'( refer to key "playstation" to understand the logic)

  return (
    <HStack marginY={1}>
      {/* add a vertical margin of 4px (1 represents 4px) */}
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
        // refer to the interface called "Platform" in "useGames.t"
        // we are passing the key dynamically using "platform.slug"
        // []: represnts indexing, we are passing the key inside this to get the corresponding value
        // gray.500: each color has different shades so 500 is just representing a specific shade
      ))}
    </HStack>
  );
};

export default PlatformIconList;
