import React from "react";
import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import Footer from "../../components/footer/Footer";
export default function Home() {
    return (
        <>
            <Hero />
            <main>
                <Posts />
            </main>
            <Footer />
        </>
    );
}
