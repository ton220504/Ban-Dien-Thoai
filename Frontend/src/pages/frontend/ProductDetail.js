import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";


const ProductDetail = () => {
    const [product, setProduct] = useState([]);
    const [productorther, setProductorther] = useState(8);
    const { slug } = useParams();
    useEffect(() => {
        (async () => {
            const result = await ProductService.getbyslug(slug, 8);
            setProduct(result.product);
            setProductorther(result.products);
        })();
    }, [slug]);

    return (
        <div className="container">
            <div className="row pb-5 main_product" >
                <div className="col-md-4 main_product_img">
                    <Link ><img className="my-2 " src={product.image} style={{ height: "100%", width: "100%" }} /></Link>

                </div>
                <div className="col-md-5">
                    <div className="main_product_name">
                        <h2 className="my-3 " style={{width:"100%"}}>{product.name}</h2>
                    </div>

                    <p>Mã: IP14PM256-01</p>
                    <p >Thương hiệu: Apple   |   Tình trạng: Còn hàng</p>
                    <div className="border-bottom"></div>
                    <div className="row py-3">
                        <div className="col-6">
                            <p className="text-danger" style={{ fontSize: "20px" }}><strong>&nbsp;{product.pricesale}</strong>&nbsp;</p>
                        </div>
                        <div className="col-6">

                            <p style={{ fontSize: "17px" }} className="text-decoration-line-through fw-light">{product.price}</p>
                        </div>
                    </div>
                    <div className="main_product_CT">
                        <p>✔️Máy mới Fullbox 100% - Chưa Active - Chính Hãng Apple</p>
                        <p> ✔️Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản xuất</p>
                        <p>✔️Bảo hành chính hãng Apple 12 tháng</p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button className="form-control">Thêm vào giỏ hàng</button>
                        </div>
                        <div className="col-6">
                            <button className="form-control btn btn-danger">Mua ngay</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 main_product_CS">
                    <div className=" rounded-4 border border-danger mt-3" style={{ height: "100%", width:"100%" }}>
                        <h5 className="text-center py-2 border-bottom border-danger bg-danger text-white rounded-top-4 ">Khuyến mãi đặc biệt</h5>
                        <div className="mx-1">
                            <div>- Giảm  khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</div>
                            <div>- Giảm trực tiếp 40%, tối đa <strong className="text-danger">600.000 VNĐ</strong> khi mở thẻ TP Bank EVO.</div>
                            <div>- Trả góp qua Home PayLater giảm thêm 5% tối đa <strong className="text-danger">500.000đ.</strong></div>
                            <div>- Hỗ trợ trả góp 0% chỉ cần CCCD gắn chip hoặc 0% qua thẻ tín dụng.</div>
                            <div>- Giảm thêm <strong className="text-danger">5 - 15% cho</strong> <strong className="text-danger">khách hàng thân thiết </strong>khi <strong className="text-danger">mua kèm phụ kiện</strong> (Áp dụng một số sản phẩm).</div>
                        </div>
                    </div>
                </div>
            </div>
            
                <div>
                    <h2>Sản phẩm liên quan</h2>
                    <div className="row row_iphone" >

                        {productorther && productorther.length > 0 && productorther.map((products, index) => {
                            return (
                                <div className="col-md-3">
                                    <div className="iphone">
                                        <div key={index} className="row rounded-4 border m-1  bg-white shadow " style={{ height: "100%", width: "100%" }} >
                                            <div className="iphinh">
                                                <Link to={`/chi-tiet-san-pham/${products.slug}`} ><img src={products.image} style={{ height: "100%", width: "100%" }} /></Link>
                                            </div>
                                            <h6>{products.name}</h6>
                                            <p className="iphone_price text-decoration-line-through fw-light">Giá gốc: {products.price}</p>
                                            <p className="iphone_pricesale text-danger" >Giá khuyến mãi: <strong>&nbsp;{products.pricesale}</strong>&nbsp;</p>
                                            <p className="iphone_KM rounded-4  bg-light" >Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>
                                        </div>
                                    </div>
                                </div>
                            );

                        })}

                    </div>
                </div>
            
        </div>
    );
}
export default ProductDetail;

