import styled from "styled-components";
import {Logo} from "../components"


const HeaderStyled = styled.nav`
  border: 1px solid #ccc;
  display: flex;
`;

const Header = () => {
  return (
    <div>
      <HeaderStyled className="header">
      <Logo/>
      </HeaderStyled>


    </div>
  );
};

export default Header;
