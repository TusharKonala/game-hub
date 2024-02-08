import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

// we will sort the list of games based on the selected genre

interface Props {
  onSelectGenre: (genre: Genre) => void;
  // it takes a an object of type "Genre" and returns void
}
// we are going to pass the selected genre to the app component, there we will be able to dictate
// the action that
// should be taken when the genre is selected, we can't do it here bcos the app component is the one that holds
// the state variable hence it should be the one updating it

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
            {/* variant="Link": our button will look like links*/}
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
