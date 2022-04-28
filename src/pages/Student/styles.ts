import styled from 'styled-components';
import { MediaQueries } from 'styles/mediaSettings';


export const Container = styled.div`
    width: 100%;
    display: flex;
      flex-direction: column;
      justify-content: center;

    > Form {
      display: flex;
      width: 350px;
      flex-direction: column;
      margin: 0 auto;

      > input{
        margin: 10px 0;
        height: 35px;
        padding-left: 10px;
        border-radius: 5px;
        border: 1px solid #dce0e6;
      }

      > button {
        width: 202px;
        height: 43px;
        border-radius: 10px;
        margin: 0 auto;
        border: 1px solid #dce0e6;
        background-color: #5C1B35;
        color: #fff;
        font-size: 18px;
        margin-top: 20px;
      }
    }
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
    margin-bottom: 40px;
`

export const BoxLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const SubTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
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