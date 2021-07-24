import React from 'react';
import styled from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 8rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
    }

    h1 {
        margin-bottom: 5rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        
        @media screen and (max-width: 768px) {
            margin-bottom: 3rem;
            text-align: center;
        }
    }
`;

const Container =  styled.div`
    padding: 3rem calc((100wv - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 600px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 500px;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 1rem;

    @media screen and (max-width: 768px) {
        padding-right: 0;
    }
    
    p {
        font-size: 1.3rem;
        font-weight: 500;
    }
`;

const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-end;
    padding-left: 1rem;

    @media screen and (max-width: 768px) {
        padding-left: 0;
    }
    
    p {
        font-size: 1.3rem;
        font-weight: 500;
        //margin-bottom: 1rem;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 350px;
    margin-bottom: 1.5rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Button = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
    display: flex;
    align-items: center;
    color: #000d1a;
    padding: 1rem 1rem 1rem 0; 

    &:hover {
        transform: translateX(1rem);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: .5rem;
`;

const InfoHomes = ({ heading, heading2, buttonLabel, buttonLabel2, img1, img2 }) => {
    return (
        <Section>
            <h1>View our newest Homes</h1>
            <Container>
                <ColumnLeft>
                    <ImageContainer>
                        <img src={img1} alt="Home" />
                    </ImageContainer>
                    <p>{heading}</p>
                    <Button to='homes' primary='false' big='false'>
                        {buttonLabel}
                        <Arrow />    
                    </Button>
                </ColumnLeft>
                <ColumnRight>
                    <ImageContainer>
                        <img src={img2} alt="Home" />
                    </ImageContainer>
                    <p>{heading2}</p>
                    <Button>
                        {buttonLabel2}
                        <Arrow />
                    </Button>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoHomes
