import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
// we had specified the same styles for game card and skeleton
// to remove duplication of styles we are building a container that will contain
// these cards

interface Props {
  children: ReactNode;
}
// we will pass game card and skeleton as children to this container

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow={"hidden"}>
      {children}
      {/* container consists of children */}
    </Box>
    // this box element is equivalent to a "div"
    // specifying styles at one place to avoid duplication
  );
};

export default GameCardContainer;
