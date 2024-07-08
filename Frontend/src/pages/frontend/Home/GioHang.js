import { Link } from "react-router-dom";

const GioHang = () => {
    return (
        <div className="container" style={{ height: "600px" }}>
            <div className="card-header">

                <div className="text-center my-4">
                    <strong className="text-danger">Giỏ Hàng</strong>
                </div>


            </div>
            <div className="card-body">
                <table class="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default GioHang;