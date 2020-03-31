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

} from './heroFormSection.style';

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
  e.preventDefault();
  const data = new FormData(e.target);
  const json = JSON.stringify(Object.fromEntries(data));
  fetch('http://localhost:3000/API/Users/HeroSignUp', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: json,
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  // console.log(json);
};

const HeroFormSection = () => {
  return (
    <SectionWrapper id="angelform">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="Hero Sign up form" />
          <Text content="Fill out an order for a scrub" />
        </SectionHeader>
        <ContentArea>
          <form onSubmit={handleSubmit} method="post">
            <Input inputType="text" name="FirstName" label="First name"></Input>
            <Input inputType="text" name="LastName" label="Last name"></Input>
            <Input inputType="text" name="Email" label="Email"></Input>
            <Input
              inputType="text"
              name="Org"
              label="Place of employment"
            ></Input>
            <Select
              options={roleOptions}
              name="org_role"
              labelText="Current role"
            />
            <Input
              inputType="text"
              name="Address1"
              label="Address line 1"
            ></Input>
            <Input
              inputType="text"
              name="Address2"
              label="Address line 2"
            ></Input>
            <Input inputType="text" name="Suburb" label="Suburb"></Input>
            <Input inputType="text" name="State" label="State"></Input>
            <Input inputType="text" name="PostCode" label="Postcode"></Input>
            <Select
              options={sizeOptions}
              name="top_size"
              labelText="Scrub top size"
            />
            <Select
              options={sizeOptions}
              name="bottom_size"
              labelText="Scrub bottom size"
            />
            <Input inputType="number" label="Inside leg length (cm)" />
            <Input inputType="number" label="Quantity"></Input>
            <br />
            <Button colors="primaryWithBg" type="submit" title="Submit" />
          </form>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default HeroFormSection;
