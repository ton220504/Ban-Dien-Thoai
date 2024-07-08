import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo/fire.png";
import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";



const KhuyenMai = () => {
    const [products, setProduct] = useState([]);
    const [limit, setLimit] = useState(4);
    useEffect(() => {
        (async () => {
            const result = await ProductService.getlistsale(limit);
            setProduct(result.products);

        })();
    }, [limit]);

    return (
        <div className="row" >

            {products && products.length > 0 && products.map((product, index) => {
                return (
                    <div className="col-md-3">
                        <div className="iphone">
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
    );
}
export default KhuyenMai;