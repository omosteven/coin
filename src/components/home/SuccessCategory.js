import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Layer4Card, Layer5CardCircleText, Layer5CardText, LayerContainer, LayerFlexBoxBG } from '../../styles/home/BodyStyle';

const SuccessCategory = () => {

    AOS.init();

    const layer3 = [{
        no: '15',
        text: 'Successful Projects'
    }, {
        no: '02',
        text: 'Office Locations'
    },
    {
        no: '2',
        text: 'Years in Business'
    },
    {
        no: '100%',
        text: 'Fueled by Passion'
    }]

    return (

        <>
            <LayerContainer style={{ marginTop: '10em', marginBottom: '10em', width: '100%' }}>
                <LayerFlexBoxBG>
                    {layer3.map(eachOurValue => (
                        <Layer4Card key={eachOurValue.no} data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                            <Layer5CardCircleText style={{ color: 'rgba(255,255,255,1)', marginBottom: '0em' }}>{eachOurValue.no}</Layer5CardCircleText>
                            <Layer5CardText style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 'bolder' }}>{eachOurValue.text}</Layer5CardText>
                        </Layer4Card>
                    ))}
                </LayerFlexBoxBG>
            </LayerContainer>
        </>
    )
}

export default SuccessCategory;