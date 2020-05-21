import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';

import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
} from './fundraiserSection.style';
import fundraisersImage from 'common/src/assets/image/charity/fundraisers.jpg';
import missionImage from 'common/src/assets/image/charity/mission.jpg';
import progressImage from 'common/src/assets/image/charity/scrubs.jpg';

const FundraiserSection = () => {
  return (
    <SectionWrapper id="fundraisers">
      <Container>
        <SectionHeader>
          <Heading content="About Rona Scrubs" />
          <Text content="Our mission is to ease some of the burdens for healthcare workersand enabling them to focus on where they add the most value, by providing as many as we can with scrubs made by our fabulous sewing volunteers so that they can focus on where they add the most value." />
        </SectionHeader>
        <ContentArea>
          <ImageWrapper>
            <Image src={missionImage} alt="Anni sewing" />
          </ImageWrapper>
          <TextWrapper>
            <TextAndLink>
              <Heading as="h4" content="OUR MISSION" />
            </TextAndLink>
            <Heading as="h3" content="Why are we making scrubs?" />
            <Text
              content="
              While scrubs alone will not provide sufficient protection for our healthcare workers against COVID-19, donning a uniform upon arrival at work does reduce the risk of outside contamination of that workplace. Conversely, removing a uniform (or scrubs) before leaving the workplace minimises the risk of potential contamination into the wider community and the homes of healthcare workers.
            "
            />
            
          </TextWrapper>
        </ContentArea>
      </Container>
      <Container >
         <ContentArea>
          <TextWrapper>
            <TextAndLink>
              <Heading as="h4" content="OUR APPROACH" />
            </TextAndLink>
            <Heading as="h3" content="Your help really counts" />
            <Text
              content="
              With the help of some amazing volunteers we are delivering fabric and a paper pattern to our sewing volunteers so that they can make scrubs in the comfort of their own homes. We will then arrange to collect and distribute those scrubs to healthcare workers who need them. Our approach is focused on getting as many scrubs made as quickly as possible, whilst ensuring everyone involved adheres to the current Government protocols aimed at reducing the spread of COVID-19.  
            "
            />
          </TextWrapper>
          <ImageWrapper>
            <Image src={fundraisersImage} alt="Charity"  />
          </ImageWrapper>
        </ContentArea>
      </Container>
      <Container>
        <ContentArea>
          <ImageWrapper>
            <Image src={progressImage} alt="Anni sewing" />
          </ImageWrapper>
          <TextWrapper>
            <TextAndLink>
              <Heading as="h4" content="OUR PROGRESS" />
            </TextAndLink>
            <Heading as="h3" content="We have over 7,000 orders and 3,000 volunteers" />
            <Text
              content="
              Since starting on 1 April 2020 we have had a huge response from heroes needing help with scrubs and amazing angels keen to help. It is a truly humbling experience.
              That said, we have decided that we need to stop taking any future orders and additional volunteers so that we can focus on completing the orders we have already received and supporting the angels that are working so hard. We are working very hard to try to source more fabric for angels and until we are able to source sufficient fabric to support our current angels, we do not believe it is fair to take on additional angels.
              We apologise to healthcare heroes that are yet to place an order and to any sewing volunteers that are looking to sign up to help us. From the bottom of our heart, thank you for your generosity, understanding and support during this challenging time.
            "
            />
            
          </TextWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default FundraiserSection;
