import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  // added
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
        {/* <NavBar> Component: */}
        {/* You are rendering an instance of the NavBar component.
onSearch Prop:
The onSearch prop is passed to the NavBar component. This prop is a function that
 handles search functionality.
Arrow Function in onSearch:
The onSearch prop is assigned an arrow function that takes a parameter 
searchText. This parameter represents the text entered by the user when searching for games.
setGameQuery Function:
Inside the arrow function, setGameQuery is called. It seems to be a function 
that sets the state of the gameQuery object.
Updating gameQuery:
The setGameQuery function is used to update the gameQuery state by spreading 
the existing properties and updating the searchText property with the new value
 (searchText entered by the user). */}
        {/* so basically navbar controls the searchInput 
 bcos its the parent of searchInput, search input
 tells us what to do with the input when onSubmit event occurs and app is where the actual input
 is being passed */}
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area="main" paddingX={5}>
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
