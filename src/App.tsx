import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenreList } from "./components/GenreList.1";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        // we have only one column("main"), hence 1fr will occupy the entire space
        lg: "200px 1fr",
        // here we have two columns ("aside" and "main")
        // width of aside is 200px and width of main is 1fr(main column will occupy the entire space that
        // is left after the required space is allocated to aside column )
      }}
      // templateColumns: used to set the width of columns
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          {/* this container contains the list of genres, 
          in order to have ample amount of space between the list items and the border of the screen
          we set horizontal padding ie paddingX to 5 */}
          <GenreList />
          {/* adding list of genres */}
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
