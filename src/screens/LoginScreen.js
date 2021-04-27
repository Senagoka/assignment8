import { useState, useContext } from "react";
import {Button, Form } from "react-bootstrap";
import {UsersContext}  from "../contexts/UsersContext";


// const Loginscreen 
const Loginscreen = () => {
        
    
    const { loginUser } = useContext(UsersContext)

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    function handleSubmit(e) {
        e.preventDefault();
        const loginuser = {
            email,
            password
        };
        loginUser(loginuser);
    }

    return (
        <div
            style={{
                height: "80vh",
                width: "70%",
                display: "grid",
                gridTemplateColumns: "50%",
                justifyContent: "center",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "grid",
                    justifyContent: "center",
                    alignItems: "center",
                    gridTemplateColumns: "1fr",
                    gridGap: "20",
                    padding: "20px",
                    border: "1px solid white",
                }}
            >
                <h1 className="text-center">LOG IN</h1>
                <Form.Control
                    placholder="enter email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Control
                    placholder="enter password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">LOG IN</Button>
            </form>
        </div>
    );
};

export default Loginscreen;
