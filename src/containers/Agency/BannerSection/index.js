import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';
import Countdown from '../../CryptoModern/CountDown';
import { openModal, closeModal } from '@redq/reuse-modal';
import LoginModal from 'containers/Agency/JuramModal';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {

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

  const ButtonGroup = () => (
    <Fragment>
      <AnchorLink href='#normalCount' offset='70'>
        <Button title='Бүртгэлийн тухай' icon={<i className='flaticon-down-arrow' />} {...btnStyle} />
      </AnchorLink>
    </Fragment>
  );
  return (
    <BannerWrapper>
      <Particles />
      <Container>
      <Particles />
        <Box className="row" {...row}>
          <Box className="col" {...col}>
          <DiscountLabel>
              <Text content="11 сарын 11-ний өдөр явагдана" {...discountAmount} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <Heading
                  content="Програмчлалын Олимпиад - 2021"
                  {...title}
                />
              }
              description={
                <Text
                  content='Sys&CoTech клубээс Мэдээлэл, Холбооны Технологийн Сургуулийн 1-ээс 3 -р курсийн оюутнуудын дунд уламжлал болгон зохион байгуулдаг Програмчлалын Олимпиадын бүртгэл эхэллээ.'
                  {...description}
                />
              }
              button={<ButtonGroup/>}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
