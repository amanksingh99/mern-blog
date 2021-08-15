import "./Header.css";
export default function Header() {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__logo">
                    <strong>MERN BLOG</strong>
                </div>

                <nav className="Header__nav">
                    <ul>
                        <li>Home</li>
                        <li>Write</li>
                        <li>Sign in</li>
                    </ul>
                    <button>Get Started</button>
                </nav>
            </div>
        </header>
    );
}
