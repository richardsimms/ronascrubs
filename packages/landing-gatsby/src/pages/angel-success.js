import SEO from '../components/seo';
import ErrorSec from '../containers/Thanks';
import Navbar from '../containers/Charity/Navbar';
import Footer from '../containers/Charity/Footer';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import {
    GlobalStyle,
    CharityWrapper,
    ContentWrapper,
  } from '../containers/Charity/charity.style';

const hereoSuccess = () => (
  <>
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Order complete" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
        <ErrorSec></ErrorSec>
        </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
    </>
);

export default hereoSuccess;
