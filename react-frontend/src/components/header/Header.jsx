import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
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
                        <li>
                            <Link to="/login">Sign In</Link>
                        </li>
                    </ul>
                    <Link className="Header-btn" to="/register">Get Started</Link>
                </nav>
            </div>
        </header>
    );
}
