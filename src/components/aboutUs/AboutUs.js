import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Layer3DarkCard, Layer3DarkCard2, Layer3DarkCard3, Layer3DarkCardText, PageContainer, PageFirstLayer, PageFirstLayerInner, PageFirstLayerText } from '../../styles/aboutUs/AboutUsStyle';
import { LayerContainer, LayerFlexBox, LayerFlexBoxImg, LayerFlexBoxLeft, LayerFlexBoxRight, LayerFlexBoxSubtitle, LayerFlexBoxText, LayerNonFlexBox } from '../../styles/home/BodyStyle';

import AboutUsImg from '../../images/home/Rectangle99-2.png';
import VisionAndMission from '../home/VisionAndMission';
import CoreValues from '../home/CoreValues';
import SolutionsOfferred from '../home/SolutionsOfferred';
import FooterBottom from '../home/FooterBottom';

const AboutUs = () => {

    AOS.init();

    return (
        <>
            <PageContainer>
                <PageFirstLayer>
                    <PageFirstLayerInner>
                        <PageFirstLayerText data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">About Us</PageFirstLayerText>
                    </PageFirstLayerInner>
                </PageFirstLayer>

                <LayerContainer>
                    <LayerFlexBox>
                        <LayerFlexBoxLeft>
                            <LayerFlexBoxSubtitle data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">Overview</LayerFlexBoxSubtitle>
                            <LayerFlexBoxText style={{ width: '95%' }} data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">We are your one stop shop software development company with full security services helping businesses of all size reinforce quality. We turn the best of your business ideas into innovative software solutions and we can help with a wide range of applications services.</LayerFlexBoxText>
                        </LayerFlexBoxLeft>
                        <LayerFlexBoxRight data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">
                            <LayerFlexBoxImg src={AboutUsImg} />
                        </LayerFlexBoxRight>
                    </LayerFlexBox>
                </LayerContainer>

                <LayerContainer>
                    <LayerNonFlexBox>
                        <LayerFlexBoxSubtitle>How we work</LayerFlexBoxSubtitle>
                        <LayerFlexBoxText style={{ width: '90%' }}>Every of our top notch services are rendered by our team of highly <br />skilled professionals versed in the following:</LayerFlexBoxText>
                    </LayerNonFlexBox>

                    <LayerFlexBox data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">
                        <Layer3DarkCard>
                            <Layer3DarkCardText>Automation</Layer3DarkCardText>
                        </Layer3DarkCard>

                        <Layer3DarkCard2 data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">
                            <Layer3DarkCardText>Cloud Security</Layer3DarkCardText>
                        </Layer3DarkCard2>

                        <Layer3DarkCard3 data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">
                            <Layer3DarkCardText>Coding</Layer3DarkCardText>
                        </Layer3DarkCard3>
                    </LayerFlexBox>
                </LayerContainer>

                <VisionAndMission />

                <CoreValues />

                <SolutionsOfferred />

                <FooterBottom />

            </PageContainer>
        </>
    )
};

export default AboutUs;