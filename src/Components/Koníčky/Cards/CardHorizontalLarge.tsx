import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FC } from "react";
import "./CardAnimations.scss";

interface Props {
  image: string;
  text: {
    heading: string;
    body: string;
  };
}

const CardHorizontalLarge: FC<Props> = ({ image, text }) => {
  const { heading, body } = text;
  return (
    <Card className="w-100 h-100 d-flex">
      <CardMedia
        className="image-fadeIn"
        component="img"
        style={{ height: "25vh", width: "calc(75vw / 4)" }}
        alt="Live from space album cover"
        image={image}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }} className="text-fadeIn">
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
            color="text.secondary"
            className="text-font custom-text d-none d-xl-block"
          >
            {body}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardHorizontalLarge;
