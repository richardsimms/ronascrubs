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
      <Container width="1260px">
        <SectionHeader>
          <Heading content="About Rona Scrubs" />
          <Text content="Our mission is to ease some of these burdens for healthcare workers so they can focus on where they add the most value." />
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
              You’re right, scrubs alone will not provide sufficient protection for our healthcare workers against COVID-19. However, donning a uniform upon arrival at work does reduce the risk of outside contamination of that workplace. The same can be said in reverse. By removing a uniform (or scrubs) before leaving the workplace, potential contamination into the community or home of the healthcare worker can be minimised.
            "
            />
            
          </TextWrapper>
        </ContentArea>
      </Container>
      <Container padding-top="80px">
         <ContentArea>
          <TextWrapper>
            <TextAndLink>
              <Heading as="h4" content="OUR APPROACH" />
            </TextAndLink>
            <Heading as="h3" content="Your help really counts" />
            <Text
              content="
              With the help of some amazing businesses we are delivering kits to at home sewers to make scrubs (fabric, thread and a pattern). We will then arrange to collect and distribute those scrubs to health care workers who need them.
              Our approach is focused on getting the most scrubs made, as quickly as possible, whilst ensuring everyone involved adheres to the current Government protocols aimed at reducing the spread of COVID-19.
              If you’d like to help, you can register to volunteer as a sewer (or let us know how else you can help). Otherwise you can also donate. All donations go directed back into 
            "
            />
          </TextWrapper>
          <ImageWrapper>
            <Image src={fundraisersImage} alt="Charity" />
          </ImageWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default FundraiserSection;
