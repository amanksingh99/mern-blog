/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Footer() {
    const { user } = useContext(Context);
    return (
        <footer className="Footer">
            <div className="Footer__branding">
                {!user && (
                    <div className="Footer__buttons container">
                        <h2>MERN Blog</h2>
                        <p>
                            A blogging platform built for developers by
                            developers. Blog on personal domain, share ideas,
                            and connect with the global dev community!
                        </p>
                        <div>
                            <Link to="/register" className="btn btn-primary">
                                Start A Blog
                            </Link>
                            <Link to="/login" className="btn btn-white">
                                Sign In
                            </Link>
                        </div>
                        <small>
                            <em>Join the community of developers.</em>
                        </small>
                    </div>
                )}
            </div>
            <div className="Footer__copyright">
                <div className="container">
                    <div className="Footer__left">
                        <span>&copy; 2021 MERN Blog Inc.</span>
                    </div>
                    <div className="Footer__right">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
