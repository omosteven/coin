import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Helmet } from 'react-helmet';

import { Layer3Card, Layer3CardImg, Layer3CardImgBox, Layer3CardText, Layer3CardTitle, LayerContainer, LayerFlexBox } from '../../styles/home/BodyStyle';
import FooterBottom from '../home/FooterBottom';

import ServiceImg1 from '../../images/home/Vector.png';
import ServiceImg2 from '../../images/home/Vector1.png';
import ServiceImg3 from '../../images/home/Vector2.png';
import { PageContainer, PageFirstLayer, PageFirstLayerInner, PageFirstLayerText } from '../../styles/aboutUs/AboutUsStyle';

const Services = () => {

    AOS.init();
    
    const ourServices1 = [{
        no: 1,
        title: 'Security Integration',
        text: 'Coti is a full service security provider that reinforces quality, capable of supporting your operations in every phase of security by seamlessly coordinating and linking various subsystems such as video surveillance, intrusion, access control, emergency notification, computer networks, and more to counter ever-increasing physical and cyber threats.'
    },
    {
        no: 2,
        title: 'Application Service',
        text: 'We render a cost-effective way to go digital with our pool of services such as application acceleration, load balancing, application performance monitoring, auto scaling, micro-segmentation, service proxy and service discovery needed to optimally deploy, run and improve applications.'
    },
    {
        no: 3,
        title: 'Cloud & on-premise infrastructure',
        text: 'We install and maintain infrastructure within the premises of an organisation and or a person using the software and at a remote facility such as a server farm or cloud.'
    }]

    const ourServices2 = [
        {
            no: 4,
            title: 'PCIDSS and ISO advisory services',
            text: 'We provide utmost PCI DSS services such as gap assessments and remediation advisory, technical evidence automation, etc. And ISO services certification support, remediation advisory, and gap assessment.'
        },
        {
            no: 5,
            title: 'VAPT/ASV',
            text: 'We use a set of data security services and tools that is designed to identify and help address cyber security vulnerabilities, also services and tools that determines if a company is compliant with PCI DSS external scanning requirements.'
        },
        {
            no: 6,
            title: 'Cloud & on-premise infrastructure',
            text: 'We use instructions to accomplish a task repeatedly without human intervention. It replaces manual work.'
        }]

    const ourServices3 = [

        {
            no: 7,
            title: 'IT outsourcing',
            text: 'We use external service providers to effectively deliver IT-enabled business process, application service and infrastructure solutions for business outcomes.'
        },
        {
            no: 8,
            title: 'Core banking application',
            text: 'We use instructions to accomplish a task repeatedly without human intervention. It replaces manual work.'
        }]

    return (
        <>
            <Helmet>
                <title>Our Services - Co.in</title>
            </Helmet>
            <PageContainer>
                <PageFirstLayer>
                    <PageFirstLayerInner>
                        <PageFirstLayerText>Our Services</PageFirstLayerText>
                    </PageFirstLayerInner>
                </PageFirstLayer>
                <LayerContainer>
                    <LayerFlexBox>

                        {ourServices1.map(eachService => (
                            <Layer3Card key={eachService.no} data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                                <Layer3CardImgBox>
                                    <Layer3CardImg src={ServiceImg1} />
                                </Layer3CardImgBox>

                                <Layer3CardTitle>{eachService.title}</Layer3CardTitle>
                                <Layer3CardText>{eachService.text}</Layer3CardText>
                            </Layer3Card>
                        ))}


                    </LayerFlexBox>

                    <LayerFlexBox>

                        {ourServices2.map(eachService => (
                            <Layer3Card key={eachService.no} data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                                <Layer3CardImgBox>
                                    <Layer3CardImg src={ServiceImg2} />
                                </Layer3CardImgBox>

                                <Layer3CardTitle>{eachService.title}</Layer3CardTitle>
                                <Layer3CardText>{eachService.text}</Layer3CardText>
                            </Layer3Card>
                        ))}


                    </LayerFlexBox>

                    <LayerFlexBox>

                        {ourServices3.map(eachService => (
                            <Layer3Card key={eachService.no} data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                                <Layer3CardImgBox>
                                    <Layer3CardImg src={ServiceImg3} />
                                </Layer3CardImgBox>

                                <Layer3CardTitle>{eachService.title}</Layer3CardTitle>
                                <Layer3CardText>{eachService.text}</Layer3CardText>
                            </Layer3Card>
                        ))}


                    </LayerFlexBox>
                </LayerContainer>

                <FooterBottom />

            </PageContainer>
        </>
    )
};

export default Services;