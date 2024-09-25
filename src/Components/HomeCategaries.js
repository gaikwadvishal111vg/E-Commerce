import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
const HomeCat = () => {
const [itemBg, setItemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefes',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec'

]);
    return(
<section className="homeCat">
<div className="container">
    <h3 className="mb-3 hd">Featured Categories</h3>
<Swiper
               
               slidesPerView={10}
               spaceBetween={20}
               navigation={true}
               slidesPerGroup={2}
               pagination={{
                 clickable: true,
               }}
               modules={[Navigation]}
               className="mySwiper">
              {
                itemBg?.map((item,index)=>{
                    return(
                        <SwiperSlide>
                        <div className="item text-center cursor" style={{background:item}}>
                            <img src="https://th.bing.com/th/id/OIP.fbfv1UXqOC93nbKuzwAtPwHaHa?rs=1&pid=ImgDetMain"/>
                        <h6>Red Apples</h6>
                        </div>
                     </SwiperSlide>
                 
                    )
                })
              }  
               
             

               </Swiper>
</div>
</section>
    )
}
export default HomeCat;