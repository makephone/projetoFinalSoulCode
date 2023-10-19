import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SplashWrapper = styled.div`
  background-color: #007bff;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const SplashContent = styled.div`
  text-align: center;
`;

const Splash = () => {
  return (
    <SplashWrapper>
      <SplashContent>
        <h1>Education</h1>
        <p>Carregando</p>
        <FontAwesomeIcon icon={faCog} size={"10x"} spin />
      </SplashContent>
    </SplashWrapper>
  );
};
export default Splash;
