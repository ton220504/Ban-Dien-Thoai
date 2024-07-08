import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";


const ProductCreate = () => {
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [brandId, setBrandId] = useState("");
    const [price, setPrice] = useState(10000);
    const [priceSale, setPriceSale] = useState(1000);
    const [qty, setQty] = useState(1);
    const [status, setStatus] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        const image = document.querySelector("#image");
        formdata.append("name", name);
        formdata.append("image", image.files.length === 0 ? "" : image.files[0]);
        formdata.append("detail", detail);
        formdata.append("category_id", categoryId);
        formdata.append("brand_id", brandId);
        formdata.append("price", price);
        formdata.append("pricesale", priceSale);
        formdata.append("description", description);
        formdata.append("qty", qty);
        formdata.append("status", status);
        formdata.append("slug", "hh-hh-h");
        

        (async function () {
            const result = await ProductService.store(formdata);
            console.log(result);
        })();
    };
    //category_brand
    const [brands, setBrands]= useState([]);
    const [categorys, setCategorys]=useState([]);
    useEffect(function(){
        (async ()=>{
            const result_brand= await BrandService.get_list();
            const result_category= await CategoryService.get_list();
            setBrands(result_brand.brands);
            setCategorys(result_category.categorys);
        })();
    },[]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm sản phẩm</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label>
                                    <strong>Tên sản phẩm</strong>
                                </label>
                                <input type="text" placeholder="Tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Chi tiết sản phẩm</strong>
                                </label>
                                <textarea rows={7} className="form-control" value={detail} onChange={(e) => setDetail(e.target.value)}></textarea>
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Mô tả</strong>
                                </label>
                                <textarea rows={6} className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>

                            <button className="btn btn-success" onClick={handleSubmit}>nhận</button>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label>
                                    <strong>Danh mục</strong>
                                </label>
                                <select className="form-control" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                                    <option value="">Chọn danh mục</option>
                                    {categorys && categorys.map((cat, index)=>{
                                        return(
                                            <option key={index} value={cat.id}>{cat.name}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Thương hiệu</strong>
                                </label>
                                <select className="form-control" value={brandId} onChange={(e) => setBrandId(e.target.value)}>
                                    <option value="">Chọn thương hiệu</option>
                                    {brands && brands.map((bra, index)=>{
                                        return(
                                            <option key={index} value={bra.id}>{bra.name}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Giá</strong>
                                </label>
                                <input type="number" placeholder="Giá" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Giá khuyến mãi</strong>
                                </label>
                                <input type="number" placeholder="Giá khuyến mãi" className="form-control" value={priceSale} onChange={(e) => setPriceSale(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Số lượng</strong>
                                </label>
                                <input type="number" placeholder="Số lượng" className="form-control" value={qty} onChange={(e) => setQty(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Hình</strong>
                                </label>
                                <input id="image" type="file" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Danh mục</strong>
                                </label>
                                <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">xua ban</option>
                                    <option value="2">chua xua ban</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
export default ProductCreate;