import React from "react";
import Text from "common/components/Text";
import NextImage from "common/components/NextImage";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import FeatureBlock from "common/components/FeatureBlock";
import SectionWrapper, { ThumbWrapper, TextWrapper } from "./chooseUs.style";

// import { chooseUs } from "common/data/AppCreative";
import { chooseUs, pricePool } from "common/data/Award2024";
import KeyFeatures from "../KeyFeatures";

const ChooseUs = () => {
  const { features, thumb } = chooseUs;
  const { price, slogan, title } = pricePool;
  return (
    <SectionWrapper id="keyFeatures">
      <div style={{ marginTop: 50 }} />
      <Container>
        <ThumbWrapper id="hidden_bar">
          {features.map((item) => (
              <FeatureBlock
                className="keyFeatures__price"
                key={`app-feature--key${item.id}`}
                iconPosition="center"
                icon={<Text as="h3" content={item.title} />}
                title={<Heading as="p" content={item.date} />}
                description={<Text as="span" content={item.description} />}
              />
            ))}
        </ThumbWrapper>
         <ThumbWrapper>
          <NextImage src={thumb} alt="App Image"/>
          <h2>Hackathon Vol3</h2>
          <h3>Student competition</h3>
          <p>2024 - 2025 SEASON</p>
          <div id="hidden_navbar">
            <Text as="h3" content={title} />
            <Heading as="h1" content={slogan} />
          </div>
        </ThumbWrapper>
        <ThumbWrapper id="hidden_bar">
        <Text as="h3" content={title} />
        <Heading as="h1" content={slogan} />
          {price.map((item) => (
              <FeatureBlock
                className="keyFeatures__price2"
                key={`app-feature--key${item.id}`}
                iconPosition="center"
                title={<Heading as="h3" content={item.title} />}
                description={<Text content={item.price} />}
              />
            ))}
        </ThumbWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ChooseUs;
