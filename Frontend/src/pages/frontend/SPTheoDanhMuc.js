import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import Pagination from "../frontend/Home/Pagination";


import ProductService from "../../services/ProductService";
import CategoryService from "../../services/CategoryService";

const SPTheoDanhMuc = () => {
    const { slug } = useParams();
    // const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [products, setProducts] = useState([]);
    
    const [limit, setLimit] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        (async () => {
            const result = await ProductService.getscategory(slug, currentPage, limit);
            const result_category = await CategoryService.getshow(slug);

            setProducts(result.products);
           setCategorys(result_category.categorys);

        })();
    }, [slug,currentPage, limit]);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        
    }


    return (
        <div className="container">
            {categorys && categorys.length > 0 && categorys.map((category, index) => {
                return (
                    <h2 key={index} className="text-center my-4"><strong className="text-danger">{category.name}</strong></h2>
                );
            })}
            <div className="row" >

                {products && products.length > 0 && products.map((product, index) => {
                    return (
                        <div className="col-md-3">
                            <div className="">
                                <div key={index} className="row rounded-4 border m-1  bg-white shadow " style={{ height: "500px", width: "300px" }} >
                                    <div className="iphinh">
                                        <Link to={`/chi-tiet-san-pham/${product.slug}`} ><img src={product.image} style={{ height: "100%", width: "100%" }} /></Link>
                                    </div>
                                    <h6>{product.name}</h6>
                                    <p style={{ fontSize: "17px" }} className="text-decoration-line-through fw-light">{product.price}</p>
                                    <p className="text-danger" style={{ fontSize: "20px" }}><strong>&nbsp;{product.pricesale}</strong>&nbsp;</p>
                                    <p className=" rounded-4  bg-light" style={{ fontSize: "14px" }}>Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>
                                </div>
                            </div>
                        </div>
                    );

                })}

            </div>
            <div className="d-grid gap-2 col-1 mx-auto py-4 " style={{ width: "120px" }}>
               
                <div className="d-grid gap-2 col-1 mx-2 ">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange} />
                </div>

            </div>


        </div>
    );
}
export default SPTheoDanhMuc;