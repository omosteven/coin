import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

import { HeaderBox, HeaderContainer, HeaderHideDesktop, HeaderItem, HeaderLeftSide, HeaderNavBar, HeaderRightSide, HeaderItemMobile, HeaderLogo } from '../../styles/home/HeaderStyle';

import HeaderImg from '../../images/home/co.in-logo.png';

const HomeHeader = () => {

    const [navbarState, setNavbarState] = useState(false);

    const toggleDropDown = () => {

        if (navbarState) {
            setNavbarState(false);
        } else {
            setNavbarState(true);
        }
    }

    return (
        <>
            <HeaderContainer>
                <HeaderBox>
                    <HeaderLeftSide>
                        <HeaderLogo src={HeaderImg} />
                    </HeaderLeftSide>

                    <HeaderRightSide>
                        <Link to='/' style={{ textDecoration: 'none' }}><HeaderItem>Home</HeaderItem></Link>
                        <Link to='/aboutus/' style={{ textDecoration: 'none' }}><HeaderItem>About Us</HeaderItem></Link>
                        <Link to='/services/' style={{ textDecoration: 'none' }}><HeaderItem>Services</HeaderItem></Link>
                        <Link to='/contactus/' style={{ textDecoration: 'none' }}><HeaderItem>Contact Us</HeaderItem></Link>
                    </HeaderRightSide>

                    <HeaderHideDesktop>
                        <MenuIcon onClick={toggleDropDown} style={{ cursor: 'pointer', fontSize: '2em' }} />
                    </HeaderHideDesktop>
                </HeaderBox>

                {navbarState && (
                    <HeaderNavBar>
                        <Link to='/' style={{ textDecoration: 'none' }}><HeaderItemMobile>Home</HeaderItemMobile></Link>
                        <Link to='/aboutus/' style={{ textDecoration: 'none' }}><HeaderItemMobile>About Us</HeaderItemMobile></Link>
                        <Link to='/services/' style={{ textDecoration: 'none' }}><HeaderItemMobile>Services</HeaderItemMobile></Link>
                        <Link to='/contactus/' style={{ textDecoration: 'none' }}><HeaderItemMobile>Contact Us</HeaderItemMobile></Link>
                    </HeaderNavBar>
                )}
            </HeaderContainer>
        </>
    )
};

export default HomeHeader;