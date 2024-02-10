import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

// we want to render heading dynamically ie the heading will change according to the applied filter
// to add heading dynamically we want pass the gamequery object which contains the applied filter

interface Props {
  gameQuery: GameQuery;
}

// Logic: Initially we render "Games"
// If the selected genre is "Action" we render "Action Games"
// If the selected platform is "Xbox" we render "Xbox Games"
// If the selected genre is "Action" and the selected platform is "Xbox" we render "Xbox Action Games"

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || " "} ${
    gameQuery.genre?.name || " "
  } Games`;

  //   Template Literal (Backticks): The backticks (`) tell JavaScript that we're creating a special
  //    type of text called
  //    a "template literal." It's like a flexible text container.
  // ${gameQuery.platform?.name}: Inside the template literal, this part says, "Insert the name
  //  of the game platform here." The ?. ensures that if there's no platform information, it doesn't
  //   cause an error. It's a safety check.
  // ${gameQuery.genre?.name}: Similar to the platform part, it says, "Insert the genre here."
  // The ?. is again a safety check to avoid issues if there's no genre information.
  // Putting it All Together: When the code runs, these placeholders get replaced with the
  //  actual names from gameQuery.platform and gameQuery.genre.
  //  The resulting sentence is like saying "The [platform] [genre] Games."
  //`${gameQuery.platform?.name || ' '}: if you have a platform name then render it otherwise render an empty
  // string ie " "

  return (
    <Heading marginY={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
  //   rendering heading as "h1"
};

export default GameHeading;
