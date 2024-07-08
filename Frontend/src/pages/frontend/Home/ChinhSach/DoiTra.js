import { useEffect, useState } from "react";
import PageService from "../../../../services/PageService";

const MuaHang = () => {
    const [pages, setPages] = useState([]);
    const [limit, setLimit] = useState(8);
    useEffect(() => {
        (async () => {
            const result = await PageService.get_list_show(5);
            setPages(result.pages)
        })();
    },5);
    return (
        <div className="container">
            <div style={{height:"500px"}}>
               
                {pages.length>0 && pages && pages.map((page, index)=>{
                    return(
                        <div key={index}>
                            <h2>{page.name}</h2>
                            <p>{page.detail}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default MuaHang;