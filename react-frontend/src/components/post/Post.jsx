import "./Post.css";
import defaultImage from "../../images/default.jpg";
import { Category } from "../category/Category";
import { Link } from "react-router-dom";
export default function Post({ data }) {
    const createdDate = new Date(data.createdAt).toLocaleDateString();
    return (
        <Link to={`/post/${data._id}`}>
            {" "}
            <div className="Post">
                <img
                    className="Post__image"
                    src={data.photo ? data.photo : defaultImage}
                    alt="blog"
                />
                <div className="Post__categories">
                    {data.categories.map((cat) => (
                        <Category data={cat} />
                    ))}
                </div>
                <div className="Post__content">
                    <h3 className="Post__title">{data.title}</h3>
                    <small>
                        by {data.username} | {createdDate}
                    </small>
                    <p className="Post__body">
                        {data.desc?.slice(0, 30) + "..."}
                    </p>
                </div>
            </div>
        </Link>
    );
}
