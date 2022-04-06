import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Tabs, { TabPane } from "rc-tabs";
import styled from "styled-components";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Input from "common/components/Input";
import CheckBox from "common/components/Checkbox/index";
import Button from "common/components/Button";
import Image from "common/components/Image";
import LoginModalWrapper from "./loginModal.style";
import "rc-tabs/assets/index.css";
import LogoImage from "common/assets/image/agency/logo.png";
import LoginImage from "common/assets/image/agency/login-bg.jpg";
import GoogleLogo from "common/assets/image/agency/google-icon.jpg";

const Space = styled.div`
  height: 10px;
  width: 100%;
`;

const HackathonPayment = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
  contentWrapper2,
  secHeading,
}) => {
  const LoginButtonGroup = () => (
    <Fragment>
      <Button className="default" title="LOGIN" {...btnStyle} />
      <Button
        title="Forget Password"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const SignupButtonGroup = () => (
    <Fragment>
      <Button className="primary" title="Багийн гишүүн нэмэх" />
    </Fragment>
  );
  return (
    <LoginModalWrapper>
      <form onSubmit={() => {}}>
        <Box {...contentWrapper}>
          <Heading content="Төлбрийн мэдээлэл" />
        </Box>
      </form>
    </LoginModalWrapper>
  );
};

// LoginModal style props
HackathonPayment.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
};

// LoginModal default style
HackathonPayment.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    height: "auto",
    ml: "15px",
  },
  // Title default style
  titleStyle: {
    fontSize: ["22px", "20px", "2px"],
    fontWeight: "400",
    color: "#20201D",
    letterSpacing: "-0.025em",
    mb: "10px",
  },
  // Description default style
  descriptionStyle: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "-0.025em",
    mb: "23px",
    ml: "1px",
  },
  // Content wrapper style
  contentWrapper: {
    pt: ["32px", "56px"],
    pl: ["17px", "32px", "38px", "40px", "56px"],
    pr: "32px",
    pb: ["32px", "56px"],
  },

  contentWrapper2: {
    pr: "32px",
  },
  // Default button style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#10ac84",
  },
  // Google button style
  googleButtonStyle: {
    bg: "#ffffff",
    color: "#343D48",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
};

export default HackathonPayment;
