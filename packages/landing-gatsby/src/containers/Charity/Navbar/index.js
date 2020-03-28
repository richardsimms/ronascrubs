import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';

import logoImage from 'common/src/assets/image/charity/logo.svg';
import heartImage from 'common/src/assets/image/charity/heart-red.png';

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Link className="logo" to="/">
          <Image src={logoImage} alt="Charity React Next Landing" />
        </Link>
        <MenuWrapper>
          <Link className="smooth_scroll" to="/about" offset={81}>
            About
          </Link>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
