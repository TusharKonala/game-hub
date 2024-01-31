import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {/* we are specifying templateareas wiht an object, for phones we do not want to display "aside", hence the value passed to base property
       does not contain "aside", lg stands for large screen which refers to a pc screen */}
      {/* Commented on purpose:
    <Grid templateAreas={`"nav nav" "aside main"`}>
       using "``" beacuse we have multiple strings enclosed in double quotes */}

      {/*In HTML, a grid system is typically implemented using CSS Grid Layout. It allows developers to create two-dimensional
   layouts with rows and columns, providing flexibility in organizing and positioning elements on a webpage. The layout is defined by a
   grid container and its properties, such as
    the number of columns, rows, and the gap between items. CSS Grid is a powerful tool for creating responsive and complex layouts in modern web development.

   "nav nav": in the first row we have two columns named "nav"
   "aside main": in the second row we have two columns named "aside" and "main", "aside" is the first column and "main" is the second
   n HTML, the nav element is used to define a section of a webpage that contains navigation links.
    It is typically used to group together the navigation menu or links that allow users to navigate to different parts of the website or to external resources.
   The main element is used to identify the main content of a document. It typically contains the primary content of the page, excluding headers, footers,
   and sidebars.
   The aside element is used to define content that is tangentially related to the content around it. It is often used for sidebars, pull quotes,
    or other content that  is supplementary to the main content. */}

      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      {/* area="nav": we are placing this item in an area called "nav"
      bg: background
      "Nav": text that is visible on the web page */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      {/* above="lg": aside element will only be rendered on screens of size lg and bigger*/}
      {/* Show: Show the children if the media query matches.
Hide: Hide the children if the media query matches.
 Use chrome dev tools to get a preview */}
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
