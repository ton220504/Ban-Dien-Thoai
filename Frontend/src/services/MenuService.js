import httpAxios from "../httpAxios";

const menuService={
    get_list: ()=>{
        return httpAxios.get("menu/index");
    },
    store:(data)=>{
        return httpAxios.post("menu/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`menu/edit/${id}`, data);
    },
    delete:( id)=>{
        return httpAxios.delete(`menu/remove/${id}`);
    },
    list: (parent_id, limit)=>{
        return httpAxios.get(`menu/list/${parent_id}/${limit}`);
    },
    listFooter:(position)=>{
        return httpAxios.get(`menu/listfooter/${position}`)
    },
    getshow:(id)=>{
        return httpAxios.get(`menu/show/${id}`);
    }
}

export default menuService;