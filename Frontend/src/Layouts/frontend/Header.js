import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/logo.webp";

import MainHD from "./MainHD";
import { useEffect, useState } from "react";
import BrandService from "../../services/BrandService";
import menuService from "../../services/MenuService";
import CategoryService from "../../services/CategoryService";

const Header = () => {
    const [brands, setBrands] = useState([]);
    const [categorys, setCategorys] = useState([]);


    useEffect(function () {
        (async () => {
            const result_brand = await BrandService.get_list();
            const result_category = await CategoryService.get_list();

            setBrands(result_brand.brands);
            setCategorys(result_category.categorys);

        })();
    }, []);

    return (
        <>
            <section className="header bg-black py-2 border-bottom">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-2 my-2 header_logo">
                            <Link to="">
                                <img src={Logo} className="img-fluid" alt="logo" />
                            </Link>
                        </div>
                        <div className="col-md-5">

                            <form action="/search" method="get" className="header-search-form input-group search-bar m-2" role="search">
                                <input name="query" required className="input-group-field auto-search search-auto form-control" placeholder="Tìm sản phẩm..." autocomplete="off" type="text" />
                                <button type="submit" className="btn icon-fallback-text bg-white" aria-label="Tìm kiếm" title="Tìm kiếm" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" ></path>
                                    </svg>
                                </button>
                            </form>

                        </div>
                        <div className="col-md-5 ">

                            <div className="container ">
                                <div className="row " style={{ width: "100%", height: "50px" }}>
                                    <div className="col-3" >

                                        <div className="row">
                                            <div className="col-3 mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "35px", height: "35px", color: "white" }} fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                                </svg>
                                            </div>
                                            <div className="col-9">
                                                <div className="nav-link dropdown-toggle text-white my-3  "  id="menuheader" >Tài Khoản
                                                    <ul className="dropdown-menu " >
                                                        <li className="nav-item me-4">                                                         
                                                            <Link className="nav-link active ms-4" to="/dang-ky">Đăng ký</Link>                                   
                                                        </li>
                                                        <li className="nav-item me-4">
                                                            <Link className="nav-link active ms-4" to="/dang-nhap">Đăng nhập</Link>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-3 ms-2">
                                        <div className="row">
                                            <div className="col-3 mt-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "30px", height: "30px", color: "white" }} fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                                </svg>
                                            </div>
                                            <div className="col-9 ">
                                                <div className="row">
                                                    <Link className=" nav-link text-white ms-2">Liên Hệ</Link>
                                                    <Link className="nav-link  text-white ms-2" to="#">1900 6789</Link>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-3 ms-2">

                                        <div className="row">
                                            <div className="col-3 mt-2" id="icon-giohang">
                                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: "30px", height: "30px", color: "white" }} fill="currentColor" className="bibi-cart" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                                </svg>
                                                <div id="giohang">0</div>
                                            </div>
                                            <div className="col-9">
                                                <div className="row">

                                                    <Link className="nav-link  text-white my-3 ms-2" to="gio-hang">Giỏ Hàng</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>
            <section className="header bg-black py-2 ">
                <div className="container">
                    <section className="Header">
                        <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
                            <div className="container-fluid">

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className=" menu collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul id="menu-ul" className=" navbar-nav">
                                        <li className="nav-item me-4">
                                            <a ><Link className="nav-link active" aria-current="page" to="/">Trang chủ</Link></a>
                                        </li>
                                        <li className="nav-item me-4">
                                            <Link className="nav-link active" aria-current="page" to="/gioi-thieu">Giới thiệu</Link>
                                        </li>

                                        {/* <li className="  nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                iPhone
                                            </Link>
                                            <ul className=" dropdown-menu">
                                                <li><Link className="dropdown-item col-4" to="">iPhone 11</Link></li>
                                                <li><Link className="dropdown-item col-4" to="#">iPhone 12</Link></li>
                                                <li><Link className="dropdown-item col-4" to="#">iPhone 13</Link></li>
                                                <li><Link className="dropdown-item col-4" to="#">iPhone 14</Link></li>
                                                <li><Link className="dropdown-item col-4" to="#">iPhone 15</Link></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                iPad
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item " to="#">iPad pro</Link></li>
                                                <li><Link className="dropdown-item " to="#">iPad air</Link></li>
                                                <li><Link className="dropdown-item " to="#">iPad 10.9</Link></li>
                                                <li><Link className="dropdown-item " to="#">iPad 10.2</Link></li>
                                                <li><Link className="dropdown-item " to="#">iPad mini</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Macbook-iMac
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item " to="#">Macbook pro</Link></li>
                                                <li><Link className="dropdown-item " to="#">Macbook air</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Apple Watch
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item " to="#">Apple watch Ultra</Link></li>
                                                <li><Link className="dropdown-item " to="#">Apple watch S6</Link></li>
                                                <li><Link className="dropdown-item " to="#">Apple watch S7</Link></li>
                                                <li><Link className="dropdown-item " to="#">Apple watch SE</Link></li>
                                                <li><Link className="dropdown-item " to="#">Apple watch S8</Link></li>
                                                <li><Link className="dropdown-item " to="#">Apple watch S3</Link></li>
                                            </ul>
                                        </li> */}
                                        {/* <li className="nav-item me-3">
                                            <Link className="nav-link active me-4" aria-current="page" to="#">Airpods</Link>
                                        </li> */}
                                        {/* <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Phụ kiện
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item " to="#">Phụ kiện Apple</Link></li>
                                                <li><Link className="dropdown-item " to="#">Cốc-cáp sạc</Link></li>
                                                <li><Link className="dropdown-item " to="#">Bao da-ốp lưng</Link></li>
                                                <li><Link className="dropdown-item " to="#">Dán cường lực</Link></li>
                                                <li><Link className="dropdown-item " to="#">Sạc dự phòng</Link></li>

                                            </ul>
                                        </li> */}

                                        {/*<li className="nav-item">
                                            <Link className="nav-link active me-3" aria-current="page" to="#"></Link>
                                        </li> 
                                        <li className="nav-item">
                                            <Link className="nav-link active me-3" aria-current="page" to="#">Tin tức</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link active " aria-current="page" to="#">Liên hệ</Link>
                                        </li> */}

                                        <MainHD />
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Tất cả thương hiệu
                                            </Link>
                                            <ul className="dropdown-menu">
                                                {brands && brands.map((bra, index) => {
                                                    return (
                                                        //<option key={index} value={bra.id}>{bra.name}</option>
                                                        <li key={index} value={bra.id}><Link to={`/thuong-hieu/${bra.id}`} className="dropdown-item ">{bra.name}</Link></li>
                                                    );
                                                })}

                                            </ul>
                                        </li>
                                        {/* <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle active me-4" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Sản phảm theo danh mục
                                            </Link>
                                            <ul className="dropdown-menu">
                                                {categorys && categorys.map((cat, index) => {
                                                    return (
                                                        //<option key={index} value={bra.id}>{bra.name}</option>
                                                        <li key={index} value={cat.id}><Link to={`/san-pham-theo-danh-muc/${cat.slug}`} className="dropdown-item ">{cat.name}</Link></li>
                                                    );
                                                })}
                                                
                                            </ul>
                                        </li> */}



                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </section>
                </div>
            </section>
        </>

    );
}
export default Header;