import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';import PropTypes from 'prop-types';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import BlogPost from 'common/src/components/BlogPost';
import Box from 'common/src/components/Box';
import SectionWrapper, {
  SectionHeader,
  TitleArea,
  Text,
  PostArea,
} from './blogSection.style';

const BlogSection = (row, col, colOne, colTwo) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        posts {
          id
          thumbUrl {
            publicURL
          }
          title
          excerpt
          btnUrl
          btnText
        }
        distributors      
      }
    }
  `);

  return (
    <SectionWrapper id="blog">
      <Container width="1260px">
        <SectionHeader>
          <TitleArea>
            <Heading content="Meet the team" />
            <Text>
              People around the world are raising money for what they are
              passionate about. Get The Latest PayBear Updates
              <a href="#1" className="link">
                Join us on Community
              </a>
            </Text>
          </TitleArea>
{/*           <LinkArea>
            <a href="#1" className="text__btn">
              <span className="text">View all blog posts</span>
              <span className="arrow" />
            </a>
          </LinkArea> */}
        </SectionHeader>
        <PostArea>
          {data.charityJson.posts.map(item => (
            <BlogPost
              key={`blog__post-key${item.id}`}
              thumbUrl={item.thumbUrl.publicURL}
              title={item.title}
              excerpt={item.excerpt}
              link={
                <a className="learn__more-btn" href={item.btnUrl}>
                  <span className="hyphen"></span>
                  <span className="btn_text">{item.btnText}</span>
                </a>
              }
            />
          ))}
        </PostArea>    
      </Container>
      <Container width="1260px">
    
        <Heading content="Thanks to all our distributors" />
      
        <Box className="row" {...row}>
          <Box className="col-two" {...colTwo}>
            {data.charityJson.distributors.slice(0, 5).map(item => (
              <Box className="col" {...col}>
                <Text>
                 {item}
                 </Text>
              </Box>
             ))}
           </Box>
          <Box className="col-two" {...colTwo}>
            {data.charityJson.distributors.slice(0, 5).map(item => (
              <Box className="col" {...col}>
                <Text>
                 {item}
                 </Text>
              </Box>
             ))}
           </Box>

           

        </Box>
        
      </Container>
      
    </SectionWrapper>
  );
};

// Footer style props
BlogSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
};

// Footer default style
BlogSection.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '30%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '70%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '33.33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};


export default BlogSection;
