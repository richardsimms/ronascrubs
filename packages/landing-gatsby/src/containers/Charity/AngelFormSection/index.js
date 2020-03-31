import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
// import Select from 'common/src/components/Select';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
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
          <Heading content="Angel Sign up form" />
          <Text content="Sign up here to help out with sewing" />
        </SectionHeader>
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
            <Button colors="primaryWithBg" type="submit" title="Submit" />
          </form>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default AngelFormSection;
