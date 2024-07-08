import { Link } from "react-router-dom";

const Header = () => {
    return (
        <section className="Header">
            <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/admin" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sản phẩm
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/category">Danh mục sản phẩm</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/brand">Thương hiệu sản phẩm</Link></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bài viết
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/post">Tất cả bài viết</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/topic">Chủ đề bài viết</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/page">Trang đơn</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Giao diện
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/menu">Menu</Link></li>
                                    
                                    <li><Link className="dropdown-item" to="/admin/banner">Banner</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" to="" data-bs-toggle="dropdown" aria-expanded="false">Đơn hàng</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/admin/order">Quản lý đơn hàng</Link></li>
                                    <li><Link className="dropdown-item" to="/admin/orderdetail">Chi tiết đơn hàng</Link></li>
                                    
                                </ul>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link "  to="/admin/customer">Khách hàng</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/contact">Liên hệ</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/user">Thành viên</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link "  to="/admin/customer">khách hàng</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
}
export default Header;