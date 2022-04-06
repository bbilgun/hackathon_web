import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Tabs, { TabPane } from "rc-tabs";
import "rc-tabs/assets/index.css";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";

import SectionWrapper from "./updateScreen.style";
import { SCREENSHOTS } from "common/data/SaasClassic";
import LoginModal from "containers/Agency/LoginModal";
import HackathonTeam from "containers/Agency/HackathonTeam";
import HackathonUserForm from "containers/Agency/HackathonUserForm";
import HackathonPayment from "containers/Agency/HackathonPayment";

const UpdateScreen = ({ secTitleWrapper, secText, secHeading }) => {
  const [forms, setForms] = useState([0]);

  return (
    <SectionWrapper id="screenshot_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="Sys&CoTech club" />
          <Heading
            {...secHeading}
            content={`"Dev Hackathon-2022" бүртгүүлэх`}
          />
        </Box>
        <Tabs className="update-screen-tab">
          {SCREENSHOTS.map((item, index) => (
            <TabPane
              tab={
                <>
                  <Icon icon={item.icon} size={24} />
                  {item.title}
                </>
              }
              key={index + 1}
            >
              {index === 0 && <HackathonTeam />}
              {index === 1 && (
                <HackathonUserForm forms={forms} setForms={setForms} />
              )}
              {index === 2 && <HackathonPayment />}
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.propTypes = {
  secTitleWrapper: PropTypes.object,
  secText: PropTypes.object,
  secHeading: PropTypes.object,
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px",
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

export default UpdateScreen;
