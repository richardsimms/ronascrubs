import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper } from './navbar.style';
import logoImage from 'common/src/assets/image/charity/logo.svg';
// import heartImage from 'common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="Rona Scrubs" />
        </Link>
        <MenuWrapper>
           <Link className="smooth-scroll" to="/#ourMission" title="Get Scrubs" offset={81}>
            Get Scrubs
          </Link>
          <Link className="smooth-scroll" to="/#ourApproach"  title="Sew Scrubs" offset={80}>
          Sew Scrubs
          </Link>
          <Link  to="/about"  title="About Rona Scrubs">
            About
          </Link>
          
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
