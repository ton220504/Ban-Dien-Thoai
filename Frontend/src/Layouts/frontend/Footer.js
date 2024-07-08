import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/logo.webp";
import { useState } from "react";
import ContactService from "../../services/ContactService";
import MenuFooter from "./MenuFooter";


const Footer = () => {
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
        formdata.append("phone", 1);
        formdata.append("content", "hhh");
        formdata.append("status", 1);
        formdata.append("replay", replay);

        (async function () {
            const result = await ContactService.store(formdata);
            console.log(result);
        })();
    };




    return (
        <div className="footer" onSubmit={handleSubmit} >
            <div className="bg-light" style={{ height: "100%" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <h2 className=" pt-4">Đăng ký nhận tin từ <strong className="text-danger">Sudes Phone</strong></h2>
                            <p className=" pt-2">Nhận thông tin sản phẩm mới nhất và các chương trình khuyến mãi.</p>
                            <form id="mc-form" className=" d-grid gap-2 col-6  " data-toggle="validator" novalidate="true">
                                <input style={{ width: "100%", borderColor: "black" }} type="email" className="form-control rounded-4 border" id="text" placeholder="Nhập họ và tên..." name="name" value={name} onChange={(e) => setName(e.target.value)} />
                                <input style={{ width: "100%", borderColor: "black" }} type="email" className="form-control rounded-4 border" id="email" placeholder="Nhập địa chỉ email..." name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button className="d-grid gap-2 col-6 text-white bg-black rounded-4 border py-1" type="submit" style={{ width: "100px", borderColor: "black" }} onClick={handleSubmit}>Đăng ký</button>
                            </form>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-3 mt-4">
                            <div className="">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.854605269495!2d106.77507107488353!3d10.848563689304662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e3465da241%3A0x90ccc9c684a8c7d2!2zUGjDsm5nIHRy4buNIEhPQkEgSE9NRSBDTjY!5e1!3m2!1svi!2s!4v1709991712395!5m2!1svi!2s" width="250" height="250" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-black mt-3" style={{ height: "100%px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 text-white my-3">

                                <Link to="">
                                    <img src={Logo} className="img-fluid my-3" alt="logo" style={{ height: "30px", width: "100%" }} />
                                </Link>

                                <p>Hệ thống cửa hàng Sudes Phone chuyên bán lẻ điện thoại, máy tính laptop, smartwatch, smarthome, phụ kiện chính hãng - Giá tốt, giao miễn phí.</p>
                                <p>Địa chỉ: 70 Lữ Gia, Phường 15, Quận 11, Tp.HCM</p>
                                <p>Điện thoại: 1900 6789</p>
                                <p>Email: support@sapo.vn</p>
                            </div>
                            <div id="chinhsach" className="col-3 text-white pt-4 ps-5">
                               
                                <Link id="cs" className="nav-link   mt-2 mb-4" to="#"><a>CHÍNH SÁCH</a></Link>
                                <MenuFooter/>
                                {/* <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-mua-hang"><a>Chính sách mua hàng</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-doi-tra"><a>Chính sách đổi trả</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-van-chuyen"><a>Chính sách vận chuyển</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="/chinh-sach-bao-mat"><a>Chính sách bảo mật</a></Link> */}
                                

                            </div>
                            <div id="huongdan" className="col-3 text-white pt-4 ">
                                <Link id="cs" className="nav-link  text-white  mt-2 mb-4" to="#"><a>HƯỚNG DẪN</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn mua hàng</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn đổi trả</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn chuyển khoản</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn trả góp</a></Link>
                                <Link id="cs" className="nav-link  text-white  my-2" to="#"><a>Hướng dẫn hoàn hàng</a></Link>



                            </div>
                            <div className="col-3 text-white pt-4 ">
                                <Link id="ketnoi" className="nav-link  text-white  mt-2 mb-4" to="#"><a>KẾT NỐI VỚI CHÚNG TÔI</a></Link>
                                <div className="row">
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/facebook_2.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/instagram_1.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/shopee.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/lazada.svg?1706429532485" /></Link>
                                    </div>
                                    <div className="col-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/tiktok.svg?1706429532485" /></Link>
                                    </div>

                                </div>
                                <Link id="hotro" className="nav-link  text-white mt-3 mb-4" to="#"><a>HỔ TRỢ THANH TOÁN</a></Link>
                                <div className="row">
                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_1.svg?1706429532485" /></Link>
                                    </div>

                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_2.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_3.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_4.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_5.svg?1706429532485" /></Link>
                                    </div>

                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_6.svg?1706429532485" /></Link>
                                    </div>


                                    <div className="col-3 my-2">
                                        <Link><img src="https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/payment_7.svg?1706429532485" /></Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center pt-2">© Bản quyền thuộc về Sudes Team | Cung cấp bởi Sudes Phone</p>



            </div>
        </div>


    );
}
export default Footer;