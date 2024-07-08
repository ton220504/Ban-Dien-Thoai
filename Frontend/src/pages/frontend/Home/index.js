import "../../frontend/Home/index.css";
//import CoutDown from "../../../pages/frontend/Home/CoutDown";

import ChinhSach from "./ChinhSach";
import Slider from "./Slider";
import Category from "./Category";

import Data from "../../../data_fake/data.json";


import DanhMuc from "./DanhMuc";
import ListDM from "../../../data_fake/ListDanhMuc.json";

import Iphone from "./Iphone";
import ListIP from "../../../data_fake/iPhone.json";

import KhuyenMai from "./KhuyenMai";
import ListIPKM from "../../../data_fake/khuyenmai.json";

import fire from "../../../assets/Logo/fire.png";

import ListIpad from "../../../data_fake/ipad.json";
import Ipad from "./Ipad";

import ListMac from "../../../data_fake/macbook.json";
import Macbook from "./Macbook";

import ListWatch from "../../../data_fake/watch.json";
import Watch from "./Watch";

import Thongtin from "./Thongtin";
import { Link } from "react-router-dom";
import Product from "../Product";

import SPNew from "./SPNew";
import PostList from "./BaiViet/postList";
import PostNew from "./BaiViet/PostNew";
import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import PostService from "../../../services/PostService";
import BrandService from "../../../services/BrandService";


{/* ------------------------------------------------------------------------------------------------------- */ }




const Home = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);



    useEffect(() => {
        (async () => {
            const result = await ProductService.list(1, limit);

            setProducts(result.products);

        })();
    }, [limit]);
    {/* ------------------------------------------------------------------------------------------------------- */ }







    const listchinhsach = [
        { name: "MIễn phí vận chuyển", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_1.svg?1706429532485", des: "Hóa đơn trên 5 triệu" },
        { name: "Quà tặng hấp dẫn", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_2.svg?1706429532485", des: "Hóa đơn trên 10 triệu" },
        { name: "Chứng nhận chất lượng", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_3.svg?1706429532485", des: "Quà tặng chính hãng" },
        { name: "Hotline: 1900 6789", image: "https://bizweb.dktcdn.net/100/480/632/themes/900313/assets/ser_4.svg?1706429532485", des: "Hỗ trợ 24/7" },
    ];


    {/* ------------------------------------------------------------------------------------------------------- */ }
    const listcat = Data.categorys;
    const ListDanhMuc = ListDM.DanhMucs;
    const ListIphone = ListIP.iPhones;
    const ListKM = ListIPKM.khuyenmais;
    const ListIPD = ListIpad.ipads;
    const ListMB = ListMac.macbooks;
    const ListW = ListWatch.watchs;

    {/* ------------------------------------------------------------------------------------------------------- */ }
    
    
    let mybutton = document.getElementById("backToTopbtn");
    window.onscroll = function () {
        scrollFunction()
    };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function TopFunction() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    };





    return (
        

        <section className="maincontainer ">
            <div className="slider">
                <Slider />
            </div>
            

            {/* ------------------------------------------------------------------------------------------------------- */}

            <div className="chinhsach border-bottom py-4">
                <div className="container">



                    <ChinhSach />


                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}
            <div className=" border-bottom py-4 " >
                <div className="container">
                    <div className="row">
                        {listcat.map((cat, index) => {
                            return (
                                <div className="col-4" key={index}>
                                    <Category cat={cat} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}



            <div className=" border-bottom py-4   ">


                <div className="container" style={{ height: "700px", width: "100%" }}>
                    <div className="khuyenmai">
                        <div className="row">
                            <h2 className=" col-9 p-4 text-white" >HOT SALE HÔM NAY<img src={fire} style={{ height: "40px", width: "40px" }} /></h2>
                            <div className="time col-3">
                                <div className=" item" >
                                    <div id="day">05</div>
                                    <p className="text-center">Ngày</p>
                                </div>
                                <div className=" item" >
                                    <div id="hour">12</div>
                                    <p className="text-center">Giờ</p>
                                </div>
                                <div className=" item" >
                                    <div id="minute">30</div>
                                    <p className="text-center">Phút</p>

                                </div>
                                <div className=" item" >
                                    <div id="secound">45</div>
                                    <p className="text-center">Giây</p>
                                </div>
                            </div>


                        </div>
                        <div className="row">
                            <KhuyenMai />
                        </div>


                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}
            <div className="DanhMuc py-4">
                <div className="container">
                    <h2 className="text-center py-4">Danh Mục Nổi Bật</h2>
                    <div className="row">
                        {ListDanhMuc.map((danhmuc, index) => {
                            return (
                                <div className="col-md-2" key={index}>
                                    <DanhMuc danhmuc={danhmuc} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}
            <div className="container bg-success-subtle pb-3 rounded-4 ">
                <h2 className=" text-center py-4 text-white">Sản Phẩm Mới Nhất</h2>
                <SPNew />
            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}

            <div className="Iphone">
                <div className="container">
                    <h2 className="text-center py-4">Sản phẩm</h2>
                    <div className="row">

                        {products && products.length > 0 && products.map((product, index) => {
                            return (
                                <div key={index} className="col-md-3">
                                    <Iphone product={product} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="d-grid gap-2 col-1 mx-auto py-4 " style={{ width: "120px" }}>
                        <Link type="button" className="btn btn-outline-danger " to={`/san-pham`}>
                            Xem tất cả

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>


            {/* ------------------------------------------------------------------------------------------------------- */}
            <div className="thongtin">

                {
                    <Thongtin />
                }

            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}

            {/* ------------------------------------------------------------------------------------------------------- */}
            <div className="container">

                <h2 className="text-center"><strong className="text-danger">Sudes Phone</strong> Bài viết mới nhất</h2>
                <PostNew />
                <div className="d-grid gap-2 col-1 mx-auto py-4 " style={{ width: "120px" }}>
                    <Link type="button" className="btn btn-outline-danger " to={`/tat-ca-bai-viet`}>
                        Xem tất cả

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </Link>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}
            <button id="backToTopbtn" onClick={TopFunction}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </button>
            


        </section>
        
    );
    

}
export default Home;