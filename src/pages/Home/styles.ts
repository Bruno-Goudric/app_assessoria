import styled from 'styled-components'
import { MediaQueries } from 'styles/mediaSettings';
import Button from '@mui/material/Button';

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

export const ButtonLogin = styled(Button)`
    width: 258px;
    height: 35px;
    border-radius: 10px;
    
    background-color: #C33333;
    color: #fff;
    
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