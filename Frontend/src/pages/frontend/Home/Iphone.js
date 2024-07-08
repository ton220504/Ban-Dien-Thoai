import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductService";

const iPhone = (props) => {
    const product = props.product;
    return (

        <div className="iphone">
            <div className="row rounded-4 border m-1  bg-white shadow  " >
                <div className="iphinh">
                    <Link to={`/chi-tiet-san-pham/${product.slug}`}><img src={product.image} style={{ height: "100%", width: "100%" }} /></Link>
                </div>
                <h6>{product.name}</h6>
                <p style={{ fontSize: "17px" }} className="text-decoration-line-through fw-light">{product.price}</p>
                <p className="text-danger" style={{ fontSize: "20px" }}><strong>&nbsp;{product.pricesale}</strong>&nbsp;</p>
                <p className=" rounded-4  bg-light" style={{ fontSize: "14px" }}>Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>
            </div>
        </div>



    );

}
export default iPhone;
