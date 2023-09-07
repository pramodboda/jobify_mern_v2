import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import styled from "styled-components";

import landingPageImg from "../assets/media/images/undraw_work_in_progress_re_byic.svg";

const LandingPageContainer = styled.div`
  display: flex;

  .info {
    width: 50%;
  }

  .landing-page-img-container {
    width: 50%;
  }
  .landing-page-img {
    width: 100%;
  }
`;

import Header from "../components/Header";

const Landing = () => {
  return (
    <div className="">
      <Header />
      {/* ================== Landing Page ================== */}
      {/* <Button variant="contained">My Button</Button> */}
      <h1>Landing</h1>
      <LandingPageContainer>
        <div className="info">
          <h3>Job tracking app</h3>
          <p>
            Palo santo whatever cred la croix viral ennui meditation
            chicharrones subway tile. Listicle mustache kombucha, cronut PBR&B
            biodiesel before they sold out venmo vinyl keytar kinfolk
            skateboard. Mukbang ramps air plant microdosing adaptogen salvia
            poutine austin gochujang cronut cred. Unicorn shaman big mood, blog
            bruh same YOLO hell of readymade vibecession fanny pack chicharrones
            cornhole. Yr marxism salvia locavore snackwave, 8-bit swag neutra
            hot chicken vice.
          </p>
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          &amp;
          <Button
            component={Link}
            to="/login"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>
        <div className="landing-page-img-container">
          {/*<img className="landing-page-img" src="https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?w=1380&t=st=1693405472~exp=1693406072~hmac=68b8e35c68fa02ba1c57b99c8394d61334e5f2c233f96ae75b844f1f216e25b0" alt="project works"/>*/}
          <img
            className="landing-page-img"
            src={landingPageImg}
            alt="project works"
          />
        </div>
      </LandingPageContainer>
    </div>
  );
};
export default Landing;
