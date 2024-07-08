import { useEffect, useState } from "react";
import menuService from "../../services/MenuService";
import { Link } from "react-router-dom";

const MenuFooter =()=>{

    const [menus, setMenus]=useState([]);
    useEffect(()=>{
        (async()=>{
            const result = await menuService.listFooter('footermenu');
            setMenus(result.menus);
        })();
    },[]);


    return(
        <div>
            {menus && menus.length > 0 && menus.map((submenu, index)=>{
                return(
                    <Link key={index} id="cs" className="nav-link  text-white  my-2" to={`/${submenu.link}`}><a>{submenu.name}</a></Link>
                );
            })}
            
        </div>
        
    );
}
export default MenuFooter;