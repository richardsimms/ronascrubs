import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Container from 'common/src/components/UI/Container';
import InputGroup from 'common/src/components/InputGroup';
import { PayPalButton } from "react-paypal-button-v2";
import SectionWrapper, {
  ContentArea,
  Heading,
  DonationForm,
  List,
  Item,
 } from './donateSection.style';


const DonateSection = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        paymentPolicy {
          id
          title
          text
          value
        }
        currencyOptions {
          id
          title
          value
        }
      }
    }
  `);

  const [state, setState] = useState({
    price: '50.00',
    currency: 'AUD',
    policy: 'oneTime',
  });

  const handleFormData = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleDonation = e => {
    e.preventDefault();
    console.log('Donation form data: ', e.target.value);

    setState({
      ...state,
      price: '',
    });
  };

  return (
    <SectionWrapper id="donate">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentArea>
              <Heading>
              HELP US SUPPORT OUR HEALTHCARE HEROES
              </Heading>
              <Text content="To help us get scrubs to as many of our healthcare heroes as possible, we would be very grateful for any support you can offer. Your donations are used to help us support our angels in making scrubs and then getting those scrubs to healthcare heroes." />


            </ContentArea>
          </Box>

          <Box className="col" {...col}>
            <DonationForm onSubmit={e => handleDonation(e)}>
              <InputGroup
                inputType="number"
                inputValue={state.price}
                inputOnChange={e => handleFormData(e.target.value, 'price')}
                currency="AUD"
                selectedValue={state.currency}
                selectOptions={data.charityJson.currencyOptions}
                selectOnUpdate={value => handleFormData(value, 'currency')}
              />

              <PayPalButton
                amount={state.price}
                currency="AUD"
                shippingPreference="NO_SHIPPING"
                options={{clientId: "ARkztSCUx913BuBxreR7LlK3GiL29wc4tVRQD_ShPFzlINZpP4l1U1kFUzFXCIbhkM67_UNyZHSQkVLU", currency: "AUD"}}
                onSuccess={(details, data) => {
                  // alert("Thank you " + details.payer.name.given_name + " for your donation.");
                  navigate('/paypal-success');
                  // OPTIONAL: Call your server to save the transaction
                  return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                      orderID: data.orderID
                    })
                  });
                }}

              />
            </DonationForm>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

// DonateSection style props
DonateSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  textStyle: PropTypes.object,
};

// DonateSection default style
DonateSection.defaultProps = {
  // DonateSection row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // DonateSection col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default DonateSection;
