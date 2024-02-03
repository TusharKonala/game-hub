import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import React from "react";
import GameGrid from "./components/GameGrid";
// imported GameGrid

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
        {/* adding GameGrid in the main area */}
      </GridItem>
    </Grid>
  );
}

export default App;
