import { FC } from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  image: string;
  heading: string;
  body: string;
}

const CardVerticalLarge: FC<Props> = ({ image, heading, body }) => {
  return (
    <Card className="w-100 h-100">
      <div style={{ height: "25vh", overflow: "hidden" }}>
        <CardMedia
          className="animation-fadeIn delay-5 duration-5"
          component="img"
          alt={heading}
          image={require(`../../../Assets/Konicky/${image}`)}
        />
      </div>
      <CardContent className="animation-fadeIn delay-7 duration-5">
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
