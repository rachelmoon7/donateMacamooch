import React, {useState} from 'react';
import { Button } from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    // const [auth, setAuth] = useState(false);
    // const credentials = {email: "test@gmail.com",
                        // password: "pass"}
    // const login = ({email}, {password}) => {

    //     if ({email}.email == credentials.email && {password}.password == credentials.password) {
    //             props.setAuth(true);
    //     } else {
    //         props.setAuth(false);
    //     }


    // }
    // let login = async ({email}, {password}) => {
    //     // e.preventDefault();
    //     try {
    //         let res = await fetch("/logiin", {
    //             method: "POST",
    //             body: JSON.stringify({
    //                 email: email,
    //                 password: password
    //             })
    //         });
    //         let resJson = await res.json();
    //         if (res.status === 200) {
    //             setEmail("");
    //             setPassword("");
    //             setMessage("Logged in successfully");
    //             console.log("message::", message)
    //         } else {
    //             setMessage("Some error occured");
    //         }
    //     } catch (err) {
    //         console.log("ERROR:", err.json);
    //     }
    // }
    let login = (e) => {
        // e.preventDefault();
        props.setAuth(true);
        try {
            fetch("http://localhost:8080/login", {
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setEmail(data.response[0].email)
                    setPassword(data.response[0].password);
                    setMessage("Logged in successfully");
                    console.log("message::", message)
                } else {
                    setMessage("log in again")
                }
            })
        } catch (err) {
            console.log("error loggin in:", err);
        }
    }
    return (
    <div>
        {/* <form> */}
            <div className="form-group mt-3">
                <label>Email</label>
                <input 
                    type = "email"
                    className="form-control mt-1"
                    placeholder="Enter email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input 
                    type = "password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
            <div>
                <Button color="danger"
                        type="submit" 
                        className="btn btn-primary"
                        onClick={() => {login({email}, {password})}}>
                    Submit
                </Button>
            </div>

            
        {/* </form> */}
    </div>
    )
}

export default Login;