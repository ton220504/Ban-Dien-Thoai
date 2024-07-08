import { Link } from "react-router-dom";
import menuService from "../../services/MenuService";
import { useEffect, useState } from "react";
import MainHD2 from "./MainHD2";

const MainHD = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await menuService.list(0, 2); 
            setMenus(result.menus);
            //console.log(result);
        })();
    }, []);

    return (
        <div className="nav-item dropdown">
            <ul id="menu-ul" className=" navbar-nav">
                {menus && menus.length > 0 && menus.map((menu, index) => {
                    return (
                        <MainHD2 key={index} menu={menu} />
                    );
                })}
            </ul>
        </div>
    );
}
export default MainHD;