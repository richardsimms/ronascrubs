import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { Link } from 'gatsby';

import SectionWrapper, {
  SectionHeader,
  ContentArea,
  TextWrapper,
  List,
  Item,
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
            <Text content="Rona Scrubs Limited (Rona Scrubs) recognises the importance of protecting personal information. We do not collect sensitive information as defined under the Privacy Act 1988 (Cth) (Privacy Act) such as racial or ethnicity information, political opinions or associations, criminal records or health information." />
            <Text content="Having launched very rapidly on 1 April 2020 to assist healthcare workers in need of scrubs as a result of the COVID-19 pandemic we are still getting a few things finalised in terms of things like a privacy policy. However, we really care about making sure that things are done right and want to provide some clarity to you about how your personal information will be used, shared and stored." />
            <List>
                <Item >1. If you are a Hero, we will limit the use and sharing of your information as much as possible and only use it for the purposes of scrubs being made for and provided to you, or otherwise improving your experience on <Link to="/">www.ronascrubs.com</Link>. Similarly, if you are an Angel, we will limit the use and sharing of your information as much as possible and only use it for the purposes of supporting you to make scrubs and have the scrubs you make distributed. If you are donating, we are not collecting your personal information except for the purposes of accounting and reconciliation. Your information will only be shared as required to undertake all necessary accounting activities. If we are recognised for deductible gift recipient status we may contact you to let you know so that you can claim your donation against your tax return as allowed.</Item>
                <Item >2. We will protect your data like it’s our own and it's all staying in Australia.</Item>
                <Item >3. We won't spam you - you'll only hear from us for things you expect from us. If you get more than you want, please let us know.</Item>
                <Item >4. We don't keep your info unless we need it. If we don’t need it, we’ll delete it.</Item>
            </List>
            <Text content="We will be updating this policy soon, so please keep an eye on it. We will send out an email updating all registered Angels and Heroes when this policy is updated and you can notify us that you are not comfortable with us having your personal information and you will be opted out of all further correspondence and your personal information will be destroyed or deidentified in our systems (subject to our obligations as a charity for activities such as but not limited to audit disclosures or required Government reporting)." />
          </TextWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default FundraiserSection;
