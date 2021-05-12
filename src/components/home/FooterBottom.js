import React from 'react';
import { LayerContainer, LayerFullFlexBox2, LayerFullFlexBoxText, LayerButton } from '../../styles/home/BodyStyle';

const FooterBottom = () => {
    return (
        <>
            <LayerContainer style={{ marginTop: '10em', marginBottom: '10em', width: '100%' }}>
                <LayerFullFlexBox2 style={{ textAlign: 'center' }}>
                    <LayerFullFlexBoxText>If you are looking to find an innovative software development company providing top notch services, then we'd love to hear from you.</LayerFullFlexBoxText>
                    <LayerButton>Contact Us</LayerButton>
                </LayerFullFlexBox2>
            </LayerContainer>
        </>
    )
};

export default FooterBottom;