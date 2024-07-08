import { useEffect, useState } from "react";
import Post from "./post";
import PostService from "../../../../services/PostService";
import { Link } from "react-router-dom";

const PostNew = () => {

    const [posts, setPost] = useState([]);
    const [limit, setLimit] = useState(3);
    useEffect(() => {
        (async () => {
            const result = await PostService.getlistnew(limit);
            setPost(result.posts);

        })();
    }, [limit]);



    return (

        <div className="row">

            {posts && posts.length > 0 && posts.map((post, index) => {
                return (
                    <div className=" my-3 col-4">
                        
                            <div key={index} className=" rounded-4 border m-1  bg-white shadow  " style={{ height: "300px" }}>
                                <Link to={`/chi-tiet-bai-viet/${post.slug}`}><img src={post.image} style={{ height: "200px", width: "407px" }} className="rounded-4 border" /></Link>
                                <p className="mx-1">{post.title}</p>
                            </div>
                        
                    </div>
                );

            })}

        </div>

    );
}
export default PostNew;