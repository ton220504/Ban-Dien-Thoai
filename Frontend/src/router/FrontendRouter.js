import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import Product from "../pages/frontend/Product";
import ProductCategory from "../pages/frontend/ProductCategory";
import ProductDetail from "../pages/frontend/ProductDetail";
import Gioithieu from "../pages/frontend/Home/Gioithieu";
import MuaHang from "../pages/frontend/Home/ChinhSach/MuaHang";
import BaoMat from "../pages/frontend/Home/ChinhSach/BaoMat";
import VanChuyen from "../pages/frontend/Home/ChinhSach/VanChuyen";
import DoiTra from "../pages/frontend/Home/ChinhSach/DoiTra";
import GioHang from "../pages/frontend/Home/GioHang";
import Post from "../pages/frontend/Home/BaiViet/post";
import PostDetail from "../pages/frontend/Home/BaiViet/PostDetail";
import postList from "../pages/frontend/Home/BaiViet/postList";
import PostNew from "../pages/frontend/Home/BaiViet/PostNew";
import SPTheoLoai from "../pages/frontend/Home/SPTheoLoai";
import SPBrand from "../pages/frontend/SPBrand";
import TopicPost from "../pages/frontend/Home/BaiViet/TopicPost";
import SPTheoDanhMuc from "../pages/frontend/SPTheoDanhMuc";
import DangNhap from "../pages/frontend/Home/DangNhap";
import Dangky from "../pages/frontend/Home/DangKy";


const FrontendRouter =[
    {path: "/", component: Home},
    {path: "/san-pham", component: Product},
    {path: "/san-pham/:slug", component: ProductCategory},
    {path: "/chi-tiet-san-pham/:slug", component: ProductDetail},
    {path: "/lien-he", component: Contact},
    {path: "/gioi-thieu", component: Gioithieu},
    {path: "/chinh-sach-mua-hang", component: MuaHang},
    {path: "/chinh-sach-bao-mat", component: BaoMat},
    {path: "/chinh-sach-van-chuyen", component: VanChuyen},
    {path: "/chinh-sach-doi-tra", component: DoiTra},
    {path: "/gio-hang", component: GioHang},
    {path: "/tat-ca-bai-viet", component: Post},
    {path: "/chi-tiet-bai-viet/:slug", component: PostDetail},
    {path: "/tat-ca-bai-viet/:slug", component: postList},
    {path: "/san-pham-theo-danh-muc/:slug", component: SPTheoDanhMuc},
    {path: "/san-pham-theo-loai/:id", component: SPTheoLoai},
    {path: "/thuong-hieu/:id", component: SPBrand},
    {path: "/chu-de-bai-viet/:id", component: TopicPost},
    {path: "/dang-ky", component: Dangky},
    {path: "/dang-nhap", component: DangNhap},



];
export default FrontendRouter;