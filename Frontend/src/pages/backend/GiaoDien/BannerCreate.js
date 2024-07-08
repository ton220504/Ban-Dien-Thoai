import { useEffect, useState } from "react";
import bannerService from "../../../services/BannerService";



const BannerCreate = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [status, setStatus] = useState(1);
    const [position, setPosition] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        const image = document.querySelector("#image");
        formdata.append("name", name);
        formdata.append("image", image.files.length === 0 ? "" : image.files[0]);
        formdata.append("link", link);
        formdata.append("position", position);
        formdata.append("status", status);
        
        

        (async function () {
            const result = await bannerService.store(formdata);
            console.log(result);
        })();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card bg-light">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm banner</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label>
                                    <strong>Tiêu đề banner</strong>
                                </label>
                                <input type="text" placeholder="Tiêu đề banner" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Liên kết</strong>
                                </label>
                                <input type="text" placeholder="Liên kết" className="form-control" value={link} onChange={(e) => setLink(e.target.value)}/>
                            </div>
                            





                            <button className="btn btn-success" onClick={handleSubmit}>Lưu[Thêm]</button>
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

                                <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">Xuất bản</option>
                                    <option value="2">Chưa xuất bản</option>

                                </select>
                                <hr></hr>
                                <label>
                                    <strong>Vị trí</strong>
                                </label>

                                <select className="form-control" value={position} onChange={(e) => setPosition(e.target.value)}>
                                    <option value="">Chọn vị trí</option>
                                    <option value="slideshow">slideshow</option>


                                </select>
                            </div>




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
export default BannerCreate;