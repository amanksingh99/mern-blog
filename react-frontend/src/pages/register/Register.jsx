import React from "react";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
export default function Register() {
    return (
        <main className="Form container">
            <Card>
                <h1>Register</h1>
                <form>
                    <label htmlFor="Login__username">Username</label>
                    <br />
                    <input
                        id="Login__username"
                        type="text"
                        placeholder="enter your username"
                    />

                    <label htmlFor="Login__email">Email</label>
                    <br />
                    <input
                        id="Login__email"
                        type="email"
                        placeholder="enter your email"
                    />

                    <label htmlFor="Login__password">Password</label>
                    <br />
                    <input
                        id="Login__password"
                        type="password"
                        placeholder="enter your password"
                    />
                    {/* <br /> */}
                    <small>
                        Already have an Account ?{" "}
                        <Link to="/login">Sign In</Link>
                    </small>
                    <Button text="Submit" modifierClass="Button--teal" />
                </form>
            </Card>
        </main>
    );
}
