import React from 'react';

import { Helmet } from 'react-helmet';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { BodyContainer, BodyFirstLayer, BodyFirstLayerInner, BodyFirstLayerSubtitle, BodyFirstLayerTitle, LayerButton, LayerContainer, LayerFlexBox, LayerFlexBoxImg, LayerFlexBoxLeft, LayerFlexBoxRight, LayerFlexBoxSubtitle, LayerFlexBoxText, LayerFlexBoxTitle } from '../../styles/home/BodyStyle';

import TestImg from '../../images/home/idea-1876659_1920.jpg';
import WhoWeAreImg from '../../images/home/Rectangle 95-3.png';

import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import FooterBottom from './FooterBottom';
import SuccessCategory from './SuccessCategory';
import SolutionsOfferred from './SolutionsOfferred';
import CoreValues from './CoreValues';
import VisionAndMission from './VisionAndMission';
import OurServices from './OurServices';

const HomeBody = () => {

    AOS.init();

    return (
        <>
            <Helmet>
                <title>Welcome to Co.in</title>
            </Helmet>
            <BodyContainer>
                <BodyFirstLayer>
                    <BodyFirstLayerInner>
                        <BodyFirstLayerTitle data-aos="fade-up" data-aos-duration="3000" data-aos-easing="linear">One stop shop software development <br />company</BodyFirstLayerTitle>
                        <BodyFirstLayerSubtitle data-aos="fade-up" data-aos-duration="3000" data-aos-easing="linear">We turn the best of your business ideas into innovative software solutions and we can help with a wide range of applications services.</BodyFirstLayerSubtitle>
                        <LayerButton data-aos="fade-up" data-aos-duration="3000" data-aos-easing="linear">Get in Touch</LayerButton>
                    </BodyFirstLayerInner>
                </BodyFirstLayer>

                <LayerContainer data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                    <LayerFlexBox>
                        <LayerFlexBoxLeft>
                            <LayerFlexBoxImg src={WhoWeAreImg} />
                        </LayerFlexBoxLeft>
                        <LayerFlexBoxRight>
                            <LayerFlexBoxTitle>WHO WE ARE</LayerFlexBoxTitle>
                            <LayerFlexBoxSubtitle>About Us</LayerFlexBoxSubtitle>
                            <LayerFlexBoxText data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">We are your one stop shop software development company with full security services helping businesses of all size reinforce quality. We turn the best of your business ideas into innovative software solutions and we can help with a wide range of applications services.</LayerFlexBoxText>
                            <LayerFlexBoxText data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">Every of our top notch services are rendered by our team of highly skilled professionals versed in coding, automation, cloud and on premise infrastructure services and many more. We render a cost-effective way to go digital with our pool of services.</LayerFlexBoxText>
                            <LayerButton>Find out more about us</LayerButton>
                        </LayerFlexBoxRight>
                    </LayerFlexBox>
                </LayerContainer>


                <OurServices />

                <VisionAndMission />

                <CoreValues />

                <SolutionsOfferred />

                <SuccessCategory />

                <LayerContainer data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                    <LayerFlexBoxSubtitle style={{ textAlign: 'center', marginBottom: '1em' }}>Industries we serve</LayerFlexBoxSubtitle>
                    <LayerFlexBox>
                        <LayerFlexBoxLeft style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Banks.</LayerFlexBoxText>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Fintech.</LayerFlexBoxText>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Tele communication.</LayerFlexBoxText>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Manufacturing.</LayerFlexBoxText>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Oil and gas.</LayerFlexBoxText>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Service industries.</LayerFlexBoxText>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Real Estate.</LayerFlexBoxText>
                            <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Healthcare providers.</LayerFlexBoxText>
                        </LayerFlexBoxLeft>
                        <LayerFlexBoxRight>
                            <LayerFlexBoxImg src={TestImg} />
                        </LayerFlexBoxRight>
                    </LayerFlexBox>
                </LayerContainer>

                <FooterBottom />
            </BodyContainer>
        </>
    )
};

export default HomeBody;