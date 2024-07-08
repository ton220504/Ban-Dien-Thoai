import { useEffect, useState } from "react";
import orderService from "../../../services/OrderService";



const OrderCreate = () => {
    const [deliveryname, setDeliveryname] = useState("");
    const [deliveryphone, setDeliveryphone] = useState("");
    const [deliveryaddress, setDeliveryaddress] = useState("");
    const [deliveryemail, setDeliveryemail] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        var formdata = new FormData();
        
        formdata.append("deliveryname", deliveryname);
        formdata.append("deliveryphone", deliveryphone);
        formdata.append("deliveryaddress", deliveryaddress);
        formdata.append("deliveryemail", deliveryemail);
       
        formdata.append("status", status);
        
        

        (async function () {
            const result = await orderService.store(formdata);
            console.log(result);
        })();
    };

    return (
        <form >
            <div className="card bg-light" onSubmit={handleSubmit}>
                <div className="card-header">
                    <div className="row">
                        <div className="col-6">
                            <strong>Thêm đơn hàng</strong>
                        </div>
                        <div className="col-6 text-end"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="mb-3">
                                <label>
                                    <strong>Tên người nhận</strong>
                                </label>
                                <input type="text" placeholder="Tên người nhận" className="form-control" value={deliveryname} onChange={(e) => setDeliveryname(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Điện thoại người nhận</strong>
                                </label>
                                <input type="text" placeholder="Điện thoại người nhận" className="form-control" value={deliveryphone} onChange={(e) => setDeliveryphone(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label>
                                    <strong>Email người nhận</strong>
                                </label>
                                <input type="email" placeholder="Email người nhận" className="form-control" value={deliveryemail} onChange={(e) => setDeliveryemail(e.target.value)} />
                            </div>
                            
                            <button className="btn btn-success" onClick={handleSubmit} >Lưu[Thêm]</button>
                        </div>
                        <div className="col-md-3">
                        <div className="mb-3">
                                <label>
                                    <strong>Địa chỉ người nhận</strong>
                                </label>
                                <input type="email" placeholder="Địa chỉ người nhận" className="form-control" value={deliveryaddress} onChange={(e) => setDeliveryaddress(e.target.value)} />
                            </div>
                        <div className="mb-3">
                                <label>
                                    <strong>Danh mục</strong>
                                </label>
                                <select className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1">xua ban</option>
                                    <option value="2">chua xua ban</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    );
}
export default OrderCreate;