import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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

const HeroFormSection = () => {
  return (
    <SectionWrapper id="angelform">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="Hero Sign up form" />
          <Text content="Fill out an order for a scrub" />
        </SectionHeader>
        <ContentArea>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              org: '',
              org_role: '',
              address_line_1: '',
              address_line_2: '',
              suburb: '',
              state: '',
              post_code: '',
              top_size: '',
              bottom_size: '',
              leg_length: '',
              quantity: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const json = JSON.stringify(values, null, 2);
                fetch('http://localhost:3000/API/Users/HeroSignUp', {
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
                setSubmitting(false);
              }, 400);
            }}
            validationSchema={Yup.object({
              first_name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('First Name required'),
              last_name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Last Name required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Email-Address required'),
              org: Yup.string().required('Place of employment required'),
              org_role: Yup.string().required('Current role required'),
              address_line_1: Yup.string().required('Address Line 1 required'),
              suburb: Yup.string().required('Suburb required'),
              state: Yup.string().required('State required'),
              post_code: Yup.string()
                .required('Post Code required')
                .max(4, 'Post code must be 4 characters')
                .min(4, 'Post code must be 4 characters'),
              top_size: Yup.string().required('Top size required'),
              bottom_size: Yup.string().required('Bottom size required'),
              leg_length: Yup.string().required('Inner leg length required'),
              quantity: Yup.number().required('Quantity required'),
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                handleReset,
              } = props;
              return (
                <form onSubmit={handleSubmit} method="post">
                  <Input
                    inputType="text"
                    name="first_name"
                    label="First name"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="first_name"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="text"
                    name="last_name"
                    label="Last name"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="last_name"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="text"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="email"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="text"
                    name="org"
                    label="Place of employment"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="org"
                    className="error-message"
                    component="div"
                  />
                  <Select
                    options={roleOptions}
                    name="org_role"
                    labelText="Current role"
                    onChange={option => setFieldValue('org_role', option.value)}
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="org_role"
                    className="error-message"
                    component="div"
                  />
                  <Input
                    inputType="text"
                    name="address_line_1"
                    label="Address line 1"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="address_line_1"
                    className="error-message"
                    component="div"
                  />
                  <Input
                    inputType="text"
                    name="address_line_2"
                    label="Address line 2"
                    onChange={handleChange}
                  ></Input>
                  <Input
                    inputType="text"
                    name="suburb"
                    label="Suburb"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="suburb"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="text"
                    name="state"
                    label="State"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="state"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="text"
                    name="post_code"
                    label="Postcode"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    name="post_code"
                    className="error-message"
                    component="div"
                  />

                  <Select
                    options={sizeOptions}
                    name="top_size"
                    labelText="Scrub top size"
                    onChange={option => setFieldValue('top_size', option.value)}
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="top_size"
                    className="error-message"
                    component="div"
                  />

                  <Select
                    options={sizeOptions}
                    name="bottom_size"
                    labelText="Scrub bottom size"
                    onChange={option =>
                      setFieldValue('bottom_size', option.value)
                    }
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="bottom_size"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="number"
                    onChange={handleChange}
                    name="leg_length"
                    label="Inside leg length (cm)"
                  />
                  <ErrorMessage
                    name="leg_length"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="number"
                    onChange={handleChange}
                    name="quantity"
                    label="Quantity"
                  ></Input>
                  <ErrorMessage
                    name="quantity"
                    className="error-message"
                    component="div"
                  />

                  <br />
                  <Button colors="primaryWithBg" type="submit" title="Submit" />
                </form>
              );
            }}
          </Formik>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default HeroFormSection;
