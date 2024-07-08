import httpAxios from "../httpAxios";

const ProductService={
    get_list: ()=>{
        return httpAxios.get("product/index");
    },
    getshow: (id)=>{
        return httpAxios.get(`product/show/${id}`);
    },
    store:(data)=>{
        return httpAxios.post("product/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`product/edit/${id}`, data);
    },
    delete:( id)=>{
        return httpAxios.delete(`product/remove/${id}`);
    },
    list:(page, limit)=>{
        return httpAxios.get(`product/list/${page}/${limit}`);
    },
    getbyslug:(slug, limit)=>{
        return httpAxios.get(`product/productdetail/${slug}/${limit}`);
    },
    getlistnew:(limit)=>{
        return httpAxios.get(`product/listnew/${limit}`);
    },
    getListProductCategory:(categoryid,page,limit)=>{
        return httpAxios.get(`product/list_product_category/${categoryid}/${page}/${limit}`);
    },
    getslugbrand:(brandid,page, limit)=>{
        return httpAxios.get(`product/list_brand/${brandid}/${page}/${limit}`);
    },
    getlistsale:(limit)=>{
        return httpAxios.get(`product/listsale/${limit}`);
    },
    getscategory:(slug,page, limit)=>{
        return httpAxios.get(`product/list_category/${slug}/${page}/${limit}`);
    },

}

export default ProductService;