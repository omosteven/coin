import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { LayerContainer, LayerFlexBox, LayerFlexBoxImg, LayerFlexBoxLeft, LayerFlexBoxRight, LayerFlexBoxSubtitle, LayerFlexBoxText } from '../../styles/home/BodyStyle';

import VisionImg from '../../images/home/Rectangle 95-2.png';

const VisionAndMission = () => {
    AOS.init();
    
    return (
        <>
            <LayerContainer style={{ marginTop: '8em' }}>
                <LayerFlexBox  data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                    <LayerFlexBoxLeft style={{ marginRight: '1%' }}>
                        <LayerFlexBoxSubtitle data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">Our Vision</LayerFlexBoxSubtitle>
                        <LayerFlexBoxText style={{ width: '80%' }} data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">The Leader in providing innovative Technological solution to Africa businesses.</LayerFlexBoxText>

                        <LayerFlexBoxSubtitle data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">Our Mission</LayerFlexBoxSubtitle>
                        <LayerFlexBoxText style={{ width: '80%' }} data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">Establishing, growing and supporting Africa business with technological solution.</LayerFlexBoxText>
                    </LayerFlexBoxLeft>
                    <LayerFlexBoxRight data-aos="fade-up" data-aos-duration="6000" data-aos-easing="linear">
                        <LayerFlexBoxImg src={VisionImg} style={{ width: '100%' }} />
                    </LayerFlexBoxRight>
                </LayerFlexBox>
            </LayerContainer>
        </>
    )
};

export default VisionAndMission;