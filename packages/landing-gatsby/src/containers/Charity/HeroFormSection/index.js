import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'common/src/components/Select';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';
import { Link, navigate } from 'gatsby';
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
  { value: 'other', label: 'Other' },
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
          <Heading content="Scrubs order form" />
        </SectionHeader>
        <ContentArea>
          <Text content="Please complete the below details so that we can organise a set of scrubs to be made for you." />
          <Text content="We are still in the very early stages at Rona Scrubs and request that you keep your order to no more than 2 sets of scrubs per person. Please also note that at this stage we are rolling out Rona Scrubs in our home city of Melbourne initially. If you are outside of Melbourne, you can still order and we will reach out to you directly to talk about how we can help get scrubs to you." />
        </ContentArea>
        <ContentArea>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              org: '',
              org_role: '',
              org_role_other: '',
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
                    console.log(data);
                    if (data.success) {
                      navigate('/hereo-success');
                    }
                  })
                  .catch(error => {
                    console.error(error);
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
              phone: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Phone required'),
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
              leg_length: Yup.number()
                .required('Inner leg length required')
                .integer('Inner leg length must be a whole number'),
              quantity: Yup.number().required('Quantity required'),
            })}
          >
            {props => {
              const {
                values,
                touched,
                isValid,
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
                <form onSubmit={handleSubmit} method="post" margin="auto">
                  <Input
                    inputType="text"
                    name="first_name"
                    label="First name"
                    onChange={handleChange}
                    className={
                      errors.first_name && touched.first_name
                        ? 'text-input error'
                        : 'text-input'
                    }
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
                    className={
                      errors.last_name && touched.last_name
                        ? 'text-input error'
                        : 'text-input'
                    }
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
                    className={
                      errors.email && touched.email
                        ? 'text-input error'
                        : 'text-input'
                    }
                  ></Input>
                  <ErrorMessage
                    name="email"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="text"
                    label="Phone number"
                    name="phone"
                    onChange={handleChange}
                    className={
                      errors.phone && touched.phone
                        ? 'text-input error'
                        : 'text-input'
                    }
                  ></Input>
                  <ErrorMessage
                    name="phone"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="text"
                    name="org"
                    label="Place of employment"
                    onChange={handleChange}
                    className={
                      errors.org && touched.org
                        ? 'text-input error'
                        : 'text-input'
                    }
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
                  {values.org_role === 'other' && (
                    <>
                      <Input
                        inputType="text"
                        name="org_role_other"
                        label="Please specify your role"
                        onChange={handleChange}
                      ></Input>
                      <ErrorMessage
                        name="org_role_other"
                        className="error-message"
                        component="div"
                      />
                    </>
                  )}
                  <Input
                    inputType="text"
                    name="address_line_1"
                    label="Address line 1"
                    onChange={handleChange}
                    className={
                      errors.address_line_1 && touched.address_line_1
                        ? 'text-input error'
                        : 'text-input'
                    }
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
                    className={
                      errors.suburb && touched.suburb
                        ? 'text-input error'
                        : 'text-input'
                    }
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
                    className={
                      errors.state && touched.state
                        ? 'text-input error'
                        : 'text-input'
                    }
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
                    className={
                      errors.post_code && touched.post_code
                        ? 'text-input error'
                        : 'text-input'
                    }
                  ></Input>
                  <ErrorMessage
                    name="post_code"
                    className="error-message"
                    component="div"
                  />
                  <Text content="Sizes are unisex. Ladies we recommend 2 sizes smaller than your normal size." />
                  <a href={chartSize} target="_blank" rel="noopener noreferrer">
                    See the size guide to be certain you order the right size.
                  </a>
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
                    className={
                      errors.leg_length && touched.leg_length
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                  <ErrorMessage
                    name="leg_length"
                    className="error-message"
                    component="div"
                  />

                  <Input
                    inputType="number"
                    name="quantity"
                    label="Quantity"
                    onChange={handleChange}
                    className={
                      errors.quantity && touched.quantity
                        ? 'text-input error'
                        : 'text-input'
                    }
                  ></Input>
                  <ErrorMessage
                    name="quantity"
                    className="error-message"
                    component="div"
                  />
                  <br />
                  <Button
                    disabled={isSubmitting}
                    colors="primaryWithBg"
                    type="submit"
                    title="Submit"
                  />
                  {!isValid && (
                    <div className="error-message">
                      There are errors in the form. Please review.
                    </div>
                  )}
                </form>
              );
            }}
          </Formik>
        </ContentArea>
        <ContentArea>
          <Text content="Your personal information will only be passed to a sewing volunteer if required to distribute scrubs to you or as otherwise agreed with you. They are required not to use your information for any other purpose. Our Privacy policy explains how we store personal information and how you may access, correct or complain about the handling of personal information." />
          <Text content="This form is only to be used for the purposes of sending genuine orders to Rona Scrubs." />
        </ContentArea>
      </Container>
    </SectionWrapper>
  );
};

export default HeroFormSection;
