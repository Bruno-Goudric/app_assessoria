import { Container } from './styles'

interface LayoutProps {
    children: React.ReactNode;
}


function Layout(props: LayoutProps) {
    return (
      <Container>
          {props.children}
      </Container>
    );
  }
  
  export default Layout;