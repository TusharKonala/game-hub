import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  // function useGames() returns an object, we destructure this object to retrieve properties "games,error"
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        spacing={10}
      >
        {/* The columns prop is an object that defines the number of columns for
       different screen sizes (responsive design).
{ sm: 1, md: 2, lg: 3, xl: 5 } suggests that the grid will have different numbers
 of columns based on the screen size:
sm: Small screens (probably mobile devices) will have 1 column.
md: Medium-sized screens (tablets) will have 2 columns.
lg: Large screens (desktops) will have 3 columns.
xl: Extra-large screens will have 5 columns.In the context of the Chakra UI library,
 the syntax { sm: 1, md: 2, lg: 3, xl: 5 } is specific to Chakra UI's responsive utility
  syntax for grid layouts.
 Chakra UI uses these keys (sm, md, lg, and xl) as predefined breakpoint names for different screen sizes. */}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
