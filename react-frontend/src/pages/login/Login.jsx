import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
export default function Login() {
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
                    />
                    {/* <br /> */}
                    <label htmlFor="Login__password">Password</label>
                    <br />
                    <input
                        id="Login__password"
                        type="password"
                        placeholder="enter your password"
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
