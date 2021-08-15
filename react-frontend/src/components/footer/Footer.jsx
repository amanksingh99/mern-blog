/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer__branding">
                <div className="container">
                    <h2>MERN Blog</h2>
                    <p>
                        A blogging platform built for developers by developers.
                        Blog on personal domain, share ideas, and connect with
                        the global dev community!
                    </p>
                    <div>
                        <button className="btn btn-primary">Start A Blog</button>
                        <button className="btn btn-white">Sign In</button>
                    </div>
                    <small>
                        <em>Join the community of developers.</em>
                    </small>
                </div>
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
