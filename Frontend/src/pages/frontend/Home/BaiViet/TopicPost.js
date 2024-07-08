import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import Pagination from "../Pagination";
import TopicService from "../../../../services/TopicService";
import PostService from "../../../../services/PostService";


const TopicPost = () => {
    const [posts, setPosts] = useState([]);
    const [topics, setTopics] = useState([]);
    const [topic, setTopic] = useState([]);
    const { id } = useParams();
    const [limit, setLimit] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        (async () => {
            const result = await PostService.getslugtopic(id, currentPage, limit);
            const result_topic = await TopicService.getshow(id);
            const result_topicList = await TopicService.get_list();

            setTopics(result_topic.topics);
            setPosts(result.posts);
            setTopic(result_topicList.topics);

        })();
    }, [id, currentPage, limit]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

    }


    return (
        <div className="container">
            <ul>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tất cả chủ đề
                        </Link>
                        <ul className="dropdown-menu">
                            {topic && topic.length > 0 && topic.map((top, index) => {
                                return (
                                    //<option key={index} value={bra.id}>{bra.name}</option>
                                    <li key={index} value={top.id}><Link to={`/chu-de-bai-viet/${top.id}`} className="dropdown-item ">{top.name}</Link></li>
                                );
                            })}

                        </ul>
                    </li>
                </ul>
            {topics && topics.length > 0 && topics.map((topic, index) => {
                return (
                    <h2 key={index} className="text-center my-4">Chủ đề <strong className="text-danger">{topic.name}</strong></h2>
                );
            })}
            <div className="row">


                {posts && posts.length > 0 && posts.map((post, index) => {
                    return (
                        <div className="col-md-4">
                            <section className="maincontent my-3">
                                <div key={index} className=" rounded-4 border m-1  bg-white shadow  " style={{ height: "300px" }}>
                                    <Link to={`/chi-tiet-bai-viet/${post.slug}`}><img src={post.image} style={{ height: "200px", width: "407px" }} className="rounded-4 border" /></Link>
                                    <p className="mx-1">{post.title}</p>
                                </div>
                            </section>
                        </div>
                    );
                })}



            </div>

            <div className="d-grid gap-2 col-1 mx-auto py-4 " style={{ width: "120px" }}>

                <div className="d-grid gap-2 col-1 mx-2 ">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange} />
                </div>

            </div>
        </div>
    );
}
export default TopicPost;