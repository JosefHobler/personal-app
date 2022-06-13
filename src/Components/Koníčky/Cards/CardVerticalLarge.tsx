import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  image: string;
  text: {
    heading: string;
    body: string;
  };
}

const CardVerticalLarge: FC<Props> = ({ image, text }) => {
  const { heading, body } = text;
  return (
    <Card className="w-100 h-100">
      <CardMedia
        className="image-fadeIn"
        component="img"
        alt="green iguana"
        image={image}
        style={{ height: "25vh" }}
      />
      <CardContent className="text-fadeIn">
        <Typography
          gutterBottom
          variant="h5"
          className="heading-font"
          component="div"
        >
          {heading}
        </Typography>
        <Typography
          variant="body2"
          className="text-font d-none d-xl-block"
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardVerticalLarge;
