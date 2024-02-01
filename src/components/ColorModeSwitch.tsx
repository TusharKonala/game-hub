import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  // ]useColorMode: This is a hook provided by the Chakra UI library, which is commonly
  // used in React applications for managing color modes (such as light and dark modes).
  // { toggleColorMode, colorMode }: This part of the code uses destructuring assignment to
  //  extract two properties from the object returned by the useColorMode hook.
  // toggleColorMode: This is a function that, when called, toggles between different color
  //  modes (e.g., switching between light and dark modes).
  // colorMode: This variable holds the current color mode, indicating whether the application
  //  is currently in light mode or dark mode. It could be a string value, such as "light" or "dark".

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {/* isChecked: This prop determines the initial state of the switch. In this case,
       it's set to {colorMode === "dark"}, which means the switch will be checked (on) if the 
       colorMode is equal to "dark" and unchecked (off) otherwise.
       This is a way to synchronize the visual state of the switch with the current color mode. */}
      {/* this switch is used to toggle between light and dark modes */}
      {/* onChange: This prop specifies a function to be called when the switch is toggled.
       In this case, it's set to {toggleColorMode}, which is the function provided by the useColorMode
        hook. When the switch is toggled, the toggleColorMode function 
      is called, and it will handle the logic to switch between different color modes (e.g., from light to dark).*/}
      <Text>Dark Mode</Text>
      {/* providing a label for the switch */}
    </HStack>
  );
};

export default ColorModeSwitch;
