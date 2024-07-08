import { useEffect, useState } from "react";
import bannerService from "../../../services/BannerService";
import { urlImage } from "../../../config";

const Slider = () => {
    const [sliders, setSliders] = useState([]);
    useEffect(() => {
        (async () => {
            const result = await bannerService.list("slideshow");
            setSliders(result.banners);
            //console.log(result);
        })();
    }, []);
    return (

        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                {sliders && sliders.length > 0 && sliders.map((banner, index) => {
                    if (index === 0) {
                        return (
                            <div className="carousel-item active" key={index}>
                                <img src={urlImage + "banner/" + banner.image} className="d-block w-100" alt="..." />
                               
                            </div>
                            
                        );
                    }else{
                        return (
                            <div key={index} className="carousel-item ">
                                <img src={urlImage + "banner/" + banner.image} className="d-block w-100" alt="..." />
                            </div>
                        );
                    }
                })}



            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
}
export default Slider;

