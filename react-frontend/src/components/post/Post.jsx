import "./Post.css";
export default function Post({ image }) {
    return (
        <div className="Post">
            <img className="Post__image" src={image} alt="blog" />
            <div className="Post__content">
                <h3 className="Post__title">Lorem ipsum dolor sit.</h3>
                <small>by Aman Singh | 10 Aug 2021</small>
                <p className="Post__body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae, doloremque minus itaque deleniti corporis
                    consequatur hic officia voluptatem expedita libero?
                </p>
            </div>
        </div>
    );
}
