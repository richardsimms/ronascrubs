import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Select from 'common/src/components/Select';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
} from './angelFormSection.style';
import fundraisersImage from 'common/src/assets/image/charity/fundraisers.jpg';
import missionImage from 'common/src/assets/image/charity/mission.jpg';

const roleOptions = [
  { value: 'doctor', label: 'Doctor' },
  { value: 'nurse', label: 'Nurse' },
  { value: 'allied', label: 'Allied Health Staff' },
  { value: 'pca', label: 'PCA' },
  { value: 'clerical', label: 'Clerical Staff' },
];

const sizeOptions = [
  { value: 'xs', label: 'XS' },
  { value: 's', label: 'S' },
  { value: 'm', label: 'M' },
  { value: 'l', label: 'L' },
  { value: 'xl', label: 'XL' },
  { value: 'xxl', label: 'XXL' },
  { value: 'xxxl', label: 'XXXL' },
];

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
            <Input inputType="text" label="First Name"></Input>
            <Input inputType="text" label="Last Name"></Input>
            <Input inputType="text" label="Email"></Input>
            <Input inputType="text" label="Phone"></Input>
            <Input inputType="text" label="Address Line 1"></Input>
            <Input inputType="text" label="Address Line 2"></Input>
            <Input inputType="text" label="Suburn"></Input>
            <Input inputType="text" label="State"></Input>
            <Input inputType="text" label="Post Code"></Input>
            <br />
            <Button colors="primaryWithBg" type="submit" title="Submit" />
          </form>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default AngelFormSection;
