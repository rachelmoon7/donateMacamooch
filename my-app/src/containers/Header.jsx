import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '../components/About.jsx';
import Mission from '../components/Mission.jsx';


const Header = () => {
    return (
        // <Routes >
            // <Route>
            <>
                <About />
                <Mission />
            {/* <Login />
            <SignUpAccount />
            // <MyDonations />  */}
            </>
            // </Route> 
        // </Routes>
    )
}

export default Header;