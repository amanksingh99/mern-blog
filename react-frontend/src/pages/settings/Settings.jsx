import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import "./Settings.css";
import axios from "axios";
import { RiSettings2Fill, RiUserFill } from "react-icons/ri";
import defaultProfilePic from "../../images/defaultProfilePic.png";
export default function Settings() {
    const { user, dispatch } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const PF = "http://localhost:5000/images/";

    useEffect(() => {
        setEmail(user.email);
        setUsername(user.username);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            username === user.username &&
            email === user.email &&
            file === null
        ) {
            setMessage("No input given");
            setTimeout(() => setMessage(""), 2000);
            return;
        }

        if (!password) {
            setMessage("Enter password to update account!");
            setTimeout(() => setMessage(""), 2000);
            return;
        }

        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {}
        }
        try {
            const res = await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };
    return (
        <main className="Settings">
            <div className="container">
                <h1>My Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="Settings__profilePic">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : user.profilePic !== ""
                                    ? PF + user.profilePic
                                    : defaultProfilePic
                            }
                            alt="user profile pic"
                        />
                        <label className="profilePicLabel" htmlFor="fileInput">
                            Upload <RiUserFill />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="settingsSubmit" type="submit">
                        Update
                    </button>
                    {success && (
                        <span className="Setting__success">
                            Profile updated successfully
                        </span>
                    )}
                    <br />
                    <span>{message}</span>
                </form>
            </div>
        </main>
    );
}
