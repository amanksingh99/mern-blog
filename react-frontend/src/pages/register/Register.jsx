import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import axiosInstance from "../../config";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/Context";
export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const { user } = useContext(Context);
    const history = useHistory();
    useEffect(() => {
        if (user) {
            history.push("/");
        }
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        if (
            email.length === 0 ||
            username.length === 0 ||
            password.length === 0
        ) {
            setError("All fields are required! Please fill properly.");
            setTimeout(() => setError(false), 3000);
            return;
        }
        try {
            const res = await axiosInstance.post("/auth/register", {
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        } catch (err) {
            setError("Something went wrong!");
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
                </form>
                <span style={{ color: "red" }}>{error}</span>
            </Card>
        </main>
    );
}
