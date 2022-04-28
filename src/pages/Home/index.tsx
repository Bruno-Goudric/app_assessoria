import Layout from "../../components/Layout";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";


import { 
    Logo, 
    Title,
    ButtonLogin,
    Footer
  } from './styles'
import { useState } from "react";

function Home() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const  navigate = useNavigate();
    const handleSubmit = () => {
      if(userEmail === 'professor@teste.com.br' && userPassword === '1234'){
        navigate(`/admin`);
      }else{
        navigate('/home')
      }
    }
    return (
      <Layout>
        <Logo src={logo} />
        <Title>Cruz Atletismo - Assessoria de Corrida</Title>

        <Stack
          component="form"
          sx={{
            width: '30ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="login"
            label="E-mail"
            type="email"
            size="medium"
            name="email"
            onChange={e => setUserEmail(e.target.value)}         
          />
          <TextField
            id="password"
            label="Senha"
            type="password" 
            size="medium"
            name="password"
            onChange={e => setUserPassword(e.target.value)}                 
          />
        </Stack>
        
        
        <ButtonLogin variant="contained" color="success" onClick={handleSubmit} style={{ marginTop: '48px'}}>Entrar</ButtonLogin>
        <Footer>Copyright © 2022 Feito por Ferreira Soluções</Footer>        
      </Layout>
    );
  }
  
  export default Home;