import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import Text from 'common/src/components/Text';
// import Select from 'common/src/components/Select';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { navigate } from 'gatsby';
import Input from 'common/src/components/Input';
import Button from 'common/src/components/Button';

import SectionWrapper, {
  SectionHeader,
  ContentArea,
} from './angelFormSection.style';
//import fundraisersImage from 'common/src/assets/image/charity/fundraisers.jpg';
//import missionImage from 'common/src/assets/image/charity/mission.jpg';

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
                    }
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
                  <Input
                    inputType="text"
                    label="State"
                    name="state"
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
