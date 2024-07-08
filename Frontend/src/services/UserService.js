import httpAxios from "../httpAxios";

const UserService={
    get_list: ()=>{
        return httpAxios.get("user/index");
    },
    get_list_roles: (roles)=>{
        return httpAxios.get(`user/index_roles/${roles}`);
    },
    store:(data)=>{
        return httpAxios.post("user/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`user/edit/${id}`, data);
    },
    delete:(id)=>{
        return httpAxios.delete(`user/delete/${id}`);
    }
}

export default UserService;