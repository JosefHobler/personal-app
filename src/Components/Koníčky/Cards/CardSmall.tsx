import { Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  text: {
    heading: string;
    body: string;
  };
}

const CardSmall: FC<Props> = ({ text }) => {
  const { heading, body } = text;

  return (
    <Card className="w-100 h-100">
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
          className="text-font custom-text d-none d-xl-block"
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardSmall;
