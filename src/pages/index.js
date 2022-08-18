import React, { useEffect } from "react";
import styled from "styled-components";
import { Canvas } from "glsl-canvas-js";
import GlobalStyles from "../styles";

import fragment from "../shaders/fragment";

const IndexPage = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    const glsl = new Canvas(canvas);

    glsl.on("error", (e) => {
      const error = String(e.error);
      console.error(error);
    });

    glsl.load(fragment);
    glsl.play();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <h1>Alice McCloud</h1>
          <h2>Textile Manufacturer</h2>
        </Header>
      </Container>
    </>
  );
};

const Container = styled.main`
  border: 1px solid white;
  margin: 48px;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 96px);
  height: calc(100vh - 96px);
`;

const Header = styled.header`
  flex: 1;
  padding: 32px;
  h2,
  h1 {
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
  }
`;

const Footer = styled.footer`
  padding: 32px;
  border-top: 1px solid white;
  display: flex;
  flex-direction: column;
`;

export default IndexPage;
