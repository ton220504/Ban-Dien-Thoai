import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostList from "./postList";
import PostService from "../../../../services/PostService";
import Pagination from "../Pagination";
import TopicService from "../../../../services/TopicService";

const Post = () => {


    const [posts, setPosts] = useState([]);
    const [topics, setTopics] = useState([]);
    const [limit, setLimit] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        (async () => {
            const result = await PostService.list(currentPage, limit);


            setPosts(result.posts)

        })();
    }, [currentPage, limit]);
    const handleReadmore = () => {
        setLimit(limit + 3);
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(function () {
        (async () => {
            const result_topic = await TopicService.get_list();
            setTopics(result_topic.topics);

        })();
    }, []);

    return (
        <section className="maincontent my-5">
            <div className="container">
                <ul>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tất cả chủ đề
                        </Link>
                        <ul className="dropdown-menu">
                            {topics && topics.length > 0 && topics.map((topic, index) => {
                                return (
                                    //<option key={index} value={bra.id}>{bra.name}</option>
                                    <li key={index} value={topic.id}><Link to={`/chu-de-bai-viet/${topic.id}`} className="dropdown-item ">{topic.name}</Link></li>
                                );
                            })}

                        </ul>
                    </li>
                </ul>
                
                <div className="row">
                    <h1 className="text-center text-danger">Tất cả Bài viết</h1>
                    {posts && posts.length > 0 && posts.map((post, index) => {
                        return (

                            <div key={index} className="col-md-4">
                                <PostList post={post} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="d-grid gap-2 col-1 mx-auto py-4 " style={{ width: "120px" }}>
                <div className="d-grid gap-2 col-1 mx-2 ">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange} />
                </div>

            </div>

        </section>
    );
}
export default Post;