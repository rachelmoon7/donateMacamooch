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