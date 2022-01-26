import styled from 'styled-components'

// import LoginImagem from '../../assets/Login-imagem.svg'

import Background from '../../assets/background.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${Background});
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`

export const ContainerItems = styled.div`
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 70%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 10px;
    }

    form{
        display: flex;
        flex-direction: column;
    }

`

export const Image = styled.img`
    height: 70%;

`

export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    background: #FFFFFF;
    border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    padding-left: 10px;
    
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;  
    color: #FFFFFF;
    margin-top: ${props => (props.error ? '12px' : '28px')};
    margin-bottom: 5px;

`

export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-bottom: 10px;

    a{
        cursor: pointer;
        text-decoration: underline;
    }
`

export const Error = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #CC1717;
    margin-top: 2px;

`
