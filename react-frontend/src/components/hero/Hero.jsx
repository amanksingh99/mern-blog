import "./Hero.css";

export default function Hero() {
    return (
        <div className="Hero container">
            <h1>
                MERN Blog is a blogging platform for <em>developers</em> by{" "}
                <em>developers</em>
            </h1>
            <p>
                It's easy and free, sharing knowledge is the best thing you can
                do!
            </p>
            <button>Start Writing Now</button>
        </div>
    );
}
