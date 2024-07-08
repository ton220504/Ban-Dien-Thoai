import { useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../../services/UserService";


const UserCreate = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [roles, setRoles] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        const image = document.querySelector("#image");
        formdata.append("name", name);
        formdata.append("image", image.files.length === 0 ? "" : image.files[0]);
        formdata.append("username", username);
        formdata.append("password", password);
        formdata.append("email", email);
        formdata.append("gender", gender);
        formdata.append("phone", phone);
        formdata.append("address", address);
        formdata.append("roles", roles);

        (async function () {
            const result = await UserService.store(formdata);
            console.log(result);
        })();
    };


    return (
        <form >
            <div className="card" onSubmit={handleSubmit}>
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm Thành viên</strong>
                        </div>
                        <div className="col-6 text-end">
                            <Link className="btn btn-sm btn-success" to="/admin/user">
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
                                <input type="text" placeholder="Họ và tên" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>


                            <div className="mb-3">
                                <label>
                                    <strong>Tên đăng nhập</strong>
                                </label>
                                <input type="text" placeholder="Tên đăng nhập" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Mật khẩu</strong>
                                </label>
                                <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                            </div>



                            <div className="mb-3">
                                <label>
                                    <strong>Email</strong>
                                </label>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                            </div>




                            <button className="btn btn-success" onClick={handleSubmit}>nhận</button>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label>
                                    <strong>Điện thoại</strong>
                                </label>
                                <input type="text" placeholder="Điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />
                            </div>

                           
                            <div className="mb-3" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <input type="radio" id="html" name="fav_language" value="1" />
                                <label >Nam</label><br/>
                                <input type="radio" id="css" name="fav_language" value="2" />
                                <label >Nữ</label>

                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Roles</strong>
                                </label>
                                <select className="form-control" value={roles} onChange={(e) => setRoles(e.target.value)}>
                                    <option value="">Chọn roles</option>
                                    <option value="1">admin</option>
                                    <option value="0">Customer</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Địa chỉ</strong>
                                </label>
                                <input type="text" placeholder="Địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />
                            </div>



                            <div className="mb-3">
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
export default UserCreate;