import React from "react";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { playCircle } from "react-icons-kit/fa/playCircle";
import { openModal, closeModal } from "@redq/reuse-modal";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import logoImg from "common/assets/image/appCreative/main_logo_sp.png";
import BannerWrapper, {
  BannerContent,
  BannerImage,
  BannerImageMobile,
  ButtonGroup,
  VideoWrapper,
} from "./banner.style";

import bannerImg from "common/assets/image/appCreative/main_logo.png";
import bannerImgMobile from "common/assets/image/appCreative/availableThumb.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import backgroundImage from "common/assets/image/appCreative/1_1.png";

// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/oAuGv5_qtlQ"
      frameBorder="0"
    />
  </VideoWrapper>
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      {/* <NextImage
          layout='fill'
          objectFit='cover'
          src={backgroundImage}
          alt="Picture of the author"
          id="bakground_image"
        /> */}

      <Container>
        <BannerContent>
          <div className="sp-img">
            <Fade bottom delay={40}>
              <NextImage src={logoImg} alt="logo Image" />
            </Fade>
          </div>
          <Fade up delay={100}>
            <Heading as="h1" content={`"Dev Hackathon Vol3 - 2023"`} />
          </Fade>
          <Fade up delay={200}>
            <Text
              style={{
                lineHeight: "1.6",
              }}
              content={`“Dev Hackathon Vol3 - 2023” Оюутан залуусын чөлөөт цагийг зөв боловсон үр дүнтэй өнгөрүүлэх, мэдлэг боловсрол бүтээлч сэтгэлгээг хөгжүүлэх, ажлын байранд бэлтгэх, улмаар улс орны хөгжилд нөлөөлөхүйц бүтээлүүдийг технологийн шийдлээр бий болгох зорилготойгоор "..." сэдвийн хүрээнд зохион байгуулагдаж байна`}
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <AnchorLink className="primary" href="#normalCount" offset={73}>
                <Button
                  href="#normalCount"
                  className="primary"
                  title="Тэмцээнд бүртгүүлэх"
                />
              </AnchorLink>
              <div onClick={handleVideoModal}>
                <Button
                  className="text"
                  variant="textButton"
                  icon={<Icon icon={playCircle} />}
                  iconPosition="left"
                  title="Хакатон гэж юу вэ?"
                />
              </div>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <NextImage src={bannerImg} alt="Banner" />
        </BannerImage>
        <BannerImageMobile>
          <NextImage src={bannerImgMobile} alt="Mobile Banner" />
        </BannerImageMobile>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
