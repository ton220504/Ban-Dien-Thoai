import { Link } from "react-router-dom";

const DangNhap=()=>{
    return (
        <div className="container">

            <div className="contDK">

                <div className=" border rounded-4 my-4" style={{ height: "450px", width: "500px" }}>
                    <div className="mx-2">
                        <h3 className="text-black text-center">Đăng Nhập</h3>
                        <a>Nếu bạn chưa có tài khoản,<Link to="/dang-ky" className="nav-link active"><strong className="text-danger">Đăng ký tại đây</strong></Link></a>
                        <div className="my-3">
                            <input type="text" className="form-control" placeholder="Nhập tên đăng nhập" />
                        </div>
                        
                        <div className="my-3">
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" />
                        </div>
                        <button type="submit"  className="btn btn-dark  form-control text-center btnDangNhap">Đăng nhập</button>
                        
                        <p className="text-center mt-3">Hoặc đăng nhập bằng</p>
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
export default DangNhap;