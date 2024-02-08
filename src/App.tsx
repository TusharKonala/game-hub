import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

// we need to share the selected genre with the grid element ("main" column which consists of game cards)
// to share the state between 2 elements (aside and main, aside consists of  genre list) we need to lift it
// up to the closest parent element which is the current one ie "App.tsx"
function App() {
  const [selectedgenre, setSelectedGenre] = useState<Genre | null>(null);
  // declaring a state variable to store the selected genre
  // <Genre | null>: specifies that this variable can hold a genre object or a null object

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          {/* You are rendering the GenreList component and passing a prop called onSelectGenre to it. 
          The onSelectGenre prop is a function that takes a genre as its argument
           and sets the selected genre in the state using setSelectedGenre(genre). */}
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedgenre} />
        {/* {selectedGenre}: the state variable that holds the currently selected genre */}
      </GridItem>
    </Grid>
  );
}

export default App;
