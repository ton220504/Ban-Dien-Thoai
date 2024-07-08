import { Outlet } from "react-router-dom";
import Header from "../backend/Header";
import Footer from "../backend/Footer";

const BackendLayout = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
export default BackendLayout;