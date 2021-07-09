import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.div`
    background-color: #000d1a;
    width: 100%;
    padding: 5.5rem 6rem;
`;

const Contact = styled.div`
    display: flex;
    color: #fff;
    justify-content: space-between;

    h1 {
        font-size: 4.5rem;
        margin-right: 6rem;
    }
`;

const ContactList = styled.div`
    display: flex;
`;

const ContactListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4rem;

    h4 {
        margin: .5rem 0;
        font-weight: 500;
    }

`;

const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin: .5rem 0;
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
        </Section>
    )
}

export default Footer
