import React, { useState } from "react";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";
export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError(err);
            setTimeout(() => setError(false), 3000);
            console.log(err);
        }
    };
    return (
        <main className="Form container">
            <Card>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Register__username">Username</label>
                    <br />
                    <input
                        id="Register__username"
                        type="text"
                        placeholder="enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.trim())}
                    />

                    <label htmlFor="Register__email">Email</label>
                    <br />
                    <input
                        id="Register__email"
                        type="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="Register__password">Password</label>
                    <br />
                    <input
                        id="Register__password"
                        type="password"
                        placeholder="enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <br /> */}
                    <small>
                        Already have an Account ?{" "}
                        <Link to="/login">Sign In</Link>
                    </small>
                    <Button text="Submit" modifierClass="Button--teal" />
                    <span style={{ color: "red" }}>
                        {error && "Something went wrong"}
                    </span>
                </form>
            </Card>
        </main>
    );
}
