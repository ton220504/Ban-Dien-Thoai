import { Link } from "react-router-dom";

const DanhMuc = (props) => {
    const dm = props.danhmuc;
    return (
        <div className="danhmuc">
            <button className="row rounded-4 btn btn-light px-4 ">
                <img className="centerbd-placeholder-img rounded mx-auto d-block" src={dm.image} style={{ height: "100px", width: "100%" }} />
                <p className="text-center">{dm.name}</p>
            </button>
        </div>
    );
}
export default DanhMuc;
