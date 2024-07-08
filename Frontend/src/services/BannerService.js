import httpAxios from "../httpAxios";

const bannerService={
    get_list: ()=>{
        return httpAxios.get("banner/index");
    },
    store:(data)=>{
        return httpAxios.post("banner/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`banner/edit/${id}`, data);
    },
    delete:(id)=>{
        return httpAxios.delete(`banner/remove/${id}`);
    }, 
    list: (position)=>{
        return httpAxios.get(`banner/list/${position}`);
    },
}

export default bannerService;