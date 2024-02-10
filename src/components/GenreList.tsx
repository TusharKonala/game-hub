import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                // objectFit Property:
                // The objectFit property specifies how the content (the image) should be resized and
                // fitted within its container (the <Image> component in
                //   this case).
                // It is particularly useful when the aspect ratio of the image differs from the
                //  aspect ratio of its container.
                // objectFit Values:
                // cover: This value means that the image will be scaled and cropped, if necessary,
                // to completely cover the container. It maintains the aspect ratio of the image and
                // ensures that the image covers the entire container, even if parts of it are cut off.
                src={getCroppedImageUrl(genre.image_background)}
              />
              {/* this image represents the genres, it is on the left side of the different genre options*/}
              <Button
                whiteSpace={"normal"}
                // Imagine you have a piece of text with spaces, tabs, and line breaks.
                // White space is all the empty or "invisible" characters between words and lines.
                // Spaces: The regular spaces you press on the keyboard.
                // Tabs: When you press the "Tab" key, it adds a larger space.
                // Line Breaks: When you press "Enter" to start a new line.
                // Now, the whiteSpace property in your code is like telling the computer how to
                //  treat these invisible characters.

                // If you set whiteSpace to "normal," it means the computer will handle these
                //  spaces in a regular way.
                //  It will collapse multiple spaces into one and treat line breaks like a single space.

                // If you set whiteSpace differently, let's say to "pre-line" or "pre-wrap," it means the
                // computer will respect and display the spaces and line breaks just as you've entered them.

                // So, in short, whiteSpace is a way to control how the computer handles those invisible spaces
                // and line breaks in your text.
                textAlign="left"
                // In the given code, textAlign="left" is setting the text alignment to the left
                //  within the button.
                // This means that the text content inside the button will be aligned to the left
                //  side of the buttons box.
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
