import { useEffect, useState } from "react";
import PageService from "../../../services/PageService";


const PageCreate=()=>{
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("detail", detail);    
       
        

        (async function () {
            const result = await PageService.store(formdata);
            console.log(result);
        })();
    };


    return(
        <form onSubmit={handleSubmit}>
            <div className="card bg-light">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm trang đơn</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label>
                                    <strong>Tiêu đề bài viết</strong>
                                </label>
                                <input type="text" placeholder="Tiêu đề bài viết" value={name} onChange={(e) => setName(e.target.value)}  className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Chi tiết</strong>
                                </label>
                                <textarea rows={6} className="form-control" value={detail} onChange={(e) => setDetail(e.target.value)} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Mô tả</strong>
                                </label>
                                <textarea rows={4} className="form-control" ></textarea>
                            </div>




                            <button className="btn btn-success" onClick={handleSubmit} >Lưu[Thêm]</button>
                        </div>
                        <div className="col-md-3">
                            <div className="border 1" style={{ height: "200px" }}>
                                <label>
                                    <strong className="ms-2">Đăng</strong>
                                </label>
                                <hr></hr>
                                <label>
                                    <strong>Trạng thái</strong>
                                </label>

                                <select className="form-control" >
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>
                                    
                                </select>
                                <hr></hr>
                                <button className="btn btn-success">Đăng</button>
                            </div>
                            

                            <div className="border 1 mt-4 bg-white" style={{ height: "70px" }}>

                                <label>
                                    <strong>Hình</strong>
                                </label>
                                <input type="file" className="form-control" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default PageCreate;