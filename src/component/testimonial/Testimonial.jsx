import React from 'react';
import "./Testimonial.css";
import AVTAR1 from '../../assets/t1.jpg';
import AVTAR2 from '../../assets/t2.jpg';
import AVTAR3 from '../../assets/t3.jpg';
import AVTAR4 from '../../assets/t4.jpg';

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        id: 1,
        image: AVTAR1,
        name: 'Shakshi Roi',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugiat, praesentium delectus impedit exercitationem neque rerum, velit commodi accusantium error laboriosam distinctio recusandae dolore dolorem similique obcaecati repellat. Exercitationem, error.'
    },
    {
        id: 2,
        image: AVTAR2,
        name: 'Rahul Mahant',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugiat, praesentium delectus impedit exercitationem neque rerum, velit commodi accusantium error laboriosam distinctio recusandae dolore dolorem similique obcaecati repellat. Exercitationem, error.'
    },
    {
        id: 3,
        image: AVTAR3,
        name: 'Pravin Sheti',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugiat, praesentium delectus impedit exercitationem neque rerum, velit commodi accusantium error laboriosam distinctio recusandae dolore dolorem similique obcaecati repellat. Exercitationem, error.'
    },
    {
        id: 4,
        image: AVTAR4,
        name: 'Moniesh Joeshp',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, fugiat, praesentium delectus impedit exercitationem neque rerum, velit commodi accusantium error laboriosam distinctio recusandae dolore dolorem similique obcaecati repellat. Exercitationem, error.'
    }
]

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <h5>Review From clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonial-container" 

                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            
            >
                {
                    data.map(({id,image,name,review}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client-avatar">
                                    <img src={image} alt="Avatar1" />
                                </div>
                                <h5 className='client-name'>{name}</h5>
                                <small className='client-review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default Testimonial;