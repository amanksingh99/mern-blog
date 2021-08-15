import "./Hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <div className="Hero container">
            <h1>
                MERN Blog is a blogging platform for <em>developers.</em>
            </h1>
            <p>
                It's easy and free, sharing knowledge is the best thing you can
                do!
            </p>
            <Link className="Hero-btn" to="/login">
                Start Writing Now
            </Link>
        </div>
    );
}
