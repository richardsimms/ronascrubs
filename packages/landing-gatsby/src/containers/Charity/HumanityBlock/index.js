import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Box from 'common/src/components/Box';
import Image from 'common/src/components/Image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from './humanityBlock.style';

const HumanityBlock = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        humanityData {
          image {
            publicURL
          }
          slogan
          title
          text
          lists {
            id
            text
          }
        }
      }
    }
  `);

  const { slogan, title, text, lists, image } = data.charityJson.humanityData;

  return (
    <BlockWrapper id="ourMission">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image.publicURL} alt="Scrubs" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading content={slogan} />
              <Heading as="h5" content={title} />
              <Text content={text} />
              <List>
                {lists.map(item => (
                  <Item key={`list_key${item.id}`}>{item.text}</Item>
                ))}
              </List>

            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// HumanityBlock style props
HumanityBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // HumanityBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default HumanityBlock;
