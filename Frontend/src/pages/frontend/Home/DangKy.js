import { Link } from "react-router-dom";
import UserService from "../../../services/UserService";
import { useState } from "react";





const Dangky = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [roles, setRoles] = useState(0);

    const [errorname, setErrorName] = useState("");
    const [errorusername, setErrorUserName] = useState("");
    const [errorpassword, setErrorPassword] = useState("");
    const [erroremail, setErrorEmail] = useState("");
    const [errorphone, setErrorPhone] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
        if (errorname && name) setErrorName("");
    };
    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
        if (errorusername && username) setErrorUserName("");
    };
    const handlePassChange = (event) => {
        setPassword(event.target.value);
        if (errorpassword && password) setErrorPassword("");
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        if (erroremail && email) setErrorEmail("");
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
        if (errorphone && phone) setPhone("");
    };



    const handleSubmit = (event) => {
        if (!name) {
            setErrorName("Vui lòng nhập họ và tên");
        } else {
            setErrorName("");
        }
        // ---------------------------------------------------------
        if (!username) {
            setErrorUserName("Vui lòng nhập tên đăng nhập");
        } else {
            setErrorUserName("");
        }
        // ---------------------------------------------------------

        if (!phone || phone.length < 10) {
            setErrorPhone("Vui lòng nhập 10 số");
        } else {
            setErrorPhone("");
        }

        // ---------------------------------------------------------
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            setErrorEmail("Vui lòng nhập email");
        } else if (!emailRegex.test(email)) {
            setErrorEmail("Vui lòng nhập đúng định dạng email");
        } else {
            setErrorEmail("");
        }
        // ---------------------------------------------------------
        if (!password || password.length < 8 || password.length > 12) {
            setErrorPassword("Vui lòng nhập mật khẩu từ 8 đến 12 ký tự");
        } else {
            setErrorPassword("");
        }
        // ---------------------------------------------------------

        if (name && username && phone && email && password) {
            // Gửi yêu cầu đăng ký
            var formdata = new FormData();
            formdata.append("name", name);
            formdata.append("username", username);
            formdata.append("password", password);
            formdata.append("email", email);
            formdata.append("phone", phone);
            formdata.append("roles", roles);

            (async function () {
                const result = await UserService.store(formdata);
                console.log(result);
            })();

            alert("Chúc mừng bạn đã đăng ký thành công!");
        }

        event.preventDefault();
    };


    return (
        <div className="container">

            <div className="contDK" onSubmit={handleSubmit}>

                <div className=" border rounded-4 my-4" style={{ height: "600px", width: "500px" }}>
                    <div className="mx-2">
                        <h3 className="text-black text-center">Đăng Ký</h3>
                        <a>Nếu bạn đã có tài khoản,<Link to="/dang-nhap" className="nav-link active"><strong className="text-danger">Đăng nhập tại đây</strong></Link></a>
                        <div className="my-3">
                            <input type="text" className="form-control" placeholder="Nhập họ và tên" value={name} onChange={handleNameChange} />
                        </div>
                        {errorname && <p className="text-danger">{errorname}</p>}



                        <div className="my-3">
                            <input type="text" className="form-control" placeholder="Nhập tên đăng nhập" value={username} onChange={handleUserNameChange} />
                        </div>
                        {errorusername && <p className="text-danger">{errorusername}</p>}


                        <div className="my-3">
                            <input type="phone" className="form-control" placeholder="Nhập số điện thoại" value={phone} onChange={handlePhoneChange} />
                        </div>
                        {errorphone && <p className="text-danger">{errorphone}</p>}


                        <div className="my-3">
                            <input type="email" className="form-control" placeholder="Nhập email" value={email} onChange={handleEmailChange} />
                        </div>
                        {erroremail && <p className="text-danger">{erroremail}</p>}


                        <div className="my-3">
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" value={password} onChange={handlePassChange} />
                        </div>
                        {errorpassword && <p className="text-danger">{errorpassword}</p>}


                        <button type="submit" className="btn btn-dark form-control text-center btnDangKy" onClick={handleSubmit}>Đăng ký</button>

                        <p className="text-center mt-3" >Hoặc đăng ký bằng</p>
                        <hr data-v-6451efeb></hr>

                        <div>
                            <Link to="">
                                <button type="submit" className="btn btn-light form-control text-center" >
                                    <div className="row">
                                        <a className="col-6 nav-link active text-end">Google</a>
                                        <img className="col-6" src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png" style={{ height: "24px", width: "50px" }}></img>

                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className="mt-3">
                            <Link to="">
                                <button type="submit" className="btn btn-light form-control text-center" >
                                    <div className="row">
                                        <a className="col-6 nav-link active text-end">Facebook</a>
                                        <img className="col-6" src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/facebook_2.svg?1706429532485" style={{ height: "24px", width: "50px" }}></img>

                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}
export default Dangky;