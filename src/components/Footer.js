import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Button } from './Button';


const Section = styled.div`
    background-color: #000d1a;
    width: 100%;
    padding: 8rem 7rem;

    @media screen and (max-width: 760px) {
        padding: 4rem 3rem;
    }
`;

const Contact = styled.div`
    display: flex;
    color: #fff;
    justify-content: space-between;
    margin-bottom: 4.5rem;

    @media screen and (max-width: 760px) {
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 4.5rem;
        width: 65%;

        @media screen and (max-width: 760px) {
            font-size: 2rem;
            width: 100%;
            text-align: center;
            margin-bottom: 2rem;
        }
    }
`;

const ContactList = styled.div`
    display: flex;
`;

const ContactListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 19px;

    &:last-child {
        margin-left: 4rem;

        @media screen and (max-width: 760px) {
            margin-left: 6rem;
        }
    }

    @media screen and (max-width: 760px) {
        font-size: 17px;
    }

    h4 {
        margin: .5rem 0;
        padding-top: .5rem;
        font-weight: 600;
    }

`;

const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin: .5rem 0;

    &:hover {
        color: #cd853f;
    }
`;

const Socials = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 760px) {
        padding: 0 10%;
    }
`;

const SocialIcons = styled.div`

`;

const SocialIconLink = styled.a`
    font-size: 30px;
    color: #cd853f;
    margin-right: 1rem;

    @media screen and (max-width: 760px) {
        font-size: 25px;
        margin-right: 1rem;
    }
`;

const ChatButton = styled.div`

`;

const Footer = () => {
    return (
        <Section>
            <Contact>
                <h1>Let's find your Dream Home</h1>
                <ContactList>
                    <ContactListWrapper>
                        <h4>Contact Us</h4>
                        <FooterLink to='/'>FAQ</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        <FooterLink to='/'>Questions</FooterLink>
                    </ContactListWrapper>
                    <ContactListWrapper>
                        <h4>Offices</h4>
                        <FooterLink to='/'>Nigeria</FooterLink>
                        <FooterLink to='/'>Europe</FooterLink>
                        <FooterLink to='/'>United States</FooterLink>
                    </ContactListWrapper>
                </ContactList>
            </Contact>
            <Socials>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
                <ChatButton>
                    <Button>Let's Chat</Button>
                </ChatButton>
            </Socials>
        </Section>
    )
}

export default Footer
