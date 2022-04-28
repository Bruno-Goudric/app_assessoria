import styled from 'styled-components';
import background from "../../assets/background.png";
import { MediaQueries } from 'styles/mediaSettings';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    @media ${MediaQueries.SMALL} {
    width: 100%;
    height: 450px;
    }   
    
  }
`;