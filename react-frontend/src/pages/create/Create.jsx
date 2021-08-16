import { useState } from "react";
import { Category } from "../../components/category/Category";
import blogImg from "../../components/hero/images/hero.jpg";
import ProfileCard from "../../components/profileCard/ProfileCard";
import Button from "../../components/button/Button";

import { FaPlus } from "react-icons/fa";
import "./Create.css";

export default function Create() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState(["C++", "Java"]);
    return (
        <main className="Blog">
            <div className="Blog-content container">
                <form className="Blog-container">
                    <img src={blogImg} alt="blog hero" />
                    <label htmlFor="fileInput" className="imageUploadIcon">
                        <FaPlus /> Upload Image
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />
                    <div className="Blog-body">
                        <textarea
                            rows="1"
                            className="Blog-title"
                            type="text"
                            value={title}
                            placeholder="A catchy title"
                            autoFocus={true}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <small className="Blog-date">
                            by Aman Singh | {new Date().toLocaleDateString()}
                        </small>
                        <div className="Blog__categories">
                            {categories.map((text) => (
                                <Category key={"key" + text} name={text} />
                            ))}
                        </div>

                        <textarea
                            className="Blog-para"
                            placeholder="What's on your mind ?"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <Button
                            type="submit"
                            text="Publish"
                            modifierClass="Button--teal"
                        />
                    </div>
                </form>
                <ProfileCard />
            </div>
        </main>
    );
}
