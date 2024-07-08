import nen from "../../../assets/Logo/nenTTM.webp";
import ip15 from "../../../assets/Logo/ip-m.webp"

const thongtin = () => {
    return (
        <div className="mt-5" style={{ background: `url("${nen}")`, width: "100%", height: "600px" }} >
            <div className="container">
                <h2 className="text-center pt-4">Thông tin sản phẩm mới</h2>
                <div className="row">
                    <div className="col-7">
                        <div class="sub-title text-danger" style={{ paddingTop: "100px" }}>iPhone 15 - 15 Pro Max</div>
                        <h3 style={{ paddingTop: "20px" }}> iPhone 15 Pro Max sẽ có viền màn hình mỏng nhất thế giới. </h3>
                        <div class="desc" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                            Theo Apple Insider, dựa trên những bản CAD (thiết kế có sự hỗ trợ của máy tính) rò rỉ gần đây,
                            iPhone 15 Pro Max có thể dày hơn iPhone 14 Pro Max, mặc dù phần lồi camera nhỏ hơn một chút.
                            Thông tin mới nhất từ chuyên gia rò rỉ Ice Universe tiết lộ kích thước 1,55 mm của phần khung viền trên iPhone 15 Pro Max
                            sẽ phá kỷ lục trước đó được thiết lập bởi Xiaomi 13 là 1,81mm.

                        </div>

                        <button type="button" class="btn btn-outline-secondary " >Tìm hiểu thêm</button>

                    </div>
                    <div className="col-5" >
                        <div className="row" style={{ background: `url("${ip15}")`, width: "520x", height: "500px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default thongtin;