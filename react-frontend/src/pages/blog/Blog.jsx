import React, { useContext, useEffect, useState } from "react";
import "./Blog.css";
import { Category } from "../../components/category/Category";
import blogImg from "../../components/hero/images/hero.jpg";
import ProfileCard from "../../components/profileCard/ProfileCard";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "../../config";
import { RiEditBoxLine, RiDeleteBin6Line } from "react-icons/ri";
import { Context } from "../../context/Context";
import Button from "../../components/button/Button";
export default function Blog() {
    const [post, setPost] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const location = useLocation();
    const postId = location.pathname.split("/")[2];

    const { user } = useContext(Context);
    useEffect(() => {
        const getPost = async () => {
            const res = await axiosInstance.get(`/posts/${postId}`);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [postId]);

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/posts/${postId}`, {
                data: { username: user?.username },
            });
            window.location.replace("/");
        } catch (err) {
            console.log(err);
        }
    };
    const handleUpdate = async () => {
        try {
            await axiosInstance.put(`/posts/${post._id}`, {
                username: user?.username,
                title,
                desc,
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    const createdDate = new Date(post.createdAt).toLocaleDateString();

    const PF = "https://mern-blog-practice.herokuapp.com/images/";
    return (
        <main className="Blog">
            <div className="Blog-content container">
                <div className="Blog-container">
                    <img
                        src={post.photo ? PF + post.photo : blogImg}
                        alt="blog hero"
                    />
                    <div className="Blog-body">
                        <div className="Blog-heading-div">
                            {editMode ? (
                                <textarea
                                    rows="1"
                                    className="Blog-title"
                                    type="text"
                                    value={title}
                                    autoFocus={true}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            ) : (
                                <h1>{post.title}</h1>
                            )}
                            {user?.username === post.username && (
                                <div className="icons">
                                    <RiEditBoxLine
                                        onClick={() =>
                                            setEditMode(
                                                (prevState) => !prevState
                                            )
                                        }
                                        className="icon-edit"
                                    />
                                    <RiDeleteBin6Line
                                        onClick={handleDelete}
                                        className="icon-delete"
                                    />
                                </div>
                            )}
                        </div>
                        <small>
                            by{" "}
                            <Link
                                style={{ textDecoration: "underline" }}
                                to={`/?username=${post.username}`}
                            >
                                {post?.username}
                            </Link>{" "}
                            on {createdDate}
                        </small>
                        <div className="Blog__categories">
                            {post.categories?.map((cat) => (
                                <Category data={cat} />
                            ))}
                        </div>
                        {editMode ? (
                            <textarea
                                className="Blog-para"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        ) : (
                            <p>{post.desc}</p>
                        )}
                    </div>
                    {editMode && (
                        <Button
                            text={"Update"}
                            modifierClass="Button--teal"
                            onClick={handleUpdate}
                        />
                    )}
                </div>
                <ProfileCard />
            </div>
        </main>
    );
}
