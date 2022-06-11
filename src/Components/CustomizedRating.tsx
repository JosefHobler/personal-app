import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

interface Props {
  value: number;
}

const CustomizedRating: React.FC<Props> = ({ value }) => {
  return (
    <Box>
      <StyledRating
        name="customized-color"
        readOnly
        className="gap-1"
        defaultValue={value}
        precision={0.5}
        icon={<FontAwesomeIcon icon={faLanguage} fontSize="inherit" />}
        emptyIcon={<FontAwesomeIcon icon={faLanguage} fontSize="inherit" />}
      />
    </Box>
  );
};

export default CustomizedRating;
