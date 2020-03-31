import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';

import SectionWrapper, {
  SectionHeader,
  ContentArea,
  TextWrapper,
} from './privacySection.style';

const FundraiserSection = () => {
  return (
    <SectionWrapper id="fundraisers">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="Privacy policy" />
        </SectionHeader>
        <ContentArea>
          <TextWrapper>
            <Heading as="h3" content="We are very early days and we are still getting a privacy policy drafted for us, but the key things to know:" />
            <Text
              content="
              1. We will only use your data to improve your experience.
            "
            />
            <Text
              content="
              2. We will protect your data like it’s our own and it's all staying in Australia.
            "
            />
            <Text
              content="
              3. We won't spam you - you'll only hear from us for things you expect from us. If you get more than you want, please let us know.
            "
            />
            <Text
              content="
              4. We don't keep your info unless we need it. If we don’t need it, we’ll delete it.
            "
            />
          </TextWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default FundraiserSection;
