import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import menuService from "../../services/MenuService";

const MainHD2 = (props) => {
    const menu = props.menu;
    const [menus, setMenus] = useState([]);
    const [productcategory, setProducts] = useState([]);



    useEffect(() => {
        (async () => {
            const result = await menuService.list(menu.id, 8);
            setMenus(result.menus);
            setProducts(result.products);
            //console.log(result);
        })();
    }, []);
    if (menus && menus.length > 0) {
        return (
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"  >
                    {menu.name}
                </Link>
                <ul className="dropdown-menu">
                    {menus.map((menu, index) => {
                        return (
                            <li key={index} value={menu.id}>

                                <Link className="dropdown-item" to={`/san-pham-theo-loai/${menu.id}`}>
                                    {menu.name}
                                </Link>

                            </li>
                        );
                    })}
                </ul>
            </li>

        );
    } else {
        return (
            <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" role="button" to={menu.id} >{menu.name}</Link>
            </li>
        );
    };
    // return (
    //     <div>
    //         <li className="nav-item dropdown">
    //             <Link className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown"  >
    //                 {menu.name}
    //             </Link>
    //             <ul className="dropdown-menu">
    //                 {menus && menus.map((menu, index) => {
    //                     return (
    //                         <li key={index} value={menu.id}>

    //                             <Link className="dropdown-item" to={`/san-pham-theo-loai/${menu.id}`}>
    //                                 {menu.name}
    //                             </Link>

    //                         </li>
    //                     );
    //                 })}
    //             </ul>
    //         </li>
    //     </div>

    // );

}
export default MainHD2;