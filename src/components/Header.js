import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Altera assignment</Navbar.Brand>
          <DarkModeSwitch/>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
