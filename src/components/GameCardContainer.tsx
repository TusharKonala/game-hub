import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {/* we removed the "width" bcos we don't want the cards to have a fixed width
      by default our width is set to 100%
      the "main" column contains these cards we have set its width to 1fr meaning
      it will occupy the entire available space and we haven't specified the width 
      of these cards hence all cards will distrubute the available space equally */}
      {children}
    </Box>
  );
};

export default GameCardContainer;
