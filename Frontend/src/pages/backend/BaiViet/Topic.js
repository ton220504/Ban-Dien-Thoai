import { useEffect, useState } from "react";
import TopicService from "../../../services/TopicService";



const Topic = () => {
    const remove = function (id) {
        try {
            (async () => {
                TopicService.delete(id)
            })()
        } catch (error) {
            console.log(error);
        }
    }

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [slug, setSlug] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();       
        formdata.append("name", name);        
        formdata.append("description", description);    
        formdata.append("status", status);
        formdata.append("slug", slug);
        formdata.append("sort_order", 1);
       
        

        (async function () {
            const result = await TopicService.store(formdata);
            console.log(result);
        })();
    };


    const [topics, setTopic] = useState([]);
    useEffect(function () {
        (async () => {
            const result = await TopicService.get_list();
            setTopic(result.topics);
        })();
    });

    return (
        <form >
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Chủ để bài viết</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label>
                                    <strong>Tên chủ đề</strong>
                                </label>
                                <input type="text" placeholder="Tên chủ đề" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Mô tả</strong>
                                </label>
                                <textarea rows={6} className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Tên Slug</strong>
                                </label>
                                <input type="text" placeholder="Tên slug" className="form-control" value={slug} onChange={(e) => setSlug(e.target.value)}/>
                            </div>


                            <div className="mb-3">
                                <label>
                                    <strong>Trạng thái</strong>
                                </label>
                                <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                </select>
                            </div>

                            


                            <button className="btn btn-success" onClick={handleSubmit}>Lưu[Thêm]</button>
                        </div>
                        <div className="col-md-8">
                            <div className="row py-3">
                                <div className="col-6">
                                    <select className="form-menu me-2">
                                        <option value="1">Hành động</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <button type="submit">Áp dụng</button>
                                </div>

                                <div className="col-6">                                   
                                        <input className="form me-2" type="search" aria-label="Search" />
                                        <button type="submit">Tìm kiếm</button>                                    
                                </div>
                            </div>
                            <table class="table table-bordered table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>

                                        <th scope="col">Tên chủ đề</th>
                                        <th scope="col">Tên slug</th>
                                        <th scope="col">Chức năng</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    
                                {topics && topics.length > 0 && topics.map((topic, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">1</th>
                                                <th scope="row">{topic.name}</th>
                                                
                                                <th scope="row">{topic.slug}</th>
                                                <th scope="row">
                                                <button className="btn btn-sm btn-danger mx-1" onClick={() => remove(topic.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                        </svg>
                                                    </button>
                                                </th>
                                            </tr>
                                        )

                                    })}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default Topic;