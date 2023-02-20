import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import About from '../components/About.jsx';
import Mission from '../components/Mission.jsx';
import Donate from '../components/Donate.jsx';
import CreateAccount from '../components/CreateAccount.jsx';
import Login from '../components/Login.jsx';
import MyDonations from '../components/MyDonations.jsx';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
    const [auth, setAuth] = useState(false);
    const [createAcctButton, setCreateAcctButton] = useState(false);

    let handleClick = () => {
        console.log("createAcctButton before", createAcctButton)

        setCreateAcctButton(true);
        console.log("createAcctButton after", createAcctButton)
    }
    return (
//         <Routes >
//             // <Route>
//             <>
//             {/* <Navigation /> */}
           
//             <Navbar bg="light" variant="dark">
//                 {/* <Container> */}
//                 <Nav.Link href="/">Home</Nav.Link>
//   <Nav.Link href="/about">About</Nav.Link>
//                 <Navbar.Brand>
//                     <About />
//                 </Navbar.Brand>
//                 <Navbar.Brand>
//                     <Mission />     
//                 </Navbar.Brand>
//                 <Navbar.Brand>        
//                     {auth ? (
//                         <MyDonations />
//                     ) : (
//                         [   
//                             <Login setAuth={setAuth}
//                                     setCreateAcctButton={setCreateAcctButton}/>
//                         ]
                    
//                     )}
//                 </Navbar.Brand>       
//                     {createAcctButton ? (
//                         <CreateAccount />
//                     ) : (
//                         <button onClick={handleClick} >Create Account </button>
//                     )}
//                 {/* </Container> */}
//             </Navbar>
//             </>
//             // </Route> 
//         // </Routes>
    // <div>
    //   <Navbar bg="light" expand="lg">
    //     <Navbar.Brand href="/">My Website</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="mr-auto">
    //         <NavItem>
    //           <Nav.Link href="/">About</Nav.Link>
    //         </NavItem>
    //         <NavItem>
    //           <Nav.Link href="/mission">Mission</Nav.Link>
    //         </NavItem>
    //         <NavItem>
    //           <Nav.Link href="/donate">Donate</Nav.Link>
    //         </NavItem>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Navbar>
    //   <div className="container mt-5">
    //     <Switch>
    //       <Route exact path="/" component={About} />
    //       <Route path="/mission" component={Mission} />
    //       <Route path="/donate" component={Donate} />
    //     </Switch>
    //   </div>
    // </div>
//     <Navbar>
//     <Routes>
//   <Route path="/about" element={<About />} />
//   <Route path="/mission" element={<Mission />} />
//   <Route path="/donate" element={<Donate />} />
// </Routes>
// </Navbar>
        <div>
      <Navbar >
        {/* <Collapse isOpen={isOpen} navbar> */}
          <Nav className="justify-content-center">
            <NavItem>
              <NavLink href="#about" to ="/about"><About /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#mission" to ="/mission"><Mission /></NavLink>
            </NavItem>
            <NavItem>
                {auth ? (
                            <MyDonations />
                        ) : (
                            [   
                                <Login setAuth={setAuth}
                                        setCreateAcctButton={setCreateAcctButton}/>
                            ])
                            
                }
            </NavItem>
            <NavItem>
            {createAcctButton ? (
                        <CreateAccount setCreateAcctButton={setCreateAcctButton}
                        />
                    ) : (
                        <button onClick={handleClick} >Create Account </button>
                    )}
            </NavItem>

          </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
    )
}

export default Header;