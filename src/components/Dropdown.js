import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: 0.3s ease-in-out;
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CloseIcon = styled.div`
    width: 25px;
    height: 2px;
    background-color: #000d1a;
    position: relative;
    transform: rotate(45deg);

    &::after {
        content: '';
        width: 25px;
        height: 2px;
        background-color: #000d1a;
        position: absolute;
        transform: rotate(-90deg);
    }
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`;
const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {
                        menuData.map((item, index) => (
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>
                        ))
                    }
                </DropdownMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big='true' to='/contact'>
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown;
