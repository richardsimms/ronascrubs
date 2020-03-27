import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/src/theme/charity';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/Charity/Navbar';
import MilestoneBlock from '../containers/Charity/MilestoneBlock';
import FundraiserSection from '../containers/Charity/FundraiserSection';
import Footer from '../containers/Charity/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/Charity/charity.style';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        <SEO title="Charity" />
        <ResetCSS />
        <GlobalStyle />
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
          <FundraiserSection />
          <MilestoneBlock />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
