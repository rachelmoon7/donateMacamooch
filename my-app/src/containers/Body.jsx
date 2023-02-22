import React, {useState} from 'react';

import SignUp from '../components/SignUp.jsx';
import Donate from '../components/Donate.jsx';


const Body = () => {
    const [showDonateButton, setShowDonateButton] = useState(false); 

    let handleClick = () => {
        setShowDonateButton(true);
    }
    return (
        <div>
            <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    <h2>Add user</h2>
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                </div>
            </div>
        </div>
            <SignUp />
            {showDonateButton ? (
            <Donate 
                setShowDonateButton={setShowDonateButton}
            /> ) : (
                <button onClick={handleClick} >Donate Now!</button>
            )}
        </div>
    )
}

export default Body;