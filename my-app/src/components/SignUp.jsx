import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("/signUp", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                })
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setMessage("Signed up for newsletters successfully");
                console.log("message::", message)
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log("ERROR:", err);
        }
    }
    return (
        <>
            <div>
                SignUp for newsletter! 
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter Name"
                    onChange={( (e) => setName(e.target.value))} 
                />
                <input
                    type="text"
                    value={email}
                    placeholder="Enter email"
                    onChange={( (e) => setEmail(e.target.value))} 
                /> 
                <button type="submit">Create</button>
                <div className="message">
                    {message ? <p> {message} </p> 
                    : null
                    }
                </div>
            </form>
        </>
    )
}

export default SignUp;