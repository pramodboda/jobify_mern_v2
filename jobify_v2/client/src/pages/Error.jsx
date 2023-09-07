import React from "react";
import { Link as RouterLink, useRouteError } from "react-router-dom";
import {Link} from "@mui/material";

import styled from "styled-components";

import err404Img from "../assets/media/images/undraw_taken_re_yn20.svg";

const ErrorPageWrapper = styled.div`

  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
.img-404{
  width: 70vw;
  max-width: 25rem;
  display:block;
  margin-bottom: 2rem;

h3{
    argin-bottom: 0.5rem;
  }

p{
    line-heightL 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;

  }
  
}
`

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if(error.status === 404){
    return <ErrorPageWrapper>
        <img src={err404Img} alt="404 page not found" className="img-404"/>
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link component={RouterLink} to="/dashboard">back home</Link>
        </ErrorPageWrapper>
  }



  return (
    <ErrorPageWrapper className="">
      <h1>Error</h1>
      <h3>Something went wrong</h3>
      <Link component={RouterLink} to="/dashboard">Back Home</Link>
      
    </ErrorPageWrapper>
  );
};
export default Error;
