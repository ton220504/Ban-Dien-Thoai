import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import Iphone from "../../pages/frontend/Home/Iphone";
import Pagination from "./Home/Pagination";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        (async () => {
            const result = await ProductService.list(currentPage, limit);
            setProducts(result.products)
        })();
    }, [currentPage, limit]);
    const handleReadmore = () => {
        setLimit(limit + 8);
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    return (
        <section className="maincontent my-5">
            <div className="container">
                <h1 className="text-center text-danger">Tất cả sản phẩm</h1>
                <div className="row">
                    {products && products.length > 0 && products.map((product, index) => {
                        return (
                            <div key={index} className="col-md-3">
                                <Iphone product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="d-grid gap-2 col-1 mx-auto py-4 " style={{ width: "120px" }}>
                {/* <button type="button" className="btn btn-outline-danger" onClick={handleReadmore}>
                    Xem thêm
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </button> */}
                <div className="d-grid gap-2 col-1 mx-2 ">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange} />
                </div>

            </div>
        </section>
    );
}
export default Product;