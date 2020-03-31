import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import Select from 'common/src/components/Select';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import { Link } from 'gatsby';
import SectionWrapper, {
  SectionHeader,
  ContentArea,

} from './heroFormSection.style';
import chartSize from 'common/src/assets/image/charity/sizechart.jpeg';


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
          <Heading content="Scrubs order form" />
        </SectionHeader>
        <ContentArea>
          <Text content="Please complete the below details so that we can organise a set of scrubs to be made for you." />
          <Text content="We are still in the very early stages at Rona Scrubs and request that you keep your order to no more than 2 sets of scrubs per person. Please also note that at this stage we are rolling out Rona Scrubs in our home city of Melbourne initially. If you are outside of Melbourne, you can still order and we will reach out to you directly to talk about how we can help get scrubs to you." />
          
        </ContentArea>
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
            <Text content="Sizes are unisex. Ladies we recommend 2 sizes smaller than your normal size." /><a href={chartSize} target="_blank" rel="noopener noreferrer" >See the size guide to be certain you order the right size.</a>
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
            <Link to="/hereo-success">
              <Button colors="primaryWithBg" type="submit" title="Submit" />
            </Link>
          </form>
        </ContentArea>
        <ContentArea>
          <Text content="Your personal information will only be passed to a Sewer if required to distribute scrubs to you or as otherwise agreed with you. They are required not to use your information for any other purpose. Our Privacy policy explains how we store personal information and how you may access, correct or complain about the handling of personal information." />
          <Text content="This form is only to be used for the purposes of sending genuine orders to Rona Scrubs." />
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default HeroFormSection;
