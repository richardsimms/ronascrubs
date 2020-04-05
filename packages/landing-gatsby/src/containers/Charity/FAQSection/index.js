import React from 'react';
import Container from 'common/src/components/UI/Container';
import Heading from 'common/src/components/Heading';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
≈
import SectionWrapper, {
  SectionHeader,
  ContentArea,
  TextWrapper,
  List,
  Item,
} from './FAQSection.style';
import chartSize from 'common/src/assets/image/charity/sizechart.jpeg';

const FundraiserSection = () => {
  return (
    <SectionWrapper id="fundraisers">
      <Container width="1260px">
        <SectionHeader>
          <Heading content="Frequently Asked Questions" />
        </SectionHeader>
        <ContentArea>
          <TextWrapper>
            <Heading as="h3" content="Content"  />
          <List >
            <Item><AnchorLink className="AnchorLink" to="/faq#volunteer"  title="Volunteer" >Volunteer Sewing Angels</AnchorLink></Item>
            <Item><AnchorLink className="AnchorLink" to="/faq#healthcare"  title="Healthcare" >Healthcare Worker Heroes</AnchorLink></Item>
            <Item><AnchorLink className="AnchorLink" to="/faq#donations"  title="Donations" >Donations</AnchorLink></Item>
            <Item><AnchorLink className="AnchorLink" to="/faq#general"  title="General" >General</AnchorLink></Item>
          </List>
          <hr />
            <Heading as="h3" content="Volunteer Sewing Angels" id="volunteer" />
              <List>
                <Item ><b>What is involved in being a volunteer sewing Angel with Rona Scrubs?</b> – we are putting together some instructions and tips and tricks that we will make available soon. Broadly involved is the end to end process of making scrubs which includes washing the fabric you receive, cutting the pattern, sewing the scrubs, checking the quality (no holes, etc), and preparing the scrubs for collection.</Item>
                <Item ><b>What are the costs involved in being a volunteer sewing Angel?</b> – as a sewing volunteer, we assume that you probably have a sewing machine and ‘stash’ of other tools and supplies. On that basis, the team at Rona Scrubs has procured fabric and patterns and will deliver them to you. At this stage, we are not able to provide thread, however we are looking at how to address this and will update in the future. If you don’t have matching thread, you can use what you’ve got.  </Item>
                <Item ><b>Can I use fabric and thread that I have bought myself to fill orders for Rona Scrubs? </b> - we are happy for you to purchase appropriate fabric yourself instead of waiting for a delivery from us once you have been allocated an order. We recommend poly cotton or 100% cotton broadcloth. You can also use 100% light cotton drill, but only for pants. We also encourage you to order online, and strongly advise against going into a store, in accordance with the latest Government advice and restrictions.</Item>
                <Item ><b>How do I know if my sewing skills are adequate? </b> - in order to ensure our healthcare Heroes receive scrubs that are fit for purpose, our distributors will quality check your initial scrubs then give you the greenlight if they are confident in your workmanship. If you can sew a simple t-shirt and pair of shorts or pants you can probably make the scrubs. Don’t worry, we will ask you about your level of sewing experience after you register, and take this into consideration to help you be involved even if you don’t have much experience.</Item>
                <Item ><b>What do I do if I get sick while making scrubs for an order I have received?</b>? - please do not make scrubs if you are sick, or have been in contact with anyone who is confirmed to have COVID-19, or you are completing a 14-day mandatory self-quarantine due to having recently returned from overseas or interstate. If you have already been assigned an order and any of the above applies please let your distributor know and we will email you with instructions. Your health and wellbeing and that of your family is more important than anything else!</Item>
                <Item ><b>Why should I order/sew scrubs with Rona Scrubs and not another group currently advertising similar ideas?</b> - our mission centres around community generosity and love, so we are all for people supporting any individual or group they wish. Many hands make light work, so if you feel that Rona Scrubs is right for you, we would be delighted to have you on board!</Item>
                <Item ><b>How do I find people to sew with? I don't want to do it home alone </b> - we understand this is a lonely and physically isolating time, but we must be very clear about the importance of all our Angels maintaining safe social distancing measures. This is to keep you and the community safe. Please do not sew with anyone you do not already live with. We will put you in touch with other volunteers via social media and other methods so you can communicate and share tips, tricks and stories.</Item>
                <Item ><b>Can I also make gowns and masks?</b> - we understand there is a shortage of gowns and masks across Australia (and indeed globally), but in order to simplify the tasks for our Angels and fill a gap we are passionate about, we are limiting our offering to the making of scrubs alone.</Item>
                <Item ><b>How can I manage a surplus of orders? I can't keep up with the demand</b> - if you feel overwhelmed or your circumstances change and you are no longer able to complete an order that you have accepted, please contact us at <a href="mailto:volunteers@ronascrubs.com">volunteers@ronascrubs.com</a> </Item>
                <Item ><b>Can I be paid for my sewing efforts? </b> - we know it takes a few hours to make a set of scrubs and we are deeply thankful for your time and effort in doing so. As we are a small, grassroots not-for-profit charitable organisation, we are not in a position to pay our volunteers. </Item>
                <Item ><b>How do I keep track of the latest government health advice/regulations? </b> - we understand there is an overwhelming amount of information circulating around COVID-19 and it can be difficult to find the best source. We advise you to stay up to date and follow the Australian Government advice which can be found at <a href="https://www.health.gov.au">https://www.health.gov.au</a> </Item>
                <Item ><b>How do I ensure the scrubs meet quality standards/are fit for purposes?</b> – we are putting together some instructions and tips and tricks that we will make available soon. </Item>
                <Item ><b>What pattern should I use?</b> - the recommended pattern is Simplicity #5443. If you have this in your stash, we are happy for you to use it. We have also procured a number of these patterns to send to our first batch of volunteer sewing Angels when they are allocated their first order. We are working on obtaining more and will work with you on a solution if we run out.</Item>
              </List>
            <Heading as="h3" content="Healthcare Worker Heroes" id="healthcare" />
              <List>
                <Item ><b>Help me get the right length scrub pants</b> – with a measuring tape while standing straight-legged, we recommend measuring from the top of your inner thigh down to the top of your inner foot, then adding up to 10cm to allow the scrub pants to drape over your shoes.</Item>
                <Item ><b>Help me find the right size</b> – the Simplicity #5443 pattern which we are predominantly using is very generous sizing. Depending on how loose you like your scrubs, we recommend you go down 1-2 sizes from what would normally wear, but bear in mind the cotton fabric will shrink with repeated hot washes. To assist you in finding the right size please see the <a href={chartSize} target="_blank" rel="noopener noreferrer">size guide.
                  </a></Item>
                <Item ><b>Can I request customised scrubs for my hard-to-fit body shape?</b> – given the volume of scrubs our volunteer sewers are trying to make for healthcare workers, we cannot offer custom-sizing. If this is a real issue for you please email <a href="mailto:info@ronascrubs.com">info@ronascrubs.com</a> and we will do our best to accommodate your needs.</Item>
                <Item ><b>Help me feel great in scrubs that fit</b> – we provide a sizing chart to help you select the right size for you, using the most popular scrub pattern that Spotlight keeps in stock, Simplicity #5443. Please bear in mind these are home-made scrubs so the fit will not be perfect!</Item>
                <Item ><b>Help me and my patients feel happy with cheerful fabric</b> – we are delighted to have received some fun patterns and different colours from Spotlight and will do our best to continue selecting these as we order more, though given the fabric is donated we do not always have a wide variety of options. </Item>
                <Item ><b>Does anything preclude me from wearing these scrubs in my workplace?</b> - we have had no objection from Australian infection control bodies prohibiting the use of home-made scrubs at the workplace. All healthcare workers are instructed to wash the scrubs daily at 65 degrees Celsius if possible with your machine at home, or a cold wash followed by 15 minutes on the highest heat setting in the dryer. If a tumble dryer is not available, line dry scrubs in the sun. Alternatively, follow the instructions of your institution.</Item>
                <Item ><b>Do I need to pay for these scrubs?</b> - the team at Rona Scrubs feel strongly that our Heroes do not have to pay for these scrubs, but you are welcome to make a donation if you wish.</Item>
                <Item ><b>When will I receive my scrubs?</b> - it is difficult to provide specific estimates on timing of delivery in the current climate and with progressive lockdowns, but we aim to have scrubs delivered to Heroes within 2 weeks of the order. Please note we are currently in pilot, so we will have more certainty around timeframes in the future.</Item>
                <Item ><b>Is there a limit to how many sets of scrubs I can order?</b> - in order to spread the Rona Scrubs love and help as many Heroes as we can, we ask you please to limit your order to 1-2 sets per person. At this stage, we cannot facilitate bulk orders for hospitals.</Item>
                <Item ><b>How do I know that these scrubs aren't already contaminated?</b> - we are very clear with our distributors and sewing Angels about following specific laundering and packaging instructions to limit the spread of COVID-19. We advise you take all necessary precautions on receipt of your scrubs then wash them as per our laundering instructions prior to first wear (see question 6).</Item>
                <Item ><b>Help me fix my order, there was an error</b> – please send us an email at <a href="mailto:info@ronascrubs.com">info@ronascrubs.com</a> and we will help rectify the issue. </Item>
                <Item ><b>What are the laundering instructions?</b> - All healthcare workers are instructed to wash the scrubs daily at 65 degrees Celsius if possible with your machine at home, or a cold wash followed by 15 minutes on the highest heat setting in the dryer. If a tumble dryer is not available, line dry scrubs in the sun. Alternatively, follow the instructions of your institution.</Item>
                <Item ><b>My scrubs are the wrong size, can I exchange them?</b> - please email us at <a href="mailto:info@ronascrubs.com">info@ronascrubs.com</a>  so we can provide an address to send them back to and get another set out to you.</Item>
                <Item ><b>My hospital requires that I wear a certain colour of scrubs. Can I request a certain colour?</b> - if your hospital or clinic mandates wearing scrubs of a certain colour please let us know when you order and we will see what we can do. </Item>
                <Item ><b>Do I need to pay for delivery?</b> - we aim to ensure that delivery is free of charge thanks to the generosity of our supporters and donors. </Item>
                <Item ><b>How can I recognise/celebrate the efforts of sewing volunteers?</b> - we would love you to take a photo in your scrubs and send them to us at <a href="mailto:info@ronascrubs.com">info@ronascrubs.com</a> , which we can pass on to our sewing Angels. Please also let us know if you would be happy for us to post the picture(s) on our website and Facebook page</Item>
                <Item ><b>Can I send the scrubs back? I don't like them (the colour, cut, pocket location, feel, material)</b> - we quality control the scrubs to ensure they meet a certain standard before being delivered to our Heroes, but if you are unhappy with the final result please let us know and we will do our best to get another set out to you.</Item>
                <Item ><b>Will the scrubs shrink with daily hot washes?</b> - cotton fabric does shrink over time with repeated hot washes, but it is also a durable, comfortable and breathable fabric suitable for scrubs. The Simplicity #5443 pattern is very generously sized so we anticipate some degree of shrinkage will in fact be beneficial to the wearer.</Item>
                <Item ><b>Can I request a particular fabric for my scrubs?</b> - ideally we would love to utilise the best fabric money can buy, but we are trying to find the balance between availability and quality. Our fabric to date has been generously donated by Spotlight, and their stores do not typically stock uniform fabric. Based on our research we are using 100% cotton fabrics, this seems to be the best option based on what we have available to us.</Item>
                <Item ><b>Can I also have gowns and masks made?</b> - we understand there is a shortage of gowns and masks across Australia (and indeed globally), but in order to simplify the tasks for our Angels and fill a gap we are passionate about, we are limiting our offering to the making of scrubs alone. </Item>
                <Item ><b>Are durable are these scrubs, and are they better than those provided by hospitals or ordered online through commercial channels?</b> - we cannot compete with professionally manufactured scrubs, but we can guarantee these scrubs are made with love by our Angels and we hope they serve you well for at least the duration of the COVID-19 pandemic. </Item>
              </List>
            <Heading as="h3" content="Donations" id="donations" />
              <List>
                <Item ><b>How do I donate?</b> -  The easiest way to donate to Rona Scrubs is to click the <Link to="/#donate">Donate</Link> button on the website. You can also donate directly from your Paypal account (if you have one) by using this email address - <a href="mailto:info@ronascrubs.com">info@ronascrubs.com</a>.</Item>
                <Item ><b>What will my donation be used for?</b> - donations will be used to help get supplies to our sewing Angels and then get the finished scrubs to healthcare worker Heroes. They may also be used to purchase any additional items we might need to fill orders where we have not received a donation of goods or where we are running low. Examples include fabric, thread, and patterns. </Item>
                <Item ><b>Can I claim a tax deduction for my donation?</b> – we are in the process of applying for Deductible Gift Recipient status. This typically takes up to 4 weeks, so keep your receipt, and we will advise here on the website when we have DGR status.</Item>
              </List>
            <Heading as="h3" content="General" id="general" />
            <List>
                <Item ><b>I am a volunteer/healthcare worker and need to know my personal data will be protected/not used for unauthorised purposes</b> – we are currently preparing a privacy policy, but the key things to know in the meantime are:
                  <Item>We will only use your data to improve your experience</Item>
                  <Item>We will protect your data like it’s our own and it's all staying in Australia</Item>
                  <Item>We won't spam you - you'll only hear from us for things you expect from us. If you get more than you want, please let us know.</Item>
                  <Item>We don't keep your info unless we need it. If we don’t need it, we’ll delete it.</Item>
                
                </Item>
            </List>
          </TextWrapper>
        </ContentArea>
      </Container>
    </SectionWrapper>
  );   
};

export default FundraiserSection;
