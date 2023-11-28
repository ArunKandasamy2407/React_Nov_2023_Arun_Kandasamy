import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
function NavScrollExample() {
  function opennav(){
    document.getElementById("sbar").style.width="250px";
  }
  function closenav(){
    document.getElementById("sbar").style.width="0";
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <button style={{backgroundColor:'#F5F7F8',width:'40px',border:'none'}} onClick={opennav}>☰</button>
        <div id="sbar" className='sidebar'>
                  <button style={{backgroundColor:'#ececec',border:'none'}}><a style={{marginLeft:'180px'}} onClick={closenav}>&times;</a></button><br/>
                  <ul >
                  <li><a>About</a><br/></li>
                  <li><a>Doctors</a><br/></li>
                  <li><a>Medicals</a><br/></li>
                  <li><a>Clients</a><br/></li>
                  <li><a>Contact</a></li>
                  </ul>
        </div>
        <Navbar.Brand href="#"><span style={{color:'red'}}><b style={{marginLeft:'5px'}}> Medilab</b></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
            <Nav.Link href="#action1" className='dropdown1' >Health Store
            <div className='dropdown-content'>
              <div className='dropdownflex'>
                        <div className='innerdiv'>
                                    <p><b>Personal Care</b></p><br/>
                                    <p>Skin Care</p><br/>
                                    <p>Oral Care</p><br/>
                                    <p>Adult Diapers</p><br/>
                                    <p>Sanitary Pads</p><br/>
                                    <p>Sexual Wellness</p><br/>
                                    <p>Mens Grooming</p><br/>
                        </div>
              </div>         
            </div>
            </Nav.Link>
            <NavDropdown title="Doctors" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Location</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Location" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Location</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              Offers
            </Nav.Link>
          </Nav>
          <Form className="d-flex" >
            <Form.Control
            style={{marginTop:'5px'}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{marginRight:'10px'}} variant="outline-success">Search</Button>
          <Button style={{marginRight:'10px',backgroundColor:'#F5F7F8',color:'black',border:'0px'}}  href='/reg'>Register</Button>
          {/* <Button style={{marginRight:'10px',backgroundColor:'#F5F7F8',color:'black',border:'0px'}}  href='/Login'>Login </Button> */}
          
            <button  style={{border:'none',backgroundColor:'#F5F7F8'}}><NotificationsIcon style={{marginTop:'6px'}}/></button>
            <button style={{border:'none',backgroundColor:'#F5F7F8'}}><ShoppingCartIcon style={{marginLeft:'8px',marginTop:'6px'}}/></button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;