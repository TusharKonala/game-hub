import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// to search the games according to the entered text, follow the process given below:
// 1) The search component will notify the app component about the entered text, the app component
// will store the entered text inside a query object and send it to the game grid component

interface Props {
  onSearch: (searchText: string) => void;
}
// an interface is a way to define a contract or a set of rules that an object or a class must follow.
// It specifies a set of methods, properties, and their types that a class or an object must have.
// The Props interface specifies that any component using SearchInput must provide a prop named onSearch.
// In React, components can receive data from their parent components through a mechanism called
//  "props" (short for properties). Props are a way to pass information from a parent component
//  to its child components.
//  Here's why we pass props in the provided code:
// Communication between Components:
// Components in a React application are often structured in a tree-like hierarchy, with parent
//  components containing child components.
// Props provide a mechanism for communication between these components.
// They allow data to flow from a parent component down to its children.
// In the provided code, the parent component of the SearchInput component is the NavBar component.
//  The SearchInput component
//  is being used inside the NavBar component, and the onSearch prop is passed from NavBar to SearchInput
// Reusability:
// By passing props, you can create reusable components. A component can be designed to
//  receive different data and behave accordingly based on the props it receives.
// In the case of the SearchInput component, it receives the onSearch prop. This allows
//  component to be versatile and adaptable to different scenarios where a
//  search functionality is needed.
// Customization and Configurability:
// Props enable customization and configurability of components. Different instances of
//  the same component can be configured to behave differently by passing different props.
// For example, the onSearch prop in SearchInput allows the parent component to provide a
// specific function that handles the search functionality. This makes SearchInput
//  flexible and usable in various contexts.
// Separation of Concerns:
// React follows the principle of "separation of concerns," where each component has
//  a specific responsibility. Props help maintain this separation by allowing components
//  to focus on their intended functionality while receiving necessary data from their parent components..

const SearchInput = ({ onSearch }: Props) => {
  // n the provided code, you have a React functional component named SearchInput,
  //  and it's receiving a prop named onSearch through destructuring.
  //   The function parameter is written using destructuring syntax: { onSearch }.
  // This syntax extracts the onSearch prop from the props object.
  //  It's a concise way of writing props.onSearch

  const ref = useRef<HTMLInputElement>(null);

  //   const ref: This declares a constant variable named ref to store the reference to the input element.
  // useRef<HTMLInputElement>: The useRef function is a hook provided by React. It returns a mutable
  // object called a "ref object." The generic type <HTMLInputElement> specifies the type of element
  //  for which the ref is created.
  //  In this case, it's an HTML input element.
  // (null): The initial value passed to useRef is null. This means that initially, the ref does
  // not point to any specific DOM element.
  // The primary purpose of using useRef in this context is to create a reference that can be
  // attached to the input element within the JSX code. Once the component is rendered,
  //  ref.current will point to the actual DOM element (in this case, the input element),
  //  allowing you to access and manipulate its properties or values.

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
        // onSearch is a function that is passed as a prop to the component.
        //  It is expected to handle the search functionality.
        //ref.current.value: passing parameter to the function defined in the interface
      }}

      // onSubmit={(event) => { ... }}: This is an inline arrow function assigned to the onSubmit
      //  event of the form. It specifies what should happen when the form is submitted.
      // event.preventDefault(): This line prevents the default form submission behavior. By calling
      // event.preventDefault(), the browser's default action of submitting the form and reloading
      // the page is suppressed. This
      //  is often done in React applications to handle form submissions manually using JavaScript.
      // if (ref.current) console.log(ref.current.value)(this code was previously present
      // ): This checks if the ref.current exists before
      // attempting to log its value to the console. The ref.current represents the current value of the
      // ref, which is the underlying DOM element. If the input element exists (i.e., ref.current is not null),
      //  it logs the value of the input element to the console using console.log(ref.current.value).
      // The purpose of this code is to capture the value entered into the input field when the form is
      //  submitted. By preventing the default form submission, you have the opportunity to handle the
      //   form data programmatically. In this case, it checks if the input element exists (not null)
      //    and logs its value to the console
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          // ref={ref}: The ref attribute is used to assign the reference (ref) created with useRef to
          // this specific Input component. This allows you to access and interact with the underlying
          // DOM input element using ref.current
          //  outside of the JSX code. For example, you can programmatically set or get the value of the
          //   input element.
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
    // wrapping text input in form
  );
};

export default SearchInput;
