import * as React from "react";
import { Container } from "@mui/material";
import MainPageComponent from "../../components/main-page/main-page";
import ResponsiveAppBar from "../../components/app-bar";
import StickyFooter from "../../components/footer-component";

const MainPage = () => {
  return (
    <Container>
      <ResponsiveAppBar />
      <MainPageComponent />
      <StickyFooter />
    </Container>
  );
};

export default MainPage;
