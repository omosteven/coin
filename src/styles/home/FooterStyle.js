import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: rgba(61, 70, 64, 0.77);
  height: fit-content;
  width: 100%;
  @media screen and (max-width: 769px) {
    height: 115vh;
  }
`;

export const FooterEachCard = styled.div`
  width: 20%;
  margin-top: 1em;
  @media screen and (max-width: 769px) {
    width: 90%;
    margin-top: 1em;
  }
`;

export const FooterLogo = styled.img`
  width: 5em;
  margin-top: 2em;
`;

export const FooterCardTitle = styled.h3`
  font-family: Mulish;
  font-style: normal;
  font-weight: bolder;
  font-size: 1.2em;
  line-height: 25px;
  color: #ffffff;
`;

export const FooterCardText = styled.h5`
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.5em;
  color: #ffffff;
`;

export const FooterInput = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.63);
  box-sizing: border-box;
  border-radius: 25px;
  height: 3em;
  width: 95%;
  display: inline-block;
  outline: none;
  background: transparent;
  color: white;
  &::-webkit-input-placeholder {
    color: white;
  }
`;

export const FooterBtnBox = styled.div`
  margin-top: -2.5em;
  margin-left: 85%;
`;

export const FooterBtn = styled.button`
  height: 3em;
  width: 5em;
  display: inline-block;
  margin-left: -1em;
  background: red;
  border: none;
  border-radius: 25px;
  outline: none;
  background: #239d48;
  color: white;
`;
