/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/appCreative";
import ResetCSS from "common/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "containers/AppCreative/Navbar";
import Banner from "containers/AppCreative/Banner";
import Experiences from "containers/AppCreative/Experience";
import ChooseUs from "containers/AppCreative/ChooseUs";
import Testimonials from "containers/AppCreative/Testimonials";
import FeatureSlider from "containers/AppCreative/FeatureSlider";
import Footer from "containers/AppCreative/Footer";
import UpdateScreen from "containers/SaasClassic/UpdateScreen";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "containers/AppCreative/appCreative.style";
import CountDownSection from "containers/CryptoModern/CountDown";
import moment from "moment";
import Team from "containers/Interior/Team";

// Дуусах хугацаа
const deadline = moment("2022-04-22");
const today = new Date();
const endTime = today > deadline;

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Sys&CoTech club | SICT</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="description" content="Sys&CoTech" />
          <meta
            name="keywords"
            content="Dev Student Hackathon, Sys&CoTech club, syscotech"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app creative landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            {!endTime && <CountDownSection deadline={deadline} />}
            <Experiences />
            <UpdateScreen />
            <ChooseUs />
            {/* Ивээн тэтгэгч */}
            <Team />
            {/* <Testimonials /> */}
            <FeatureSlider />
            {/* <AvailableStore /> */}
            {/* <Faqs /> */}
            {/* <CallToAction /> */}
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app creative landing */}
      </Fragment>
    </ThemeProvider>
  );
}
