import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      {/* borderRadius={10}: This prop sets the border-radius of the Card component to 10 units. 
      Border-radius controls the roundness of the corners of
       an element. In this case, the corners of the card will have a rounded shape with a radius of 10 units. */}
      {/* overflow property determines how content that overflows the box (in this case, the Card) 
       should be treated. "hidden" means that any content that overflows
        the Card will be clipped or hidden, and won't be visible outside the defined boundaries of the card. */}
      <Image src={game.background_image} />
      {/*src:  refer to Game interface in "useGames.ts"*/}
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        {/* 2xl: 2xlarge is a specified size in chakra ui */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
