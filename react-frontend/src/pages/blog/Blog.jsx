import React from "react";
import "./Blog.css";
import { Category } from "../../components/category/Category";
import blogImg from "../../components/hero/images/hero.jpg";
import ProfileCard from "../../components/profileCard/ProfileCard";
export default function Blog() {
    return (
        <main className="Blog">
            <div className="Blog-content container">
                <div className="Blog-container">
                    <img src={blogImg} alt="blog hero" />
                    <div className="Blog-body">
                        <h1>blog title</h1>
                        <small>by Aman Singh | 10 Aug 2021</small>
                        <div className="Blog__categories">
                            <Category name="javascript" color="#444" />
                            <Category color="#111" />
                            <Category name="algorithm" />
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error itaque id architecto iusto esse tempora
                            voluptatum officia aut ut. Ex nemo placeat nobis
                            non, alias sunt id vitae repellat, perferendis
                            beatae quibusdam et corrupti, assumenda quo
                            consectetur aperiam iste? Natus, qui voluptates?
                            Ipsam aliquid dolorem omnis officiis similique
                            veritatis expedita facere ratione, non nihil nam
                            sint, explicabo eaque! Iste rerum alias nisi
                            sapiente, est cupiditate corporis aperiam voluptatum
                            porro, sint fuga quae. Ad possimus minima quas
                            distinctio sit mollitia laborum illo dolorem dicta
                            quia labore quo temporibus odio non blanditiis minus
                            vel commodi, molestias nisi earum
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum corrupti beatae eveniet asperiores
                            placeat eos incidunt minima obcaecati? Officiis,
                            laudantium? Est eaque voluptas ullam fugiat delectus
                            voluptate qui, similique voluptatum autem facere
                            libero animi provident, quidem at unde quod porro
                            officiis? Consectetur dolores, enim quam veritatis,
                            eum, voluptate provident repudiandae necessitatibus
                            harum aliquid autem optio nostrum neque.
                        </p>
                    </div>
                </div>
                <ProfileCard />
            </div>
        </main>
    );
}
