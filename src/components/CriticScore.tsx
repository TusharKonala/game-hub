import { Badge } from "@chakra-ui/react";
// this is badge that consists of the score given by critics, if the score is high then the badge color
// will be green
interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  //   If score is greater than 75, then color is set to "green".
  // If score is not greater than 75, it checks the second condition: If score is greater than 60,
  //  then color is set to "yellow".
  // If neither condition is true, meaning score is not greater than 60, then color is set to an empty
  //    string ("").

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={1} borderRadius="4px">
      {score}
    </Badge>
  );
  //   In Chakra UI, a <Badge> is like a digital sticker or label that you
  // can stick onto something in your website or app.
};

export default CriticScore;
