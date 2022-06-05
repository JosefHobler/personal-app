import { Fab } from "@mui/material";
import { FC } from "react";
import BackgroundText from "../Components/BackgroundText";
import Konzultant from "../Images/Konzultant.png";
import Arrow from "../Images/Feather-arrows-arrow-down.svg";

interface Props {
  unmounting: boolean;
}

const Domů: FC<Props> = ({ unmounting }) => {
  let animations = "";
  if (unmounting) {
    animations = "animation-fade";
  }

  return (
    <>
      <div className={animations}>
        <BackgroundText text="Domů" />
      </div>
      <div
        className={`${animations} h-100 d-flex flex-column justify-content-center container`}
      >
        <div className="row">
          <div className="col-6 px-5" style={{ zIndex: 100 }}>
            <h1 className="heading-font">Josef Hobler</h1>
            <p className="paragraph-width mb-3">
              Jsem mladý ambiciózní self-taught programátor a specializuji se na
              tvorbu webů. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Fugiat provident placeat facilis non quam perspiciatis.
            </p>
            <Fab
              className="orange-shadow"
              variant="extended"
              color="secondary"
              aria-label="add"
            >
              Kontaktovat
            </Fab>
          </div>
          <div className="col-6 w-25" style={{ zIndex: 100 }}>
            <img className="img-fluid" src={Konzultant} alt="Já" />
          </div>
        </div>
        <div className="position-absolute bottom-0 align-self-center text-center">
          <p>Scroll</p>
          <img style={{ width: "50px" }} src={Arrow} alt="h" />
        </div>
      </div>
    </>
  );
};

export default Domů;
