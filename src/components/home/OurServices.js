import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Layer3Card, Layer3CardImg, Layer3CardImgBox, Layer3CardText, Layer3CardTitle, LayerButton, LayerContainer, LayerFlexBox, LayerFlexBoxSubtitle, LayerFlexBoxTitle, LayerNonFlexBox } from '../../styles/home/BodyStyle';
import ServiceImg1 from '../../images/home/Vector.png';
import ServiceImg2 from '../../images/home/Vector1.png';
import ServiceImg3 from '../../images/home/Vector2.png';

const OurServices = () => {
    AOS.init();
    
    return (
        <>
            <LayerContainer>
                <LayerNonFlexBox>
                    <LayerFlexBoxTitle>WHO WE DO</LayerFlexBoxTitle>
                    <LayerFlexBoxSubtitle>Our Services</LayerFlexBoxSubtitle>
                </LayerNonFlexBox>

                <LayerFlexBox data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                    <Layer3Card>

                        <Layer3CardImgBox>
                            <Layer3CardImg src={ServiceImg1} />
                        </Layer3CardImgBox>

                        <Layer3CardTitle>Security Integration</Layer3CardTitle>
                        <Layer3CardText>Coti is a full service security provider that reinforces quality, capable of supporting your operations in every phase of security by seamlessly coordinating and linking various subsystems such as video surveillance, intrusion, access control, emergency notification, computer networks, and more to counter ever-increasing physical and cyber threats.</Layer3CardText>
                    </Layer3Card>

                    <Layer3Card data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                        <Layer3CardImgBox>
                            <Layer3CardImg src={ServiceImg2} />
                        </Layer3CardImgBox>

                        <Layer3CardTitle>Application Service</Layer3CardTitle>
                        <Layer3CardText>We render a cost-effective way to go digital with our pool of services such as application acceleration, load balancing, application performance monitoring, auto scaling, micro-segmentation, service proxy and service discovery needed to optimally deploy, run and improve applications.</Layer3CardText>
                    </Layer3Card>

                    <Layer3Card data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                        <Layer3CardImgBox>
                            <Layer3CardImg src={ServiceImg3} />
                        </Layer3CardImgBox>
                        <Layer3CardTitle>Cloud & on-premise infrastructure</Layer3CardTitle>
                        <Layer3CardText>We install and maintain infrastructure within the premises of an organisation and or a person using the software and at a remote facility such as a server farm or cloud.</Layer3CardText>
                    </Layer3Card>
                </LayerFlexBox>

                <LayerNonFlexBox style={{ textAlign: 'center', marginTop: '2em' }}>
                    <LayerButton>Explore all our services</LayerButton>
                </LayerNonFlexBox>

            </LayerContainer>
        </>
    )
};

export default OurServices;