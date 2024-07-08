import { useEffect, useState } from "react";
import PostService from "../../../../services/PostService";
import { Link, useParams } from "react-router-dom";

const PostDetail=()=>{
    const [post, setPost] = useState([]);
    const [postorther, setPostorther] = useState(6);
    const { slug } = useParams();
    useEffect(() => {
        (async () => {
            const result = await PostService.getbyslug(slug, 3);
            setPost(result.post);
            setPostorther(result.posts);
        })();
    }, [slug]);

    return(
        <div className="container">
            <div>
                <h2 className="my-4">{post.title}</h2>
                <img src={post.image} style={{ height: "600px", width: "900px" }} className="center my-4"  />
                <div className="py-4">{post.detail}</div>
            </div>
            <div className="container">
                <h3>Tin tức liên quan</h3>
                

                <div className="row">
                    {postorther && postorther.length > 0 && postorther.map((posts, index) => {
                        return (
                            <div key={index} className="col-md-4">
                                <div className=" rounded-4 border m-1  bg-white shadow  " style={{ height: "300px" }}>
                                    <Link to={`/chi-tiet-bai-viet/${posts.slug}`}><img src={posts.image} style={{ height: "200px", width: "398px" }} className="rounded-4 border" /></Link>
                                    <p className="mx-1">{posts.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            
        </div>
        
    );
}
export default PostDetail;