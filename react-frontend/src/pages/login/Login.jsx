import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import axiosInstance from "../../config";

import { useHistory } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { user, dispatch, isFetching } = useContext(Context);
    const history = useHistory();
    useEffect(() => {
        if (user) {
            history.push("/");
        }
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.length === 0 || password.length === 0) {
            return;
        }
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axiosInstance.post("/auth/login", {
                username,
                password,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setError(true);
            setTimeout(() => setError(false), 3000);
        }
    };
    // console.log(user);
    return (
        <main className="Form container">
            <Card>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Login__username">Username</label>
                    <br />
                    <input
                        id="Login__username"
                        type="text"
                        placeholder="enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value.trim())}
                    />
                    {/* <br /> */}
                    <label htmlFor="Login__password">Password</label>
                    <br />
                    <input
                        id="Login__password"
                        type="password"
                        placeholder="enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <br /> */}
                    <small>
                        Don't have an Account ?{" "}
                        <Link to="/register">Sign Up</Link>
                    </small>
                    <Button
                        text="Submit"
                        modifierClass="Button--teal"
                        disabled={isFetching}
                    />
                </form>
                {error && (
                    <span style={{ color: "red" }}>
                        Something went wrong! Try Again
                    </span>
                )}
            </Card>
        </main>
    );
}
