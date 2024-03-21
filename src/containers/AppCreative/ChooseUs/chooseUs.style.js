import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { rgba } from "polished";

const SectionWrapper = styled.section`
  > div.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media only screen and (min-width: 1367px) {
      max-width: 90vw;
    }
    @media only screen and (max-width: 624px) {
      flex-direction: column-reverse;
    }
  }
  p{
    margin-bottom: 0rem;
    background-image: -webkit-linear-gradient(#ffffff, #CBB593 50%, #948A76 55%, #ffe2b4);
    -webkit-background-clip: text; 
    background-clip: text;
    color: transparent;
    font-weight: 800;
    font-size: 30px;
  }
  span{
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  h2{
    font-size: 3vw;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    filter: drop-shadow(0px 0px 4px #002C4C);
    background: -webkit-linear-gradient(#31C8DB 10%, #176490 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  h3{
    margin-bottom: 0rem;
    font-family: "Radiance", sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-align: center;
    filter: drop-shadow(0px 2px 2px #000);
  }
  h1{
    font-size: 4vw;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    filter: drop-shadow(0px 0px 4px #002C4C);
    background: -webkit-linear-gradient(#31C8DB 10%, #176490 90%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
  .keyFeatures__price{
    padding: 15px 0px 15px 0px;
  }
  .keyFeatures__price2{
    padding: 10px 0px 10px 0px;
  }
  padding: 75px 0 40px;
  @media only screen and (max-width: 1219px) {
    padding-bottom: 70px;
  }
  @media only screen and (max-width: 991px) {
    padding-bottom: 80px;
    p{
      font-size: 23px;
    }
  }
  @media only screen and (max-width: 730px) {
    #hidden_bar{
      display: none;
    }
    #hidden_navbar{
      display: block;
      margin-top: 20px;
    }
    > div.container {
      justify-content: center;
    }
    h3{
      font-size: 18px;
    }
    h2, h1 {
      font-size: 6vw;
    }
  }
  @media only screen and (max-width: 624px) {
    h2, h1 {
      font-size: 10vw;
    }
    padding: 45px 0 60px;
  }
  @media only screen and (min-width: 730px) {
    #hidden_navbar{
      display: none;
    }
  }
  
`;

export const ThumbWrapper = styled.div`
  width: 20vw;
  text-align: center;
  @media only screen and (max-width: 1219px) {
    width: 20vw;
  }
  @media only screen and (max-width: 730px) {
    width: 50vw;
  }
  @media only screen and (max-width: 624px) {
    width: 80%;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 35px;
  }
`;

export const TextWrapper = styled.div`
  width: 440px;
  margin-top: 70px;
  @media only screen and (max-width: 1219px) {
    margin-top: 0px;
    width: 425px;
  }
  @media only screen and (max-width: 991px) {
    width: 350px;
  }
  @media only screen and (max-width: 624px) {
    width: 100%;
  }
  h2 {
    color: ${themeGet("colors.white", "#ffffff")};
    font-size: 36px;
    line-height: 1.5;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 45px;
    @media only screen and (max-width: 1219px) {
      font-size: 30px;
      margin-bottom: 15px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 1.4;
    }
  }
  p {
    color: ${themeGet("colors.white", "#ffffff")};
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 0;
  }
  .feature__block {
    margin-top: 40px;
    align-items: center;
    padding-right: 40px;
    @media only screen and (max-width: 991px) {
      padding-right: 0;
    }
    h3 {
      color: ${themeGet("colors.white", "#ffffff")};
      font-size: 17px;
      line-height: 28px;
      font-weight: 700;
      margin-bottom: 10px;
      @media only screen and (max-width: 1366px) {
        line-height: 26px;
        margin-bottom: 7px;
      }
    }
    .icon__wrapper span {
      color: #ffffff;
      font-size: 64px;
      margin-right: 30px;
      line-height: 1em;
      font-family: "Work Sans", sans-serif;
      @media only screen and (max-width: 991px) {
        font-size: 52px;
        margin-right: 20px;
      }
    }
  }
`;

export default SectionWrapper;
