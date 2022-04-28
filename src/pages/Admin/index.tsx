
import { useNavigate } from "react-router-dom";


import { Container, Logo, Title, BoxLogo, Menu, BoxMenu, Footer } from './styles';
import Layout from 'components/Layout';
import logo from '../../assets/logo.png';
import People from 'assets/people.png';
import Training from 'assets/training.png';
import Events from 'assets/events.png';
import Alunos from 'assets/alunos.png';

function Admin() {
    const  navigate = useNavigate();

    const nav = (dado: string) => {
        console.log('aQUI')
        navigate(`/${dado}`)
    }

    const teste = () => {
        console.log('teste')
    }
    return (
        <Layout>
            <Container>
                <BoxLogo>
                    <Logo src={logo} />
                    <Title>Cruz Atletismo - Assessoria de Corrida</Title>
                </BoxLogo>

                <Menu>
                    <BoxMenu>
                        <div onClick={() => {nav('people')}}>
                            <img src={People} alt="" />
                            <p>Cadastrar Aluno</p>
                        </div>
                        <div onClick={() => {nav('training')}}>
                            <img src={Training} alt="" />
                            <p>Criar Treino</p>
                        </div>
                    </BoxMenu>
                    <BoxMenu>
                        <div onClick={() => {nav('events')}}>
                            <img src={Events} alt="" />
                            <p>Eventos</p>
                        </div>
                        <div onClick={() => {nav('alunos')}}>
                            <img src={Alunos} alt="" />
                            <p>Alunos</p>
                        </div>
                    </BoxMenu>                    
                </Menu>

                <Footer>Copyright © 2022 Feito por Ferreira Soluções</Footer>   
            </Container>
        </Layout>
    )
}

export default Admin;