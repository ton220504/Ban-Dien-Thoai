import { Link } from "react-router-dom";

const iPad = (props) => {
    const ipd = props.ipad;
    return (
        <div className="ipad">
            <div className="row rounded-4 border m-1  bg-white shadow p-3 mb-5 " >
                <div className="idhinh">
                    <Link to={ipd.link}><img src={ipd.hinh} style={{ height: "100%", width: "100%" }} /></Link>
                </div>
                <h6>{ipd.ten}</h6>
                <p className="text-decoration-line-through fw-light">{ipd.gia}</p>
                <p className="text-danger" style={{ fontSize: "20px" }}><strong>&nbsp;{ipd.giagiam}</strong>&nbsp;</p>
                <div className="container">
                    <p className=" rounded-4  bg-light" style={{ fontSize: "14px" }}>Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>
                </div>


            </div>
        </div>

    );
}
export default iPad;