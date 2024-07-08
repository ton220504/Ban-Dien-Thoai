import { Link } from "react-router-dom";

const Category = (props) => {
    const cat = props.cat;
    return (
       <div className="category">
         <a href={cat.link}>
            <img className="" src={cat.bgimage} style={{ width: "400px" }} />
            
        </a>
       </div>
    );
}
export default Category;