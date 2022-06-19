import { Link } from "react-router-dom";

import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { pageSliceAction } from "../../Store/pagesSlice";
import logoImage from "../../Assets/SVGs/logo.svg";

function Logo() {
  const dispatch = useAppDispatch();

  return (
    <Link
      to="/"
      onClick={() => dispatch(pageSliceAction.changeCurPage(0))}
      style={{ zIndex: 10000000 }}
      className="position-fixed m-2"
    >
      <img src={logoImage} alt="logo-josef-hobler" />
    </Link>
  );
}

export default Logo;
