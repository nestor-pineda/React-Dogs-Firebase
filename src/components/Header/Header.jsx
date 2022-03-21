import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Link className="link" to="/">
          <h1 className="header-logo">
            My
            <br />
            Animals
            <br />
            List
          </h1>
        </Link>
      </StyledHeader>
    </>
  );
};

export default Header;
