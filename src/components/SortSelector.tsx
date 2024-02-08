import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: " ", label: "Relevance" },
    { value: "-added", label: "Date added" },
    // -added: sorts them in reverse order ie the latest games will appear at the top hence we use "-"
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  //   this array stores the options of the sort drop down list
  // each object has two properties: 1) value: value sent to the backend, this
  //   value is a query parameter which is predefined in the rawg api 2) label
  //   we will notify the app component about the selected option and the app component
  // will share details about the same with the game grid (similar to filtering)

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  //   finding the selected sort type

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            // onClick: This is like saying, "Hey, when someone clicks on this menu item,
            //  do something special!"
            // () => onSelectSortOrder(order.value): This part is like a set of instructions for what to
            //  do when the click happens. It says, "Call the function onSelectSortOrder and give
            //  it the value of the sorting option (order.value)."
            // So, when you click on a sorting option in the dropdown menu, it tells the
            // onSelectSortOrder function about your choice by passing along the value of that
            //  sorting option. It's a way for the code to respond to your click and update things accordingly.
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
