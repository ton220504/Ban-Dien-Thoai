import { useEffect, useState } from "react";
import Post from "./post";
import PostService from "../../../../services/PostService";
import { Link } from "react-router-dom";

const postList = (props) => {

    
    const post = props.post;
    return (

        <section className="maincontent my-3">
            <div className=" rounded-4 border m-1  bg-white shadow  " style={{ height: "300px" }}>
                <Link to={`/chi-tiet-bai-viet/${post.slug}`}><img src={post.image} style={{ height: "200px", width: "407px" }} className="rounded-4 border" /></Link>
                <p className="mx-1">{post.title}</p>
            </div>
        </section>

    );
}
export default postList;