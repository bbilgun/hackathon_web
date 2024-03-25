import React from "react";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Button from "common/components/Button";
import Image from "common/components/Image";
import Container from "common/components/UI/Container";
import { openModal, closeModal } from "@redq/reuse-modal";
import NormalClock from "./timer";
import SearchPanel from "containers/Agency/SearchPanel";
import LoginModal from "containers/Agency/LoginModal";
import JuramModal from "containers/Agency/JuramModal";

// Дуусах хугацаа
const deadline2 = new Date("2023-04-26 18:00:00");

import SectionWrapper, { ContentWrapper } from "./countdown.style";
import { SectionHeader } from "containers/AppCreative/appCreative.style";
import ParticlesComponent from "containers/Crypto/Particle";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Alert from "common/components/Alert";
import backgroundImage from "common/assets/image/appCreative/1_2.png";
import NextImage from "common/components/NextImage";

const CountDownSection = ({ deadline, endTime }) => {
  const JuramModalHandle = () => {
    openModal({
      config: {
        className: "search-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "translateY(0)" }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: JuramModal,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };

  // Alt close button for modal
  const CloseModalButtonAlt = () => (
    <Button
      className="modalCloseBtn alt"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  // Search modal handler
  const handleSearchModal = () => {
    openModal({
      config: {
        className: "search-modal",
        disableDragging: true,
        width: "100%",
        height: "100%",
        animationFrom: { transform: "translateY(100px)" }, // react-spring <Spring from={}> props value
        animationTo: { transform: "translateY(0)" }, //  react-spring <Spring to={}> props value
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };

  return (
    <SectionWrapper id="normalCount">
      <Container>
        {/* <NextImage
          layout='fill'
          objectFit='cover'
          src={backgroundImage}
          alt="Picture of the author"
          id="bakground_image"
        /> */}
        <ContentWrapper>
          <SectionHeader>
            <Fade up>
              <Heading
                as="h1"
                content={`"Dev Hackathon Vol3 - 2024" бүртгэл хаагдахад`}
                style={{ margin: 0 }}
              />
              {/* <Text content={slogan} /> */}
            </Fade>
          </SectionHeader>
          {endTime ? (
            <Alert
              style={{
                borderColor: "#000000",
                backgroundColor: "#000000",
                color: "#000000",
                margin: 30,
              }}
            >
              {`"Dev Hackathon Vol3 - 2023" тэмцээний бүртгэл хаагдсан.`}
            </Alert>
          ) : (
            <>
              <Fade up>
                <div className="timerCount">
                  <NormalClock countdown={deadline} divider="true" />
                </div>
              </Fade>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <AnchorLink href="#screenshot_section" offset="80">
                  <Button className="secondary" title="Бүртгүүлэх" />
                </AnchorLink>
                {/* <Button
              style={{ marginLeft: 10 }}
              onClick={JuramModalHandle}
              className="primary"
              title="Бүртгэлийн хураамж"
            /> */}
              </div>
            </>
          )}

          <ParticlesComponent />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
