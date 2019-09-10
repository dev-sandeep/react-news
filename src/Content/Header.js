import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import AppContext from '../Context/AppContext'

class Header extends React.Component {
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <AppContext.Consumer>
                            {(context) =>
                                <Nav.Link ><a onClick={context.setUSNews}>Refresh</a></Nav.Link>}
                        </AppContext.Consumer>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>



        );
    }
}
export default Header;