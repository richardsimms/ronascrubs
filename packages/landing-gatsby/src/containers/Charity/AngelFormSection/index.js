import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
// import Select from 'common/src/components/Select';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import { Link } from 'gatsby';
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  
} from './angelFormSection.style';
//import fundraisersImage from 'common/src/assets/image/charity/fundraisers.jpg';
//import missionImage from 'common/src/assets/image/charity/mission.jpg';


const handleSubmit = e => {
  console.log('submit clicked');
};

const AngelFormSection = () => {
  return (
    <SectionWrapper id="angelform">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="Volunteer to sew scrubs" />
        </SectionHeader>
        <ContentArea>
          <Text content="Please complete the below details so that we can get you set up to start making scrubs for our amazing healthcare heroes." />
          <Text content="We are still in the very early stages at Rona Scrubs and are currently primarily based in our home city of Melbourne at this stage. If you are outside of Melbourne, you can still volunteer and we will reach out to you directly to talk about how we can help get you onboard." />
        </ContentArea>
        <ContentArea>
          <form onSubmit={handleSubmit} method="post">
            <Input inputType="text" label="First name"></Input>
            <Input inputType="text" label="Last name"></Input>
            <Input inputType="text" label="Your email"></Input>
            <Input inputType="text" label="Phone number"></Input>
            <Input inputType="text" label="Address Line 1"></Input>
            <Input inputType="text" label="Address Line 2"></Input>
            <Input inputType="text" label="Suburb"></Input>
            <Input inputType="text" label="State"></Input>
            <Input inputType="text" label="Postcode"></Input>
            <br />
            <Link to="/angel-success">
              <Button colors="primaryWithBg" type="submit" title="Submit" />
            </Link>
          </form>
        </ContentArea>
        <ContentArea>
          <Text content="Your personal information will only be used by Rona Scrubs as required to get you onboarded and up and running to make scrubs. Our Privacy policy explains how we store personal information and how you may access, correct or complain about the handling of personal information." />
          <Text content="This form is only to be used for the purposes of sending genuine requests to Rona Scrubs." />
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default AngelFormSection;
