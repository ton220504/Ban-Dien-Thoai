import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import orderService from "../../../services/OrderService";




const Order = () => {
    const remove = function (id) {
        try {
            (async () => {
                orderService.delete(id)
            })()
        } catch (error) {
            console.log(error);
        }
    }
    const [orders, setOrder] = useState([]);
    useEffect(function () {
        (async () => {
            const result = await orderService.get_list();
            setOrder(result.orders);
        })();
    });

    return (

        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-danger">Quản lý đơn hàng</strong>
                    </div>
                    <div className="col-6 text-end">
                        <Link className="btn btn-sm btn-success" to="/admin/order/create">
                            Thêm đơn hàng
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <table class="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên Người nhận</th>
                            <th scope="col">Địa chỉ người nhận</th>
                            <th scope="col">Điện thoại người nhận</th>
                            <th scope="col">Email</th>
                            <th scope="col">Chức năng</th>
                            <th scope="col">ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 && orders.map((order, index) => {
                            return (
                                <tr >
                                    <th scope="row">1</th>
                                    <td>{order.deliveryname}</td>
                                    <td>{order.deliveryaddress}</td>
                                    <td>{order.deliveryphone}</td>
                                    <td>{order.deliveryemail}</td>
                                    <td><Link to={`/admin/order/edit/${order.id} `} className="btn btn-sm btn-success mx-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                        </svg>  </Link>

                                        <button className="btn btn-sm btn-danger mx-1" onClick={() => remove(order.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </button>
                                    </td>
                                    <td>{order.id}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Order;