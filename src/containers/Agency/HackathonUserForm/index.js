import React, { Fragment, useState } from "react";
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
import Icon from "react-icons-kit";
import { plusCircle } from "react-icons-kit/fa/plusCircle";
import { minusCircle } from "react-icons-kit/fa/minusCircle";

const Space = styled.div`
  height: 10px;
  width: 100%;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HackathonUserForm = ({
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
  iconStyle,
}) => {
  const [forms, setForms] = useState([0]);
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

  const createUserForm = () => {
    if (forms.length < 5) {
      let formLength = forms.length;
      setForms([...forms, formLength]);
    }
  };

  const handleRemove = (id) => {
    const confirmed = window.confirm(`Багийн гишүүн #${id} - ийг устгах ?`);

    if (confirmed) {
      forms.splice(forms.indexOf(id), 1);
      setForms([...forms]);
    }
  };

  const SignupButtonGroup = () => (
    <Fragment>
      <Button
        icon={<Icon className="close" icon={plusCircle} />}
        className="default"
        iconPosition={"left"}
        title="Багийн гишүүн нэмэх"
        {...btnStyle}
        onClick={createUserForm}
      />
    </Fragment>
  );

  const UserForm = ({ id }) => (
    <form onSubmit={() => {}}>
      <HeadingContainer>
        <Heading content={`Багийн гишүүн #${id}`} />
        {id !== 1 && (
          <div
            style={{ marginLeft: "10px", marginTop: "2px", cursor: "pointer" }}
            onClick={() => handleRemove(id)}
          >
            <Icon
              color="#6C247E"
              size={20}
              className="close btn-icon"
              icon={minusCircle}
            />
          </div>
        )}
      </HeadingContainer>
      <Box className="row" {...row}>
        <Box className="col" {...col}>
          <Box {...contentWrapper2}>
            <Space />
            <Input label="Оролцогчийн нэр: " />
            <Space />
            <Input label="Оролцогчийн овог: " />
            <Space />
            <Input label="Оюутны код: " />
            <Space />
            <Input label="И-мэйл хаяг: " />
            <Space />
            <Input label="Утасны дугаар: " />
            <Space />
          </Box>
        </Box>
        <Box className="col" {...col}>
          <Box {...contentWrapper2}>
            <Space />
            <Input label="Ямар салбарын оюутан бэ: " />
            <Space />
            <Input label="Курс: " />
            <Space />
            <Input label="Үүрэг: " />
            <Space />
          </Box>
        </Box>
      </Box>
    </form>
  );
  return (
    <LoginModalWrapper>
      <Box {...contentWrapper}>
        {forms.map((form, index) => {
          return (
            <>
              <UserForm id={index + 1} />
              <Space />
              <Space />
            </>
          );
        })}
        <SignupButtonGroup />
        {/* <LoginButtonGroup /> */}
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
HackathonUserForm.propTypes = {
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
HackathonUserForm.defaultProps = {
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

  iconStyle: {
    borderRadius: "50%",
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

export default HackathonUserForm;
