import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostService from "../../../services/PostService";
import TopicService from "../../../services/TopicService";



const PostCreate = () => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [detail, setDetail] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(1);
    const [topic_id, setTopic_id] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        const image = document.querySelector("#image");
        formdata.append("title", title);
        formdata.append("image", image.files.length === 0 ? "" : image.files[0]);
        formdata.append("detail", detail);
        formdata.append("description", description);
        formdata.append("status", status);
        formdata.append("slug", "hh-hh-h");
        formdata.append("type", type);
        formdata.append("topic_id", topic_id);


        (async function () {
            const result = await PostService.store(formdata);
            console.log(result);
        })();
    };

    const [topics, setTopics] = useState([]);
    useEffect(function () {
        (async () => {
            const result_topic = await TopicService.get_list();
            setTopics(result_topic.topics);
        })();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="card bg-light">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm bài viết</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label>
                                    <strong>Tên bài viết</strong>
                                </label>
                                <input type="text" placeholder="Tên bài viết" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Chi tiết</strong>
                                </label>
                                <textarea rows={6} className="form-control" value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Mô tả</strong>
                                </label>
                                <textarea rows={4} className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>




                            <button className="btn btn-success" onClick={handleSubmit}>Lưu[Thêm]</button>
                        </div>
                        <div className="col-md-3">
                            <div className="border 1" style={{ height: "300px" }}>
                                <label>
                                    <strong className="ms-2">Đăng</strong>
                                </label>
                                <hr></hr>
                                <label>
                                    <strong>Kiểu </strong>
                                </label>

                                <select className="form-control" value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="">chọn</option>
                                    <option value="page">page</option>
                                    <option value="post">post</option>

                                </select>
                                <hr></hr>
                                <label>
                                    <strong>Trạng thái</strong>
                                </label>

                                <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>

                                    <option value="2">Xuất bản</option>
                                    <option value="3">Chưa xuất bản</option>

                                </select>
                                <hr></hr>
                                <button className="btn btn-success">Đăng</button>
                            </div>
                            <select className="border 1 form-control" value={topic_id} onChange={(e) => setTopic_id(e.target.value)}>
                                <option value="">Chọn chủ đề</option>
                                {topics && topics.map((to, index) => {
                                    return (
                                        <option key={index} value={to.id}>{to.name}</option>
                                    );
                                })}


                            </select>

                            <div className="border 1 mt-4 bg-white" style={{ height: "70px" }}>

                                <label>
                                    <strong>Hình</strong>
                                </label>
                                <input id="image" type="file" className="form-control" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default PostCreate;