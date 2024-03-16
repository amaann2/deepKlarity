/* eslint-disable react/no-unescaped-entities */
import './Testimonial.css'
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { data } from './data'

const Testimonial = () => {

    return (
        <div id="testimonial">
            <h2 className="title">Testimonials</h2>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. . Adipisci quas dolores dicta nemo at atque eius<br /> velit sequi tempora provident? lorem</p>
            <Swiper
                navigation={true}
                grabCursor={true}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                }}
                breakpoints={{
                    800: { slidesPerView: 3 },
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}

                modules={[Autoplay, Pagination]}

                className="mySwiper"
            >
                <div className="container">
                    <div className="testimonial-cards">
                        {data.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="testimonial-card" >
                                    <div className="testimonial-image">
                                        <img src={testimonial.image} alt="" className='testimonial-user' />
                                    </div>
                                    <div className="description">
                                        <p><span>"</span>{testimonial.review}<span>"</span></p>
                                        <h4>Name</h4>
                                        <p>{testimonial.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </div >
                </div >
            </Swiper >

        </div >
    )
}

export default Testimonial