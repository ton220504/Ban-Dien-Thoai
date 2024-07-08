import httpAxios from "../httpAxios";

const PageService={
    get_list: ()=>{
        return httpAxios.get("page/index");
    },
    get_list_show: (id)=>{
        return httpAxios.get(`page/show/${id}`);
    },
    store:(data)=>{
        return httpAxios.post("page/store",data);
    },
    list:(page, limit)=>{
        return httpAxios.get(`page/list/${page}/${limit}`);
    },

    
}

export default PageService;