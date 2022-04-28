import React, { useRef  } from 'react'
import { Form } from '@unform/web'
import Layout from 'components/Layout';
import Input from 'components/Input';
import logo from '../../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { 
    Container, 
    Logo, 
    Title, 
    BoxLogo, 
    Footer,
    SubTitle
} from './styles';

const Student = () => {
    const formRef = useRef();

    const handleFormSubmit = (data: any) => {
        if(data){
            toast.success('Aluno Cadastrado com sucesso')
        }
    }
    return (
        <Layout>
            <Container>
                <ToastContainer />
                <BoxLogo>
                    <Logo src={logo} />
                    <Title>Cruz Atletismo - Assessoria de Corrida</Title>
                </BoxLogo>
                <SubTitle>Cadastrar Aluno</SubTitle>
                <Form onSubmit={handleFormSubmit}>
                    <Input name="nome" type="text" placeholder="Nome" />
                    <Input name="nickname" type="text" placeholder="Apelido"  />
                    <Input name="email" type="email" placeholder="E-mail"  />
                    <Input name="celphone" type="text" placeholder="Celular"  />
                    <Input name="birthday" type="date"  placeholder=""/>
                    <Input name="password" type="password" placeholder="Senha" />

                    <button type="submit">Cadastrar Aluno</button>
                </Form>
                
                
                <Footer>Copyright © 2022 Feito por Ferreira Soluções</Footer>   
            </Container>
        </Layout>
    )
}

export default Student
