import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 5em;
  width: 100%;
  background: rgba(2, 3, 16, 0.7);
  margin: 0;
`;

export const HeaderBox = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  @media screen and (max-width: 1025px) {
    width: 90%;
  }
`;

export const HeaderLeftSide = styled.section`
  width: 70%;
  @media screen and (max-width: 1025px) {
    width: 60%;
  }
`;

export const HeaderRightSide = styled.section`
  display: flex;
  justify-content: space-between;
  width: 30%;
  @media screen and (max-width: 1025px) {
    width: 40%;
  }
`;

export const HeaderItem = styled.h5`
  margin-top: 2.5em;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const HeaderItemMobile = styled.h5`
  margin-top: 2.5em;
  color: #239d48;
  cursor: pointer;
`;

const AnimateNavBar = keyframes`
    0% {
        opacity: 0;
        background:#239D48;
        // height:5em;
    }
   
    100% {
        opacity: 1;
        // height:18em;
    }
`;

export const HeaderNavBar = styled.div`
  width: 100%;
  height: 14em;
  position: relative;
  background: rgba(255, 255, 255, 1);
  z-index: 10000;
  text-align: center;
  display: none;
  box-shadow: 0px 8px 10px rgba(84, 130, 247, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 768px) {
    display: block;
    animation-name: ${AnimateNavBar};
    animation-duration: 1s;
  }
`;

export const HeaderHideDesktop = styled.div`
  display: none;
  color: white;
  margin-top: 1em;
  margin-bottom: 1em;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;


export const HeaderLogo = styled.img`
width:5em;
margin-top:1em;
`;