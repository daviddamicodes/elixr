import React from 'react';
import styled from 'styled-components';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

const Section = styled.section`
    width: 100%;
    height: 800px;
    //padding: 4rem 8rem;
    background-color: #000d1a;
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        //padding: 4rem 2rem;
    }
`;

const ContainerWrapper = styled.div`
    background-color: #fff;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    padding: 0 5rem;
`;

const Container =  styled.div`
    padding: 3rem calc((100wv - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    //grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 3rem 2rem;
        grid-template-rows: 400px;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 760px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 780px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const ImageWraapper = styled.div`
    height: 600px;
    width: 100%;
`;

const Button = styled(Link)`
    background: #cd853f;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
    color: #000d1a;
    font-size: 14px;

    &:hover {
        transform: translateY(-2px);
    }
`;

const InfoInterior = ({ heading, paragraphOne, paragraphTwo,
    buttonLabel, reverse, image }) => {
        return (
            <Section>
                <ContainerWrapper>
                    <Container>
                        <ColumnLeft>
                            <h1>{heading}</h1>
                            <p>{paragraphOne}</p>
                            <p>{paragraphTwo}</p>
                            <Button to='/homes' primary={false}>{buttonLabel}</Button>
                        </ColumnLeft>
                        <ColumnRight reverse={reverse}>
                            <ImageWraapper>
                                <img src={image} alt='home' />
                            </ImageWraapper>
                        </ColumnRight>
                    </Container>
                </ContainerWrapper>
            </Section>
        )
}

export default InfoInterior
