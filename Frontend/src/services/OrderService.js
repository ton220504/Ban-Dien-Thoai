import httpAxios from "../httpAxios";

const orderService={
    get_list: ()=>{
        return httpAxios.get("order/index");
    },
    store:(data)=>{
        return httpAxios.post("order/store",data);
    },
    edit:(data, id)=>{
        return httpAxios.put(`order/edit/${id}`, data);
    },
    delete:( id)=>{
        return httpAxios.delete(`order/delete/${id}`);
    }
}

export default orderService;