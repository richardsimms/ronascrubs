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
            <Image src={fundraisersImage} alt="Charity" />
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
    </SectionWrapper>
  );
};

export default FundraiserSection;
