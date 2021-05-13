import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Helmet } from 'react-helmet';

import { PageContainer, PageFirstLayer, PageFirstLayerInner, PageFirstLayerText } from '../../styles/aboutUs/AboutUsStyle';
import { LayerButton, LayerContainer, LayerFlexBox } from '../../styles/home/BodyStyle';
import { ContactUsBox, ContactUsLeft, ContactUsRight, ContactUsTextField, ContactUsTextArea, ContactUsText, ContactBanner, ContactBannerInner, ContactHeadline, ContactInfo, ContactBannerMap, ContactIcon } from '../../styles/contactUs/ContactUsStyle';

import RoomIcon from '@material-ui/icons/Room';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

import ContactMap from '../../images/home/Map.png';

const ContactUs = () => {

    AOS.init();

    return (
        <>
            <Helmet>
                <title>Contact Us @ Co.in</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            </Helmet>
            <PageContainer>
                <PageFirstLayer>
                    <PageFirstLayerInner>
                        <PageFirstLayerText data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">Contact Us</PageFirstLayerText>
                    </PageFirstLayerInner>
                </PageFirstLayer>

                <LayerContainer style={{ marginBottom: '15em' }}>
                    <LayerFlexBox>
                        <ContactUsLeft>
                            <ContactUsBox>
                                <ContactUsTextField placeholder=' Name' />
                                <ContactUsTextField placeholder=' Phone Number' />
                            </ContactUsBox>

                            <ContactUsBox>
                                <ContactUsTextField placeholder=' Email Address' />
                                <ContactUsTextField placeholder=' Subject' />
                            </ContactUsBox>

                            <ContactUsBox>
                                <ContactUsTextArea placeholder=' Message' />
                            </ContactUsBox>

                            <ContactUsText>By clicking submit, you agree to our <b style={{ color: '#239D48' }}>Privacy Policy</b>.</ContactUsText>
                            <LayerButton>Submit</LayerButton>
                        </ContactUsLeft>
                        <ContactUsRight>
                            <ContactBanner>
                                <ContactBannerInner>
                                    <ContactHeadline>Contact Information</ContactHeadline>
                                    <ContactInfo><RoomIcon style={{ fontSize: '1.1em' }} /> Address: Polystar 2nd Roundabout, Lekki Phase 1 105102, Lagos</ContactInfo>
                                    <ContactInfo><MailOutlineIcon style={{ fontSize: '1.1em' }} /> info@coti.com.ng</ContactInfo>
                                    <ContactInfo><CallOutlinedIcon style={{ fontSize: '1.1em' }} /> 08176050100</ContactInfo>
                                    <ContactInfo>
                                        <ContactIcon className="fab fa-instagram"></ContactIcon>
                                        <ContactIcon className="fab fa-facebook"></ContactIcon>
                                        <ContactIcon className="fab fa-twitter-square"></ContactIcon>
                                    </ContactInfo>

                                </ContactBannerInner>
                                <ContactBannerMap src={ContactMap} />
                            </ContactBanner>
                        </ContactUsRight>
                    </LayerFlexBox>
                </LayerContainer>
            </PageContainer>
        </>
    )
};

export default ContactUs;