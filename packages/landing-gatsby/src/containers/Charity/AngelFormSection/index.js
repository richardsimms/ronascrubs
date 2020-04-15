import React, { useState } from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { navigate } from 'gatsby';
import Input from 'common/src/components/Input';
import Select from 'common/src/components/Select';
import Button from 'common/src/components/Button';

import SectionWrapper, {
  SectionHeader,
  ContentArea,
} from './angelFormSection.style';
//import fundraisersImage from 'common/src/assets/image/charity/fundraisers.jpg';
//import missionImage from 'common/src/assets/image/charity/mission.jpg';

const stateOptions = [
  { value: 'ACT', label: 'ACT' },
  { value: 'NSW', label: 'NSW' },
  { value: 'NT', label: 'NT' },
  { value: 'QLD', label: 'QLD' },
  { value: 'SA', label: 'SA' },
  { value: 'TAS', label: 'TAS' },
  { value: 'VIC', label: 'VIC' },
  { value: 'WA', label: 'WA' },
];

const skillOptions = Array.from(Array(11).keys()).map(val => {
  return { value: val, label: val };
});

const yesNoOptions = [
  { value: false, label: 'No' },
  { value: true, label: 'Yes' },
];

const fabricOptions = [
  { value: 'Ordered', label: 'No, but I’ve ordered some online' },
  {
    value: 'Need',
    label:
      'No, but I’d like to hear if you’re able to get more from your suppliers',
  },
  {
    value: 'Have',
    label:
      'Yes (please check the fabric specifications in our FAQs on the website)',
  },
];

const patternOptions = [
  { value: 'Simplicity #5443 (S-L)', label: 'Simplicity #5443 (S-L)' },
  { value: 'Simplicity #5443 (XL-XXXL)', label: 'Simplicity #5443 (XL-XXXL)' },
  { value: 'Butterick #4946 (XS, S, M)', label: 'Butterick #4946 (XS, S, M)' },
  { value: 'Butterick #4946 (L, XL)', label: 'Butterick #4946 (L, XL)' },
  { value: 'New Look #6876', label: 'New Look #6876' },
  {
    value: 'Printing',
    label: 'No, but I will print the Busty Pear PDF pattern',
  },
  {
    value: 'Deliver',
    label: 'No. Please deliver a paper pattern when they’re available',
  },
  { value: 'Other', label: 'Other (Specify Below)' },
];

const AngelFormSection = () => {
  const [apiError, setApiError] = useState();

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
              proficiency: '',
              fabric: '',
              pattern: '',
              pattern_other: '',
              velocity: '',
              started: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const json = JSON.stringify(values, null, 2);
                fetch(process.env.API_URL + '/API/SignUp/AngelSignUp', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: json,
                })
                  .then(response => response.json())
                  .then(data => {
                    console.log('Success:', data);
                    if (data.success) {
                      navigate('/angel-success');
                    } else {
                      setApiError(data);
                    }
                  })
                  .catch(error => {
                    setApiError(error);
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
                .required('Phone number required')
                .max(50, 'Must be 50 characters or less'),
              address_line_1: Yup.string().required('Address Line 1 required'),
              suburb: Yup.string().required('Suburb required'),
              state: Yup.string().required('State required'),
              post_code: Yup.string()
                .required('Post Code required')
                .max(4, 'Post code must be 4 characters')
                .min(4, 'Post code must be 4 characters'),
              proficiency: Yup.string().required('Sewing proficiency required'),
              fabric: Yup.string().required('Fabric situation required'),
              pattern: Yup.string().required('Pattern required'),
              velocity: Yup.number()
                .required('Number of scrubs you can make required')
                .integer('Please enter a whole number')
                .max(10, 'Please enter a number between 1 and 10')
                .min(0, 'Please enter a number between 1 and 10'),
              started: Yup.string().required('Please select Yes or No'),
            })}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                dirty,
                isSubmitting,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                handleReset,
                submitCount,
              } = props;

              return (
                <form onSubmit={handleSubmit} method="post">
                  <Input
                    inputType="text"
                    label="First name"
                    name="first_name"
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
                    label="Last name"
                    name="last_name"
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
                    label="Your email"
                    name="email"
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
                    label="Address Line 1"
                    name="address_line_1"
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
                    label="Address Line 2"
                    name="address_line_2"
                    onChange={handleChange}
                  ></Input>

                  <Input
                    inputType="text"
                    label="Suburb"
                    name="suburb"
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
                  <Select
                    options={stateOptions}
                    name="state"
                    labelText="State"
                    onChange={option => setFieldValue('state', option.value)}
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="state"
                    className="error-message"
                    component="div"
                  />
                  <Input
                    inputType="text"
                    label="Postcode"
                    name="post_code"
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
                  <Select
                    options={skillOptions}
                    name="proficiency"
                    labelText="Level of sewing experience"
                    onChange={option =>
                      setFieldValue('proficiency', option.value)
                    }
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="proficiency"
                    className="error-message"
                    component="div"
                  />

                  <Select
                    options={fabricOptions}
                    name="fabric"
                    labelText="Do you have fabric?"
                    onChange={option => setFieldValue('fabric', option.value)}
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="fabric"
                    className="error-message"
                    component="div"
                  />

                  <Select
                    options={patternOptions}
                    name="pattern"
                    labelText="Do you have a pattern? Please specify which one"
                    onChange={option => setFieldValue('pattern', option.value)}
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="pattern"
                    className="error-message"
                    component="div"
                  />
                  {values.pattern === 'Other' && (
                    <div>
                      <Input
                        inputType="text"
                        label="Pattern Name"
                        name="pattern_other"
                        onChange={handleChange}
                      ></Input>
                      <ErrorMessage
                        name="pattern_other"
                        className="error-message"
                        component="div"
                      />
                    </div>
                  )}

                  <Input
                    inputType="number"
                    label="Number of scrubs you can make per week"
                    name="velocity"
                    onChange={handleChange}
                    className={
                      errors.velocity && touched.velocity
                        ? 'text-input error'
                        : 'text-input'
                    }
                  ></Input>
                  <ErrorMessage
                    name="velocity"
                    className="error-message"
                    component="div"
                  />
                  <Select
                    options={yesNoOptions}
                    name="started"
                    labelText="Have you already started or completed making scrubs?"
                    onChange={option => setFieldValue('started', option.value)}
                    onBlur={setFieldTouched}
                  />
                  <ErrorMessage
                    name="started"
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
                  {!isValid && submitCount > 0 && (
                    <div className="error-message">
                      There are errors in the form. Please review.
                    </div>
                  )}
                  <div className="error-message">
                    {apiError && JSON.stringify(apiError)}
                  </div>
                </form>
              );
            }}
          </Formik>
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
