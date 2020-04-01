import React, { Fragment } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from './bannerSection.style';

const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };

  const data = useStaticQuery(graphql`
    query {
      charityJson {
        bannerSlides {
          id
          thumb_url {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <BannerWrapper>
      <LeftBar text="SCROLL DOWN" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <HighlightedText className="highlighted_text">
            <strong>NEWS</strong> Pilot lanched 1 April 
          </HighlightedText>
          <Heading content="Scrubs made with TLC" />
          <Heading
            as="h4"
            content="Rona Scrubs is a not-for-profit charitable organisation, creating scrubs for healthcare heroes in response to COVID-19"
          />
          <Text content="Our mission is to provide a new way of giving back to our medical heroes, and the wider community, during the COVID-19 pandemic." />
          <Link className="learn__more-btn" to="/signup_hero">
            <span className="hyphen" />
            <span className="btn_text">Order scrubs </span>
          </Link>
        </TextArea>
        <ImageArea>
          <GlideCarousel
            carouselSelector="charitySlide"
            options={glideOptions}
            nextButton={<span className="next_arrow" />}
            prevButton={<span className="prev_arrow" />}
          >
            <Fragment>
              {data.charityJson.bannerSlides.map(slide => (
                <GlideSlide key={slide.id}>
                  <Image
                    fluid={
                      (slide.thumb_url !== null) | undefined
                        ? slide.thumb_url.childImageSharp.fluid
                        : {}
                    }
                    alt={`Charity slide image ${slide.id}`}
                    className="slide_image"
                  />
                </GlideSlide>
              ))}
            </Fragment>
          </GlideCarousel>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
