
import Slider from "react-slick";

const Banner = () => {
   
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        cssEase: "linear",
     
        appendDots: (dots) => (
            <div style={{ display:"none" }}><ul >{dots}</ul></div>
        ),
        
    };
    return (
        <div className="w-full ">
            <div className=" w-full h-full relative">
                <Slider {...settings}>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg" alt="bannerOne" />
                    </div>
                    <div className="">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/FDFO_-HI---HMD---GW-heros_3000X1200._CB541673610_.jpg" alt="" />
                    </div>
                    <div className="">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg" alt="" />
                    </div>
                    <div className="">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg" alt="" />
                    </div>
                    <div className="">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg" alt="" />
                    </div>
                    <div className="">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/2-1._CB565867124_.jpg" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Banner
