import { useEffect, useState } from "react";
import menuService from "../../../services/MenuService";

const MenuCreate = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState(1);
    const [position, setPosition] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        
        formdata.append("name", name);
        formdata.append("link", link);
        formdata.append("type", type);
        formdata.append("position", position);
        formdata.append("status", status);
        
        
        

        (async function () {
            const result = await menuService.store(formdata);
            console.log(result);
        })();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card bg-light">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm menu</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label>
                                    <strong >Tên menu</strong>
                                </label>
                                <input  type="text" placeholder="Tiêu đề menu" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Liên kết</strong>
                                </label>
                                <input type="text" placeholder="Liên kết" className="form-control" value={link} onChange={(e) => setLink(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label>
                                    <strong>Kiểu menu</strong>
                                </label>
                                <input type="text" placeholder="Kiểu menu" className="form-control" value={type} onChange={(e) => setType(e.target.value)}/>
                            </div>





                            <button className="btn btn-success" >Lưu[Thêm]</button>
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
                                <div className="mb-3">
                                    <label>
                                        <strong>Vị trí</strong>
                                    </label>
                                    <select className="form-control" value={position} onChange={(e) => setPosition(e.target.value)}>
                                        <option value="">Chọn vị trí</option>
                                        <option value="mainmenu">mainmenu</option>
                                        <option value="footermenu">footermenu</option>
                                    </select>
                                </div>
                                
                            </div>
                      </div>
                    </div>
                </div>
            </div>
        </form>

    );
}
export default MenuCreate;