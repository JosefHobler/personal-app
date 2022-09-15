import { FC } from "react";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface Props {
  image: string;
  heading: string;
  body: string;
}

const CardHorizontalLarge: FC<Props> = ({ image, heading, body }) => {
  return (
    <Card className="w-100 h-100 d-flex">
      <CardMedia
        className="animation-fadeIn delay-5 duration-5"
        component="img"
        style={{
          height: "25vh",
          width: "calc(75vw / 4)",
        }}
        image={require(`${process.env.REACT_APP_CLIENT_URL}/Assets/Konicky/${image}`)}
        alt={heading}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{ flex: "1 0 auto" }}
          className="animation-fadeIn delay-7  duration-5"
        >
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
