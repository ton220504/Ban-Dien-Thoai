import { Link,Outlet } from "react-router-dom";
import Header from "../frontend/Header";
import Footer from "../frontend/Footer";

const LayoutFrontend=()=>{
    return(
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    );
}
export default LayoutFrontend;

