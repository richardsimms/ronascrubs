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
              With the help of some amazing volunteers we are delivering fabric and a paper pattern to our sewing volunteers so that they can make scrubs in the comfort of their own homes. We will then arrange to collect and distribute those scrubs to healthcare workers who need them. Our approach is focused on getting as many scrubs made as quickly as possible, whilst ensuring everyone involved adheres to the current Government protocols aimed at reducing the spread of COVID-19. If you would like to be a part of this initiative, you can register to volunteer to sew scrubs (or let us know how else you can help). Otherwise you may like to make a donation to support us . All donations go directly back into funding our mission to support healthcare workers. 
            "
            />
          </TextWrapper>
          <ImageWrapper>
            <Image src={fundraisersImage} alt="Charity"  />
          </ImageWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default FundraiserSection;
