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
} from './promotionBlock.style';

const PromotionBlock = ({ row, col }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        promotionData {
          image {
            publicURL
          }
          slogan
          title
          text1
          text2
          text3
          lists {
            id
            text
          }
        }
      }
    }
  `);

  const {
    slogan,
    title,
    text1,
    text2,
    text3,
    lists,
    image,
  } = data.charityJson.promotionData;

  return (
    <BlockWrapper id="ourApproach">
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading content={slogan} />
              <Heading as="h5" content={title} />
              <Text content={text1} />
              <Text content={text2} />
              <Text content={text3} />
              <List>
                {lists.map(item => (
                  <Item key={`list_key${item.id}`}>{item.text}</Item>
                ))}
              </List>
              <Link to="/signup_angel" className="learn__more-btn">
                <span className="hyphen" />
                <span className="btn_text">Become a Rona Scrubs Angel </span>
              </Link>
            </ContentWrapper>
          </Box>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={image.publicURL} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// PromotionBlock style props
PromotionBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// PromotionBlock default style
PromotionBlock.defaultProps = {
  // PromotionBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // PromotionBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default PromotionBlock;
