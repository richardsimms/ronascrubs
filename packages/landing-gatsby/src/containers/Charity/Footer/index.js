import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { facebook } from 'react-icons-kit/fa/facebook';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, {
  List,
  ListItem,
  CopyrightText,
  SocialList,
  SelectWrapper,
} from './footer.style';

import LogoImage from 'common/src/assets/image/charity/logo.svg';

const Footer = ({ row, col, colOne, colTwo }) => {
  const data = useStaticQuery(graphql`
    query {
      charityJson {
        menuWidgets {
          id
          title
          menu {
            id
            link
            text
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col-one" {...colOne}>
            <Link to="/charity" className="logo">
              <Image src={LogoImage} alt="Charity" />
            </Link>

            <Text className="text" content="" />
            <a
              aria-label="go to mail"
              href="mailto:info@ronascrubs.com"
              className="mail"
            >
              info@ronascrubs.com
            </a>
           
          </Box>
          {/* End of logo column */}
          <Box className="col-two" {...colTwo}>
            {data.charityJson.menuWidgets.map(widget => (
              <Box
                className="col"
                {...col}
                key={`footer__widget-key${widget.id}`}
              >
                <Heading
                  className="widget_title"
                  as="h3"
                  content={widget.title}
                />
                <List>
                  {widget.menu.map(item => (
                    <ListItem key={`list__item-${item.id}`}>
                      <Link to={item.link}>{item.text}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of List column */}
        </Box>
        {/* End of widgets row */}
        <Box className="row copyright" {...row}>
          <CopyrightText>
            <Text
              className="text"
              content="© 2020 Rona Scrubs. All Rights Reserved"
            />
          </CopyrightText>
          <SocialList>
            <li className="facebook">
              <a
                href="https://www.facebook.com/groups/865861777227284/"
                aria-label="social share link"
              >
                <Icon icon={facebook} />
              </a>
            </li>
          </SocialList>
        </Box>
        {/* End of copyright row */}
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
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

export default Footer;
