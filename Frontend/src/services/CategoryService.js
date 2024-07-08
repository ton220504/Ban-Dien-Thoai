import httpAxios from "../httpAxios";

const CategoryService={
    get_list: ()=>{
        return httpAxios.get("category/index");
    },
    store:(data)=>{
        return httpAxios.post("category/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`category/edit/${id}`, data);
    },
    delete:( id)=>{
        return httpAxios.delete(`category/remove/${id}`);
    },
    getshow:(slug)=>{
        return httpAxios.get(`category/show/${slug}`);
    }
}

export default CategoryService;