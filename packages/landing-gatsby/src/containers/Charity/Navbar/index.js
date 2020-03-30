import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper } from './navbar.style';
import logoImage from 'common/src/assets/image/charity/logo.svg';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="Rona Scrubs" />
        </Link>
        <MenuWrapper>
        <AnchorLink className="" to="/#ourMission" title="Get Scrubs" >
            Get Scrubs
          </AnchorLink>
        <AnchorLink className="" to="/#ourApproach"  title="Sew Scrubs" >
          Sew Scrubs
          </AnchorLink>
          <Link  to="/about"  title="About Rona Scrubs">
            About
          </Link>
          
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
