import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import { openModal, closeModal } from '@redq/reuse-modal';
import NormalClock from './timer';
import SearchPanel from 'containers/Agency/SearchPanel';
import LoginModal from 'containers/Agency/LoginModal';
const deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000);
import SectionWrapper, { ContentWrapper } from './countdown.style';

const CountDownSection = () => {

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
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
        animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
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
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading style={{ color: '#10AC84', fontSize: 30,
            fontWeight: 300,
            lineHeight: 1.31,
            letterSpacing: -0.025}} 
            content="Бүртгэл хаагдахад: " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade>
          <Button onClick={handleSearchModal} className="secondary" title="Бүтгүүлэх" />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
