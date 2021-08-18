import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import defaultProfilePic from "../../images/defaultProfilePic.png";
export default function Header() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__logo">
                    <strong>
                        <Link to="/">MERN BLOG</Link>
                    </strong>
                </div>

                <nav className="Header__nav">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/create">Write</Link>
                        </li>
                        {!user ? (
                            <li>
                                <Link to="/login">Sign In</Link>
                            </li>
                        ) : (
                            <li>
                                <span
                                    onClick={handleLogout}
                                    style={{ cursor: "pointer" }}
                                >
                                    Log out
                                </span>
                            </li>
                        )}
                    </ul>
                    {!user ? (
                        <Link className="Header-btn" to="/register">
                            Get Started
                        </Link>
                    ) : (
                        <Link to="/settings">
                            <img
                                className="profile-pic"
                                src={user.profilePic || defaultProfilePic}
                                alt="user profile"
                            />
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
