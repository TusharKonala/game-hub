import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // previously we had multiple state variables,it causes a lot of clutter, to avoid it
  // made an interface and passed those variables as properties
  // {} as GameQuery: the initial value of gameQuery is an empty object that adheres to the GameQuery
  // interface

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
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            // making neccessary changes
          />
        </GridItem>
      </Show>

      <GridItem area="main" paddingX={5}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={
            (platform) => setGameQuery({ ...gameQuery, platform })
            //...gameQuery: copying existing properties of gameQuery into a new object
            // platform: adding a new property called "platform" to this object
          }
        />
        <GameGrid gameQuery={gameQuery} />
        {/* making neccessary changes */}
      </GridItem>
    </Grid>
  );
}

export default App;
