import image from "../hero/images/hero.jpg";
import Post from "../post/Post";
import "./Posts.css";

export default function Posts() {
    return (
        <section className="Posts container">
            <h2>Recent Posts</h2>
            <div>
                <Post image={image} />
                <Post image={image} />
                <Post image={image} />
                <Post image={image} />
                <Post image={image} />
                <Post image={image} />
            </div>
        </section>
    );
}
