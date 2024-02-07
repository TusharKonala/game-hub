import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {/* we removed the "width" bcos we don't want the cards to have a fixed width
      by default our width is set to 100% */}
      {children}
    </Box>
  );
};

export default GameCardContainer;
