import "./Hero.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function Hero() {
    const { user } = useContext(Context);
    return (
        <div className="Hero container">
            {user ? (
                <>
                    <h1>
                        Welcome back <em>{user.username}!</em>
                    </h1>
                    <p>How was your day ?</p>
                    <Link to="/create" className="Hero-btn">
                        Create Something New
                    </Link>
                </>
            ) : (
                <>
                    <h1>
                        MERN Blog is a blogging platform for{" "}
                        <em>developers.</em>
                    </h1>
                    <p>
                        It's easy and free, sharing knowledge is the best thing
                        you can do!
                    </p>
                    <Link className="Hero-btn" to="/login">
                        Start Writing Now
                    </Link>
                </>
            )}
        </div>
    );
}
