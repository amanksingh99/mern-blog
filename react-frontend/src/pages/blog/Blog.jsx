import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Category } from "../../components/category/Category";
import blogImg from "../../components/hero/images/hero.jpg";
import ProfileCard from "../../components/profileCard/ProfileCard";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Blog() {
    const [post, setPost] = useState([]);

    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`/posts/${postId}`);
            setPost(res.data);
        };
        getPost();
    }, [postId]);

    const createdDate = new Date(post.createdAt).toLocaleDateString();

    return (
        <main className="Blog">
            <div className="Blog-content container">
                <div className="Blog-container">
                    <img
                        src={post.photo ? post.photo : blogImg}
                        alt="blog hero"
                    />
                    <div className="Blog-body">
                        <h1>{post.title}</h1>
                        <small>
                            by{" "}
                            <Link to={`/?username=${post.username}`}>
                                {post.username?.slice(0, 1).toUpperCase() +
                                    post.username?.slice(1)}
                            </Link>{" "}
                            on {createdDate}
                        </small>
                        <div className="Blog__categories">
                            {post.categories?.map((cat) => (
                                <Category data={cat} />
                            ))}
                        </div>

                        <p>{post.desc}</p>
                    </div>
                </div>
                <ProfileCard />
            </div>
        </main>
    );
}
