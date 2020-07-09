import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, {
  MilestoneCard,
  CounterWrapper,
  TextWrapper,
  CounterItem,
} from './milestoneBlock.style';

const MilestoneBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        milestoneData {
          title
          amount
          text
          counterItems {
            id
            amount
            title
          }
        }
      }
    }
  `);

  const { title, amount, text, counterItems } = data.charityJson.milestoneData;

  return (
    <Container id="milestone" width="1260px">
      <BlockWrapper>
        <MilestoneCard>
          <Text content={title} />
          <Heading content={amount} />
          <Text content={text} />
        </MilestoneCard>
      </BlockWrapper>
      <CounterWrapper>
        {counterItems.map(item => (
          <CounterItem key={`counter_key${item.id}`}>
            <Heading as="h3" content={item.amount} />
            <Text content={item.title} />
          </CounterItem>
        ))}
              
      
      </CounterWrapper>
      <TextWrapper>
      <Heading as="h4" content="Since starting on 1 April 2020" />
      <Text
        content="
          We have had a huge response from healthcare heroes needing help with scrubs and amazing volunteer sewing angels keen to help. It is a truly humbling experience.
          That said, we have decided that we need to stop taking any future orders and additional volunteers so that we can focus on completing the orders we have already received and supporting the angels that are working so hard. 
          We apologise to healthcare heroes that are yet to place an order and to any sewing volunteers that are looking to sign up to help us. From the bottom of our heart, thank you for your generosity, understanding and support during this challenging time.
            "
            />
            For more of our story,&nbsp; <a
            aria-label="go to mail"
            href="mailto:info@ronascrubs.com"
            className="mail"
            >
            info@ronascrubs.com
          </a>
        </TextWrapper>  
    </Container>
  );
};

export default MilestoneBlock;
