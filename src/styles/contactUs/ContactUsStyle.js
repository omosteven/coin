import styled from 'styled-components';

export const ContactUsLeft = styled.div`
height:fit--content;
width:57%;
@media screen and (max-width:769px){
    width:100%
`;

export const ContactUsRight = styled.div`
width:40%;
@media screen and (max-width:769px){
    width:100%;
    display:none;
`;

export const ContactUsTextField = styled.input`
  width: 48%;
  height: 3em;
  margin-bottom: 1em;
  background: #ffffff;
  border: 1px solid #239d48;
  box-sizing: border-box;
  border-radius: 0.5em;
  outline: #239d48;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const ContactUsTextArea = styled.textarea`
  width: 100%;
  height: 15em;
  margin-bottom: 1em;
  background: #ffffff;
  outline: #239d48;
  border: 1px solid #239d48;
  box-sizing: border-box;
  border-radius: 0.5em;
`;

export const ContactUsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 769px) {
    width: 100%;
    display: block;
  }
`;

export const ContactUsText = styled.h3`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #030f07;
`;

export const ContactBanner = styled.div`
  width: 100%;
  height: 16em;
  background: #160c28;
`;

export const ContactBannerInner = styled.div`
  margin-left: 1.5em;
  margin-right: 1em;
  width: fit-content;
  position: absolute;
`;

export const ContactHeadline = styled.h3`
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
  color: #239d48;
`;

export const ContactInfo = styled.h5`
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  // font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

export const ContactMedia = styled.div``;

export const ContactBannerMap = styled.img`
  margin-top: 17em;
  width: 100%;
  height: 10em;
`;

export const ContactIcon = styled.i`
  margin-right: 0.5em;
  border-radius: 50px;
  font-size: 2em;
  color: white;
  transition: 0.2s font-size;
  &:hover {
    font-size: 2.5em;
  }
`;
