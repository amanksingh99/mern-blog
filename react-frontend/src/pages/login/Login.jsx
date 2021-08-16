import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { useState } from "react";
export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <main className="Form container">
            <Card>
                <h1>Login</h1>
                <form>
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
                    <Button text="Submit" modifierClass="Button--teal" />
                </form>
            </Card>
        </main>
    );
}
