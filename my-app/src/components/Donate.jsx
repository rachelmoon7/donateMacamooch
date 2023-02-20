import React, {useState} from 'react';

const Donate = (props) => {
    const [contributor, setContributor] = useState("");
    const [email, setEmail] = useState("");
    const [donationAmount, setDonationAmount] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");

    let handlePaymentMethod = (e) => {
        setPaymentMethod(e.target.value);
    }

    let donate = async ({contributor}, {email}, {donationAmount}, {paymentMethod} ) => {
        // e.preventDefault();
        props.setShowDonateButton(false);
        try {
            let res = await fetch("/donate", {
                method: "POST",
                body: JSON.stringify({
                    contributor: contributor,
                    email: email,
                    donationAmount: donationAmount,
                    paymentMethod: paymentMethod
                })
            });
            let resJson = await res.json();
            if (res.status === 200) {
                
                setMessage("Logged in successfully");
                console.log("message::", message)
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log("ERROR:", err.json);
        }
    }

    return (
        <div>
            <li>
                <label>
                    Who is the contributor?
                </label>
                <input
                    type="contributor"
                    placeholder="i.e. John Doe or Anonymous"
                    onChange={(e)=>{setContributor(e.target.value)}}>
                </input>
            </li>

            <li>
                <label>
                    What is your email?
                </label>
                <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e)=>{setEmail(e.target.value)}}>
                </input>   
            </li>

            <li>
                <label>
                    Amount of Donation:
                </label>
                <input
                    type="donation amount"
                    placeholder="Enter amount of donation"
                    onChange={(e)=>{setDonationAmount(e.target.value)}}>
                </input>
            </li>
            <li>
                <label>
                    Payment Method:
                </label>
                <select onChange={handlePaymentMethod}>
                    <option value="paypal">Paypal</option>
                    <option value="card">CC/Debit Card</option>
                    <option value="ach">ACH</option>
                </select>
            </li>
            
            <button onClick={donate}>Submit Donation </button>
                
            
        </div>
    )
}

export default Donate;