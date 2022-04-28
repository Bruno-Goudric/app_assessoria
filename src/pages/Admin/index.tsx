
import { Container, Logo, Title, BoxLogo, Menu, BoxMenu, Footer } from './styles';
import Layout from 'components/Layout';
import logo from '../../assets/logo.png';
import people from 'assets/people.png';
import training from 'assets/training.png';
import events from 'assets/events.png';
import alunos from 'assets/alunos.png';

function Admin() {
    return (
        <Layout>
            <Container>
                <BoxLogo>
                    <Logo src={logo} />
                    <Title>Cruz Atletismo - Assessoria de Corrida</Title>
                </BoxLogo>

                <Menu>
                    <BoxMenu>
                        <div>
                            <img src={people} alt="" />
                            <p>Cadastrar Aluno</p>
                        </div>
                        <div>
                            <img src={training} alt="" />
                            <p>Criar Treino</p>
                        </div>
                    </BoxMenu>
                    <BoxMenu>
                        <div>
                            <img src={events} alt="" />
                            <p>Eventos</p>
                        </div>
                        <div>
                            <img src={alunos} alt="" />
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