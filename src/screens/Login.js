import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    let navigate = useNavigate();

    const [creds, setcreds] = useState({
        email: "", password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: creds.email,
                password: creds.password
            })
        });
        const json = await response.json()
        if (!json.success) {
            alert('Enter Valid Credentials');
        }
        else {
            localStorage.setItem('authToken', json.authToken);
            console.log(localStorage.getItem('authToken'));
            navigate('/');
        }
    }

    const onChange = (event) => {
        setcreds({ ...creds, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <form style={{
                paddingTop: '120px',
                paddingLeft: '500px',
                paddingRight: '500px'
            }} onSubmit={handleSubmit}>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        name='email' value={creds.email}
                        onChange={onChange}></input>
                    <small id="emailHelp"
                        className="form-text text-muted"
                    >We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        name='password'
                        value={creds.password}
                        onChange={onChange}></input>
                </div>

                <button type="submit" className="btn m-3 btn-primary">Submit</button>
                <Link to='/signup'>
                    <button
                        type="submit"
                        className="btn m-3 btn-success">New User?</button>
                </Link>
            </form>
        </div>
    )
}
