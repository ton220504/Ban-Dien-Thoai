import httpAxios from "../httpAxios";

const TopicService={
    get_list: ()=>{
        return httpAxios.get("topic/index");
    },
    store:(data)=>{
        return httpAxios.post("topic/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`topic/edit/${id}`, data);
    },
    delete:( id)=>{
        return httpAxios.delete(`topic/remove/${id}`);
    },
    list:(page, limit)=>{
        return httpAxios.get(`topic/list/${page}/${limit}`);
    },
    getshow:(id)=>{
        return httpAxios.get(`topic/show/${id}`);
    }
}

export default TopicService;