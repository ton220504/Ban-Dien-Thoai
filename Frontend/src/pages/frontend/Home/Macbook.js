import { Link } from "react-router-dom";

const macbook =(props)=>{
    const mac = props.mac;
    return (
       <div className="macbook">
         <div className="row rounded-4 border m-1  bg-white shadow p-3 mb-5 " >
           <div className="mbhinh">
           <Link to={mac.link}><img src={mac.hinh} style={{ height: "100%", width: "100%" }} /></Link>
           </div>
            <h6>{mac.ten}</h6>
            <p className="text-decoration-line-through fw-light">{mac.gia}</p>
            <p className="text-danger" style={{ fontSize: "20px" }}><strong>&nbsp;{mac.giagiam}</strong>&nbsp;</p>
            <div className="container">
                <p className=" rounded-4  bg-light"  style={{ fontSize: "14px" }}>Giảm <strong className="text-danger">&nbsp;250.000₫</strong>&nbsp; khi mua kèm gói bảo hành VIP 12 tháng 1 Đổi 1.</p>
            </div>


        </div>
       </div>
    );
}
export default macbook;