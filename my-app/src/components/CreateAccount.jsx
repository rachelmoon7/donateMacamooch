import React, {useState} from 'react';


const CreateAccount = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch("http://localhost:8080/signup", {
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            .then((response) => response.json())
            // .then((data) => console.log("datta:", data))
            .then((data) => {
                console.log('this is the api response', data.response[0].name)
                if (data) {
                    setName(data.response[0].name);
                    setEmail(data.response[0].email);
                    setPassword(data.response[0].password);
                    setMessage("Created account successfully");
                    console.log("message::", message);
                    props.setCreateAcctButton(false);
                } else {
                    setMessage("Some error occured");
                    
                }
            })            
        } catch (err) {
            console.log("ERROR!!:", err);
        }
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
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
                <input
                    type="text"
                    value={password}
                    placeholder="Enter password"
                    onChange={( (e) => setPassword(e.target.value))} 
                /> 
                <button type="submit" onClick={handleSubmit}>Create</button>
                <div className="message">
                    {message ? <p> {message} </p> 
                    : null
                    }
                </div>
            {/* </form> */}
        </>
    )
}

export default CreateAccount;