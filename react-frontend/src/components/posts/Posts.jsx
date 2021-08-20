import { Link } from "react-router-dom";
import Post from "../post/Post";
import "./Posts.css";

export default function Posts({ posts, search }) {
    let heading = "Recent";
    if (search) {
        let username = posts[0]?.username;
        username =
            username?.slice(0, 1).toUpperCase() + username?.slice(1) + "'s";
        heading = username;
    }
    return (
        <section className="Posts container">
            <h2>{heading} Posts</h2>
            {search && (
                <Link
                    style={{ color: "blue", textDecoration: "underline" }}
                    to="/"
                >
                    All Posts
                </Link>
            )}
            {posts.length === 0 ? (
                <div className="noPostMessage">
                    <span>NO POST FOUND</span>
                </div>
            ) : (
                <div>
                    {posts

                        .sort((a, b) => {
                            return (
                                new Date(b.createdAt) - new Date(a.createdAt)
                            );
                        })
                        .slice(0, 6)
                        .map((data) => (
                            <Post key={data._id} data={data} />
                        ))}
                </div>
            )}
        </section>
    );
}
