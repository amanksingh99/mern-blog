import { useState, useEffect } from "react";
import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../config";
export default function Home() {
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const { search } = location;

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Hero />
            <main>
                <Posts posts={posts} search={search} />
            </main>
            <Footer />
        </>
    );
}
