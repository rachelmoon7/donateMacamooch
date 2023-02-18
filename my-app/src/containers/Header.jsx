import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Mission from '../components/Mission.jsx';
import Login from '../components/Login.jsx';
import MyDonations from '../components/MyDonations.jsx';


const Header = () => {
    const [auth, setAuth] = useState(false);

    return (
        // <Routes >
            // <Route>
            <>
                <About />
                <Mission />
                {/* <Login setAuth={setAuth}/> */}
                
                {auth ? (
                    <MyDonations />
                 ) : (
                    <Login setAuth={setAuth}/>
                
                 )}
            {/* <SignUpAccount /> */}
            {/* // <MyDonations />  */} 
            </>
            // </Route> 
        // </Routes>
    )
}

export default Header;