import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';

import SectionWrapper, {
  SectionHeader,
  ContentArea,
  TextWrapper,
} from './FAQSection.style';

const FundraiserSection = () => {
  return (
    <SectionWrapper id="fundraisers">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="FAQs - COMING SOON" />
        </SectionHeader>
        <ContentArea>
          <TextWrapper>
            <Heading as="h3" content="We know you have lots of questions, and we are working hard behind the scenes to prepare answers for them." />
            <p>This whole project, much like the situation the world is currently facing, has evolved so much quicker than we could have guessed. Until we are ready to post the answers to the most common questions here, we will be posting them in the <a href="https://www.facebook.com/groups/865861777227284/">Facebook group</a>.
           We will post the answers here as soon as we can. Thank you for your interest, your support and your patience.
              </p> 
          </TextWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );   
};

export default FundraiserSection;
