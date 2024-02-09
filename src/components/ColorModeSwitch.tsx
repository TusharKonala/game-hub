import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      {/* whiteSpace={"nowrap"}: This is a prop being passed to the <Text> component. In this case,
         it sets the white space handling for the text to "nowrap." The value "nowrap" is a CSS 
         property that means the text will not wrap to the next line when it exceeds the width
         of its container. It will stay on a single line, and any overflowing content will be truncated or hidden. */}
    </HStack>
  );
};

export default ColorModeSwitch;
