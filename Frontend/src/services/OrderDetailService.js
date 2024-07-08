import httpAxios from "../httpAxios";

const orderdetailService={
    get_list: ()=>{
        return httpAxios.get("orderdetail/index");
    },
    delete:( id)=>{
        return httpAxios.delete(`orderdetail/delete/${id}`);
    }
}

export default orderdetailService;