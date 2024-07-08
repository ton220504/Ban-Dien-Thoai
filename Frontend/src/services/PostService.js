import httpAxios from "../httpAxios";

const PostService={
    get_list: ()=>{
        return httpAxios.get("post/index");
    },
    get_list_type: (type)=>{
        return httpAxios.get(`post/index_type/${type}`);
    },
    store:(data)=>{
        return httpAxios.post("post/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`post/edit/${id}`, data);
    },
    delete:(id)=>{
        return httpAxios.delete(`post/remove/${id}`);
    },
    list:(page, limit)=>{
        return httpAxios.get(`post/list/${page}/${limit}`);
    },
    getbyslug:(slug, limit)=>{
        return httpAxios.get(`post/postdetail/${slug}/${limit}`);
    },
    getlistnew:(limit)=>{
        return httpAxios.get(`post/listnew/${limit}`);
    },
    getslugtopic:(topicid,page, limit)=>{
        return httpAxios.get(`post/list_topic/${topicid}/${page}/${limit}`);
    },
    getshow_post:(type)=>{
        return httpAxios.get(`post/show_post/${type}`);
    }
   
    
}

export default PostService;