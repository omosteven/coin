import styled from 'styled-components';

import layerFirstBg from '../../images/home/Rectangle-95-4.png';
import About3Img1 from '../../images/home/Rectangle99.png';
import About3Img2 from '../../images/home/Rectangle99-5.png';
import About3Img3 from '../../images/home/Rectangle99-4.png';

export const PageContainer = styled.div`width: 100%;`;

export const PageFirstLayer = styled.section`
  height: 40vh;
  width: 100%;
  background: rgba(2, 3, 16, 0.7);
  background: linear-gradient(180deg, rgba(2, 3, 16, 0.3), rgba(2, 3, 16, 0.5)),
    url(${layerFirstBg});
  margin-top: -5em;
  background-size: cover;
  display: block;
  // position:absolute;
  // border: 1px solid rgba(2, 3, 16, 0);
`;

export const PageFirstLayerInner = styled.div`
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

export const PageFirstLayerText = styled.h3`
  margin-top: 16vh;
  font-family: Mulish;
  font-style: normal;
  font-weight: bolder;
  font-size: 2em;
  line-height: 60px;
  color: #ffffff;
  text-align: center;
`;

export const Layer3DarkCard = styled.div`
  width: 32%;
  height: 15em;
  margin-top: 2em;
  border-radius: 0.5em;
  background: linear-gradient(180deg, rgba(2, 3, 16, 0.3), rgba(2, 3, 16, 0.5)),
    url(${About3Img1});
  box-sizing: border-box;
  border:1px solid rgba(35, 157, 72, 0.05);
  box-shadow: 3px 9px 16px 3px rgba(35, 157, 72, 0.05);
  border-radius: 10px;
  @media screen and (max-width: 769px) {
    width: 100%;
    // margin-bottom: 2em;
  }
`;

export const Layer3DarkCard2 = styled.div`
  width: 32%;
  height: 15em;
  margin-top: 2em;
  border-radius: 0.5em;
  background: linear-gradient(180deg, rgba(2, 3, 16, 0.3), rgba(2, 3, 16, 0.5)),
    url(${About3Img2});
  box-sizing: border-box;
  border:1px solid rgba(35, 157, 72, 0.05);
  box-shadow: 3px 9px 16px 3px rgba(35, 157, 72, 0.05);
  border-radius: 10px;
  @media screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

export const Layer3DarkCard3 = styled.div`
  width: 32%;
  height: 15em;
  margin-top: 2em;
  border-radius: 0.5em;
  background: linear-gradient(180deg, rgba(2, 3, 16, 0.3), rgba(2, 3, 16, 0.5)),
    url(${About3Img3});
  box-sizing: border-box;
  border:1px solid rgba(35, 157, 72, 0.05);
  box-shadow: 3px 9px 16px 3px rgba(35, 157, 72, 0.05);
  border-radius: 10px;
  @media screen and (max-width: 769px) {
    width: 100%;
    margin-bottom: 2em;
  }
`;

export const Layer3DarkCardText = styled.h3`
  margin-left: 1em;
  margin-top: 10em;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 40px;
  color: #ffffff;
`;
