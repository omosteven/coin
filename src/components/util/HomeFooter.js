import React from 'react';

import { Helmet } from 'react-helmet';
import { LayerContainer, LayerFlexBox } from '../../styles/home/BodyStyle';
import { FooterBtn, FooterBtnBox, FooterCardText, FooterCardTitle, FooterContainer, FooterEachCard, FooterInput, FooterLogo } from '../../styles/home/FooterStyle';

import HeaderImg from '../../images/home/co.in-logo.png';
import { ContactIcon } from '../../styles/contactUs/ContactUsStyle';

import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';


const HomeFooter = () => {

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            </Helmet>
            <FooterContainer>
                <LayerContainer>
                    <LayerFlexBox>
                        <FooterEachCard>
                            <FooterLogo src={HeaderImg} />
                        </FooterEachCard>
                        <FooterEachCard>
                            <FooterCardTitle>Useful Links</FooterCardTitle>
                            <FooterCardText>About Us</FooterCardText>
                            <FooterCardText>Services</FooterCardText>
                            <FooterCardText>Contact Us</FooterCardText>
                        </FooterEachCard>

                        <FooterEachCard>
                            <FooterCardTitle>Newsletter Subscription</FooterCardTitle>
                            <FooterCardText>Join our weekly newsletter list. Just enter your email address below.</FooterCardText>
                            <FooterCardText>
                                <FooterInput style={{ color: 'white' }} placeholder='  Your email address' />
                                <FooterBtnBox>
                                    <FooterBtn>
                                        <ArrowForwardOutlinedIcon />
                                    </FooterBtn>
                                </FooterBtnBox>
                            </FooterCardText>
                        </FooterEachCard>

                        <FooterEachCard>
                            <FooterCardTitle>Contact Us</FooterCardTitle>
                            <FooterCardText>Polystar 2nd Roundabout, Lekki Phase 1 105102, Lagos.</FooterCardText>
                            <FooterCardText>Tel: <b>+23480176050100</b></FooterCardText>
                            <FooterCardText>Email: <b>info@coin.com.ng</b></FooterCardText>
                            <FooterCardText> <ContactIcon className="fab fa-instagram"></ContactIcon>
                                <ContactIcon className="fab fa-facebook"></ContactIcon>
                                <ContactIcon className="fab fa-twitter-square"></ContactIcon>
                            </FooterCardText>
                        </FooterEachCard>
                    </LayerFlexBox>
                </LayerContainer>
            </FooterContainer>
        </>
    )
};

export default HomeFooter;