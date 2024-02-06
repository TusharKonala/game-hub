import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
// we want to display a loading skeleton to improve user experience, a loading skeleton is basically
// a set of blank game cards that will be displayed till the actual game card is being retrieved from the
// server

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      {/* width is arbritary, we need to make sure that the skeleton and the 
        actual game card have the same width, similary make sure that the other attributes(borderRadius,
             overflow) have the same value
         */}
      <Skeleton height="200px" />
      {/* skeleton is a placeholder for the image being loaded */}
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
