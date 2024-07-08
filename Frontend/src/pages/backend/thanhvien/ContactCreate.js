import { useState } from "react";
import { Link } from "react-router-dom";
import ContactService from "../../../services/ContactService";


const ContactCreate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    const [status, setStatus] = useState("");
    const [replay, setReplay] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();

        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("phone", phone);
        formdata.append("content", content);
        formdata.append("status", status);
        formdata.append("replay", replay);


        (async function () {
            const result = await ContactService.store(formdata);
            console.log(result);
        })();
    };


    return (
        <form >
            <div className="card" onSubmit={handleSubmit}>
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm liên hệ</strong>
                        </div>
                        <div className="col-6 text-end">
                            <Link className="btn btn-sm btn-success" to="/admin/contact">
                                Quay về
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label>
                                    <strong>Họ và tên</strong>
                                </label>
                                <input type="text" placeholder="Họ tên" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>



                            <div className="mb-3">
                                <label>
                                    <strong>Email</strong>
                                </label>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                            </div>


                            <div className="mb-3">
                                <label>
                                    <strong>Điện thoại</strong>
                                </label>
                                <input type="text" placeholder="Điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                            </div>

                            <button className="btn btn-success" onClick={handleSubmit}> nhận</button>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label>
                                    <strong>Chi tiết sản phẩm</strong>
                                </label>
                                <textarea rows={5} className="form-control" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
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
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default ContactCreate;