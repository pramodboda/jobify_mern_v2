import styled from "styled-components";


import logoURL from "../assets/media/images/J-Blue.png";

const MainLogo = styled.div`
  // border: 1px solid red;
  width: 2rem;

  .logo {
    width: 100%;
  }
`

const Logo =() => {
    return (
        <MainLogo>
        <img src={logoURL} alt="logo" className="logo" />
      </MainLogo>
    )
}

export default Logo