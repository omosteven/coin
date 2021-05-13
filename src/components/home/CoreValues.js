import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Layer5CardCircle, Layer5Card, Layer5CardCircleText, Layer5CardText, LayerContainer, LayerFlexBox, LayerFlexBoxSubtitle } from '../../styles/home/BodyStyle';

const CoreValues = () => {

    AOS.init();
    
    const ourValues = [{
        no: '01',
        text: 'Leadership'
    }, {
        no: '02',
        text: 'Individual (community) growth and success'
    },
    {
        no: '03',
        text: 'Creating history'
    },
    {
        no: '04',
        text: 'Legacy'
    },
    {
        no: '05',
        text: 'Outstanding results'
    }]

    return (
        <>
            <LayerContainer style={{ marginTop: '8em' }}>
                <LayerFlexBoxSubtitle style={{ textAlign: 'center' }}>OUR VALUES</LayerFlexBoxSubtitle>

                <LayerFlexBox>
                    {ourValues.map(eachOurValue => (
                        <Layer5Card key={eachOurValue.no}  data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                            <Layer5CardCircle>
                                <Layer5CardCircleText>{eachOurValue.no}</Layer5CardCircleText>
                            </Layer5CardCircle>
                            <Layer5CardText>{eachOurValue.text}</Layer5CardText>
                        </Layer5Card>
                    ))}
                </LayerFlexBox>
            </LayerContainer>
        </>
    )
};

export default CoreValues;