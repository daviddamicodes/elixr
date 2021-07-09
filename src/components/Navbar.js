import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
//import { FaBars } from 'react-icons/fa';
 
const Nav = styled.nav`
    height: 60px;
    display: flex;
    background-color: ${({scrollNav}) => (scrollNav ? '#cd853f' : 'transparent')};
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    height: 100%auto;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled.div`
    display: none;
    

    @media screen and (max-width: 768px) {
        display: block;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
    }
`;

const MenuBurger = styled.div`
    height: 2px;
    width: 25px;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;

    &::before, &::after {
        content: '';
        height: 2px;
        width: 17px;
        background-color: #fff;
        position: absolute;
    }

    &::before {
        transform: translateY(-8px);
    }

    &::after {
        transform: translateY(8px);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY > 20) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <Nav scrollNav={scrollNav}>
            <Logo to='/'>ELIXR</Logo>
            <MenuBars onClick={toggle}>
                <MenuBurger />
            </MenuBars>
            <NavMenu>
                {
                    menuData.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))
                }
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
