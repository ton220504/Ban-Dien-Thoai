import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";
import ProductService from "../../../services/ProductService";

const ProductEdit = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        name: "",
        detail: "",
        description: "",
        categoryId: "",
        brandId: "",
        price: 10000,
        priceSale: 1000,
        qty: 1,
        status: 1,
        image: null,
        slug: ""
    });
    const [brands, setBrands] = useState([]);
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [resultBrand, resultCategory, resultProduct] = await Promise.all([
                    BrandService.get_list(),
                    CategoryService.get_list(),
                    ProductService.getshow(productId)
                ]);
                setBrands(resultBrand.brands);
                setCategorys(resultCategory.categorys);
                setProduct({
                    name: resultProduct.name,
                    detail: resultProduct.detail,
                    description: resultProduct.description,
                    categoryId: resultProduct.category_id,
                    brandId: resultProduct.brand_id,
                    price: resultProduct.price,
                    priceSale: resultProduct.pricesale,
                    qty: resultProduct.qty,
                    status: resultProduct.status,
                    slug: resultProduct.slug
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setProduct({
            ...product,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                formData.append(key, value);
            }
        });

        try {
            const result = await ProductService.edit(formData);
            console.log(result);
        } catch (error) {
            console.error("Error editing product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">                
                            <div className="mb-3">
                                <label><strong>Tên sản phẩm</strong></label>
                                <input type="text" name="name" value={product.name} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label><strong>Chi tiết sản phẩm</strong></label>
                                <textarea rows={7} name="detail" value={product.detail} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label><strong>Mô tả</strong></label>
                                <textarea rows={6} name="description" value={product.description} onChange={handleChange} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <label><strong>Danh mục</strong></label>
                                <select name="categoryId" value={product.categoryId} onChange={handleChange} className="form-control">
                                    <option value="">Chọn danh mục</option>
                                    {categorys && categorys.map((cat, index) => (
                                        <option key={index} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label><strong>Thương hiệu</strong></label>
                                <select name="brandId" value={product.brandId} onChange={handleChange} className="form-control">
                                    <option value="">Chọn thương hiệu</option>
                                    {brands && brands.map((bra, index) => (
                                        <option key={index} value={bra.id}>{bra.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label><strong>Giá</strong></label>
                                <input type="number" name="price" value={product.price} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label><strong>Giá khuyến mãi</strong></label>
                                <input type="number" name="priceSale" value={product.priceSale} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label><strong>Số lượng</strong></label>
                                <input type="number" name="qty" value={product.qty} onChange={handleChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label><strong>Hình</strong></label>
                                <input id="image" type="file" onChange={handleImageChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label><strong>Danh mục</strong></label>
                                <select name="status" value={product.status} onChange={handleChange} className="form-control">
                                    <option value="1">xua ban</option>
                                    <option value="2">chua xua ban</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-danger">Sửa</button>
        </form>
    );
};

export default ProductEdit;
