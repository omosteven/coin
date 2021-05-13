import styled from 'styled-components';

import layerBg from '../../images/home/idea-1876659_1920.jpg';
import layerBg2 from '../../images/home/Rectangle-99-3.png';
import layerFirstBg from '../../images/home/Rectangle-95-4.png';

export const BodyContainer = styled.div`
  // height: 100vh;
  width: 100%;
`;

export const BodyFirstLayer = styled.section`
  height: 85vh;
  width: 100%;
  background: rgba(2, 3, 16, 0.7);
  background: linear-gradient(180deg, rgba(2, 3, 16, 0.3), rgba(2, 3, 16, 0.5)),
  url(${layerFirstBg});
  margin-top:-5em;
  background-size:cover;
  display: block;
    // position:absolute;
  // border: 1px solid rgba(2, 3, 16, 0);
  @media screen and (max-width: 769px) {
    height:90vh;
  }
`;

export const BodyFirstLayerInner = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(2, 3, 16, 0);
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
  @media screen and (max-width: 769px) {
    width: 90%;
  }
`;

export const BodyFirstLayerTitle = styled.h3`
  font-family: Mulish;
  font-style: normal;
  font-weight: 800;
  font-size: 2em;
  line-height: 2em;
  color: #ffffff;
  width: 65%;
  margin-top: 3em;
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    font-size: 1.5em;
    line-height: 1.5em;
  }
`;

export const BodyFirstLayerSubtitle = styled.h5`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 1.7em;
  color: #ffffff;
  width: 50%;
  @media screen and (max-width: 1025px) {
    width: 60%;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    font-size: 1.1em;
    margin-bottom:1em;
    line-height:1.8em
  }
`;

export const LayerButton = styled.button`
  background: #239d48;
  border-radius: 4px;
  border: none;
  height: 3em;
  width: 15em;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  outline: none;
  transition: 0.5s background;
  cursor: pointer;
  &:hover {
    background: #239d48;
    opacity: 0.7;
  }
`;

export const LayerContainer = styled.section`
  height: fit-content;
  width: 100%;
  margin-top: 4em;
  //   background:red;
  //   position:absolute;
  //   margin-top:80vh;
`;

export const LayerFlexBox = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
  @media screen and (max-width: 769px) {
    width: 90%;
    display: block;
  }
`;

export const LayerNonFlexBox = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
  @media screen and (max-width: 769px) {
    width: 90%;
    display: block;
  }
`;

export const LayerFlexBoxBG = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(15, 2, 2, 0.69), rgba(15, 2, 2, 0.69)),
  url(${layerBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media screen and (max-width: 1025px) {
    width: 100%;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    display: block;
  }
`;

export const LayerFullFlexBox = styled.div`
  width: 100%;
 height:14em;
  background: linear-gradient(180deg, rgba(15, 2, 2, 0.69), rgba(15, 2, 2, 0.69)),
  url(${layerBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border:0.5px solid rgba(255,255,255,0);
`;

export const LayerFullFlexBox2 = styled.div`
  width: 100%;
 height:15em;
  background: linear-gradient(180deg, rgba(15, 2, 2, 0.69), rgba(15, 2, 2, 0.69)),
  url(${layerBg2});
  background-repeat: no-repeat;
  background-size: cover;
  position:absolute;
  // border:0.5px solid rgba(255,255,255,0);
`;

export const LayerFlexBoxLeft = styled.div`
  width: 50%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const LayerFlexBoxRight = styled.div`
  width: 50%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const LayerFlexBoxImg = styled.img`
  width: 90%;
  height: 100%;
  border-radius: 0.5em;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const LayerFlexBoxTitle = styled.h4`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #239d48;
  margin-bottom: -1em;
`;

export const LayerFlexBoxSubtitle = styled.h3`
  font-family: Mulish;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5em;
  line-height: 40px;
  color: #030f07;
  margin-bottom: -0.5em;
`;

export const LayerFlexBoxText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  line-height: 2em;
  color: #030f07;
  @media screen and (max-width: 769px) {
    display: flex;
    text-align: justify;
    line-height: 1.7em;
  }
`;

// export const LayerInner = styled.div``;

export const Layer3Card = styled.div`
  width: 32%;
  height: 25em;
  margin-top: 2em;
  border-radius: 0.5em;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  box-shadow: 3px 9px 16px 3px rgba(35, 157, 72, 0.05);
  border-radius: 10px;
  @media screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

export const Layer3CardText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 0.9em;
  line-height: 2em;
  color: #030f07;
  margin-left: 1.3em;
  margin-right: 1em;
  text-align: justify;
`;

export const Layer3CardTitle = styled.h3`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  color: #030f07;
  margin-left: 1em;
`;

export const Layer3CardImgBox = styled.div`
  margin-left: 1em;
  margin-top: 1em;
  background: rgba(35, 157, 72, 0.12);
  width: 4em;
  height: 4em;
  text-align: center;
  border-radius: 50px;
`;

export const Layer3CardImg = styled.img`margin-top: 0.8em;`;

export const Layer5Card = styled.div`
  width: 20%;
  height: fit-content;
  margin-top: 2em;
  text-align: center;
  border-radius: 0.5em;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0);
  box-sizing: border-box;
  border-radius: 10px;
  transition: 0.5s box-shadow;
  &:hover{
  border: 1px solid rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 769px) {
    width: 90%;
    margin-top:2em;
  border: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Layer4Card = styled.div`
  width: 25%;
  height: fit-content;
  margin-top: 2em;
  text-align: center;
  border-radius: 0.5em;
  // border: 1px solid rgba(0, 0, 0, 0);
  // box-sizing: border-box;
  border-radius: 10px;
  transition: 0.5s box-shadow;

  @media screen and (max-width: 769px) {
    width: 90%;
    margin-top:2em;
  border: 1px solid rgba(0, 0, 0, 0);
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Layer5CardCircle = styled.div`
  background: rgba(35, 157, 72, 0.12);
  width: 5em;
  height: 5em;
  text-align: center;
  border-radius: 50px;
  margin-top: 1.5em;
  border: 1px solid rgba(35, 157, 72, 0.12);
  margin-left: auto;
  margin-right: auto;
`;

export const Layer5CardCircleText = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: 800;
  font-size: 2.5em;
  color: #239d48;
  margin-top: 0.4em;
`;

export const Layer5CardText = styled.h6`
  margin-top: 0.5em;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  color: #030f07;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  line-height:2em;
  @media screen and (max-width: 769px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    line-height:2em;
  }
`;

export const LayerFullFlexBoxText = styled.h3`
margin-left:auto;
margin-right:auto;
margin-top:2em;
color:rgba(255,255,255,0.7);
width:60%;
line-height:2em;
font-family: Mulish;
font-style: normal;
font-weight: 600;
@media screen and (max-width:769px){
  width:90%;
  font-size:1em;
}
`;