import { Link } from "react-router-dom";

const watch = (props) => {
    const wat = props.wat;
    return (
        <div className="watch">
            <div className="row rounded-4 border m-1  bg-white shadow p-3 mb-5 " >
                <div className="whinh">
                    <Link to={wat.link}><img src={wat.hinh} style={{ height: "100%", width: "100%" }} /></Link>
                </div>
                <h6>{wat.ten}</h6>
                <p className="text-decoration-line-through fw-light">{wat.gia}</p>
                <p className="text-danger" style={{ fontSize: "20px" }}><strong>&nbsp;{wat.giagiam}</strong>&nbsp;</p>
                <div className="container">
                    <p className=" rounded-4  bg-light" style={{ fontSize: "14px" }}>Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>
                </div>


            </div>
        </div>
    );
}
export default watch;