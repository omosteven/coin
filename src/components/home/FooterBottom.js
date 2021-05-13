import React from 'react';

import { Link } from 'react-router-dom';

import { LayerContainer, LayerFullFlexBox2, LayerFullFlexBoxText, LayerButton } from '../../styles/home/BodyStyle';

const FooterBottom = () => {
    return (
        <>
            <LayerContainer style={{ marginTop: '10em', marginBottom: '25em', width: '100%' }}>
                <LayerFullFlexBox2 style={{ textAlign: 'center' }}>
                    <LayerFullFlexBoxText>If you are looking to find an innovative software development company providing top notch services, then we'd love to hear from you.</LayerFullFlexBoxText>
                    <Link to='/contactus/'> <LayerButton>Contact Us</LayerButton></Link>
                </LayerFullFlexBox2>
            </LayerContainer>
        </>
    )
};

export default FooterBottom;