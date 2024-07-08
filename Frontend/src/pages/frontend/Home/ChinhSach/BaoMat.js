import { useEffect, useState } from "react";
import PageService from "../../../../services/PageService";

const BaoMat = () => {
    const [pages, setPages] = useState([]);
    const [limit, setLimit] = useState(8);
    useEffect(() => {
        (async () => {
            const result = await PageService.get_list_show(3);
            setPages(result.pages)
        })();
    },3);
    return (
        <div className="container">
            <div style={{height:"800px"}}>
               
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
export default BaoMat;