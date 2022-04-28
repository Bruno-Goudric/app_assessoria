import styled from 'styled-components';
import { MediaQueries } from 'styles/mediaSettings';


export const Container = styled.div`
    width: 100%;
`

export const Logo = styled.img`
    width: 210px;
    height: 206px;

  @media ${MediaQueries.SMALL} {
    width: 150px;
    height: 150px; 
    margin-top: 300px;
  }

  @media ${MediaQueries.MEDIUM} {
    width: 210px;
    height: 206px;
  }

  @media ${MediaQueries.LARGE} {
    width: 210px;
    height: 206px;
  }

  @media ${MediaQueries.XLARGE} {
    width: 210px;
    height: 206px;
  }
`

export const Title = styled.h1`
    font-size: 18px;
    text-align: center;
    margin-bottom: 48px;
`

export const BoxLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const BoxMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > div{
        width: 120px;
        height: 110px;
        text-align: center;
        background-color: #C4E1F1;
        margin: 10px;
        border-radius: 15px;
        box-shadow: 5px 5px 15px -4px #000000;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;

        > img {
            margin-bottom: 5px;
        }
    }

    
`

export const Footer = styled.footer`
    background: #000;
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    color: #fff;  
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`