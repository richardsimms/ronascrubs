import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'common/src/components/Select';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  ImageWrapper,
  TextWrapper,
  TextAndLink,
  mystyle,
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
  e.preventDefault();
  const data = new FormData(e.target);
  const json = JSON.stringify(Object.fromEntries(data));
  fetch('http://localhost:3000/API/Users/AngelSignUp', {
    method: 'POST',
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
  console.log(json);
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
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              address_line_1: '',
              address_line_2: '',
              suburb: '',
              state: '',
              post_code: '',
            }}
            validationSchema={Yup.object({
              first_name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              last_name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              phone: Yup.number()
                .integer('Invalid phone number')
                .required('Required'),
              address_line_1: Yup.string().required('Required'),
              suburb: Yup.string().required('Required'),
              state: Yup.string().required('Required'),
              post_code: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const json = JSON.stringify(values, null, 2);
                fetch('http://localhost:3000/API/Users/AngelSignUp', {
                  method: 'POST',
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
                console.log(json);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <label htmlFor="first_name" style={{ display: 'block' }}>
                First Name
              </label>
              <Field name="first_name" type="text" />
              <ErrorMessage name="first_name" />

              <label htmlFor="last_name" style={{ display: 'block' }}>
                Last Name
              </label>
              <Field name="last_name" type="text" />
              <ErrorMessage name="last_name" />

              <label htmlFor="email" style={{ display: 'block' }}>
                Email Address
              </label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />

              <label htmlFor="phone" style={{ display: 'block' }}>
                Phone
              </label>
              <Field name="phone" type="number" />
              <ErrorMessage name="phone" />

              <label htmlFor="address_line_1" style={{ display: 'block' }}>
                Address Line 1
              </label>
              <Field name="address_line_1" type="text" />
              <ErrorMessage name="address_line_1" />

              <label htmlFor="address_line_2" style={{ display: 'block' }}>
                Address Line 2
              </label>
              <Field name="address_line_2" type="text" />
              <ErrorMessage name="address_line_2" />

              <label htmlFor="suburb" style={{ display: 'block' }}>
                Suburb
              </label>
              <Field name="suburb" type="text" />
              <ErrorMessage name="suburb" />

              <label htmlFor="state" style={{ display: 'block' }}>
                State
              </label>
              <Field name="state" type="text" />
              <ErrorMessage name="state" />

              <label htmlFor="post_code" style={{ display: 'block' }}>
                Postcode
              </label>
              <Field name="post_code" type="number" />
              <ErrorMessage name="post_code" />

              <br />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default AngelFormSection;
