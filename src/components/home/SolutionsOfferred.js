import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

import { LayerContainer, LayerFlexBox, LayerFlexBoxImg, LayerFlexBoxLeft, LayerFlexBoxRight, LayerFlexBoxSubtitle, LayerFlexBoxText } from '../../styles/home/BodyStyle';
import SolutionsImg from '../../images/home/Rectangle 95-1.png';

const SolutionsOfferred = () => {
    AOS.init();
    
    return (
        <>
            <LayerContainer  data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                <LayerFlexBoxSubtitle style={{ textAlign: 'center', marginBottom: '1em' }}>Solutions Offered</LayerFlexBoxSubtitle>
                <LayerFlexBox>
                    <LayerFlexBoxLeft>
                        <LayerFlexBoxImg src={SolutionsImg} />
                    </LayerFlexBoxLeft>
                    <LayerFlexBoxRight>
                        <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} /> Information security and risk assessment.</LayerFlexBoxText>
                        <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} />IT outsourcing services.</LayerFlexBoxText>
                        <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} />Business process automation and digital transformation.</LayerFlexBoxText>
                        <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} />Business Application development.</LayerFlexBoxText>
                        <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} />Managed servicesassessment.</LayerFlexBoxText>
                        <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} />IT cloud and on premise infrastructure.</LayerFlexBoxText>
                        <LayerFlexBoxText><CheckCircleRoundedIcon style={{ color: '#239D48', marginRight: '0.2em' }} />Training.</LayerFlexBoxText>

                    </LayerFlexBoxRight>
                </LayerFlexBox>
            </LayerContainer>
        </>
    )
};

export default SolutionsOfferred;