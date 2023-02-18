import React, {useState} from 'react';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [auth, setAuth] = useState(false);
    const credentials = {email: "test@gmail.com",
                        password: "pass"}
    const login = ({email}, {password}) => {

        console.log("e", {email})
        console.log("p", {password})

        if ({email}.email == credentials.email && {password}.password == credentials.password) {
                props.setAuth(true);
        } else {
            props.setAuth(false);
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
                <button type="submit" 
                        className="btn btn-primary"
                        onClick={() => {login({email}, {password})}}>
                    Submit
                </button>
            </div>

            
        {/* </form> */}
    </div>
    )
}

export default Login;