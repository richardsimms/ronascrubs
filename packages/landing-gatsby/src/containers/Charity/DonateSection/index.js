import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import InputGroup from 'common/src/components/InputGroup';
import RadioGroup from 'common/src/components/RadioGroup';
import { PayPalButton } from "react-paypal-button-v2";
import SectionWrapper, {
  ContentArea,
  Heading,
  ButtonGroup,
  DonationForm,
  DonateButton,
  List,
  Item,
 } from './donateSection.style';

import heartImage from 'common/src/assets/image/charity/heart-alt.svg';

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
    price: '20.00',
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
              HELP US <span>SUPPORT</span> OUR HEALTHCARE HEROES
              </Heading>
              <Text content="To help us get scrubs to as many of our healthcare heroes as possible, we would be very grateful for any support you can offer." />
              <Text content="We welcome:" />
              <List>
                <Item >Donations</Item>
                <Item >Conversations about how you might be able to partner with us</Item>
                <Item >Offers to volunteer other helpful services and skills that aren’t sewing</Item>
                <Item >For non-monetary offers of support please email us at <a href="mailto:info@ronascrubs.com" >info@ronascrubs.com</a></Item>
              </List>

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
              <RadioGroup
                name="radioGroup"
                value={state.policy}
                items={data.charityJson.paymentPolicy}
                onUpdate={value => handleFormData(value, 'policy')}
              />
              <PayPalButton
                amount={state.price}
                currency="AUD"
                shippingPreference="NO_SHIPPING"
                options={{clientId: "sb", currency: "AUD"}}
                onSuccess={(details, data) => {
                  alert("Transaction completed by " + details.payer.name.given_name);
        
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
