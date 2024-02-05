import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
          // refer to the following interafces: "Game", "Platform"
          // here parent_platforms: is an array of objects where each object has a property
          // called "platform" and the value of this property is an object, so we are basically
          // mapping each object to the an object which is the value of the platform property
          // The arrow function (p) => p.platform is applied to each element (p).
          // It extracts the value of the "platform" property from each object.
          // The result is an array of objects where each object is the value of the "platform" property
        ></PlatformIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
