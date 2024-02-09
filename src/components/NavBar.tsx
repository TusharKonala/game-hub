import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      {/* onSearch on the left side of the equal sign (=) is the prop name. 
It is the name that the SearchInput component will use to refer to the 
function passed from its parent (NavBar)
 onSearch is not predefined in React or JavaScript; it's a name chosen by the developer
  in this context. In React, when you pass a function as 
 a prop to a component, you can name the prop whatever you like, based on the functionality it represents
onSearch on the right side of the equal sign is the actual function being passed 
as a prop. This is the function defined in the parent component (NavBar) that the 
SearchInput component will be able to call when need */}
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

// In the Props interface of NavBar, you specify the expected props, including the onSearch function:
// interface Props {
//   onSearch: (searchText: string) => void;
// }
// When you use the SearchInput component in NavBar:
// <SearchInput onSearch={onSearch} />
// You're passing the onSearch function from the parent (NavBar) to the child (SearchInput) as a prop.
// In the SearchInput component, you declare a parameter with the same name onSearch:
// const SearchInput = ({ onSearch }: Props) => {
//   // Component logic here
// };
// Here, onSearch represents the onSearch prop received from the parent component (NavBar).
// You're not redefining the onSearch function in the SearchInput component. Instead, you're using the
// function that was passed
//  down as a prop from the parent. The purpose is to allow SearchInput to interact with the onSearch function

// Qs) Then why have we created another interface called "props" in search input
// Ans) The Props interface in the SearchInput component is used to define the expected props
// for that specific component. It is a way to communicate the contract or structure of the props
//  that the SearchInput component should receive. While the function onSearch is defined in the
// Props interface of NavBar, the SearchInput component may have its own set of props that it expects.

export default NavBar;
