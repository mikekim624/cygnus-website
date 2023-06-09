import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// slider setting
const setting = {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.team-n',
        prevEl: '.team-p',
    },
}

// brands_img;
const brands_img = [
    { img: '/assets/img/brand/brand-01.png' },
    { img: '/assets/img/brand/brand-02.png' },
    { img: '/assets/img/brand/brand-03.png' },
    { img: '/assets/img/brand/brand-04.png' },
]

const Brands = ({ style_2 = false, border_style = false }) => {
    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
        setIsLoop(true)
    }, [])
    return (
        <>
            <div
                className={`brand-area ${
                    style_2
                        ? 'tp-common-area grey-bg pb-120'
                        : border_style
                        ? 'pt-60 pb-60'
                        : 'pt-130 pb-130'
                } `}
            >
                <div className="container">
                    <div
                        className={`row ${
                            border_style ? 'brand-border pt-60 pb-60' : ''
                        } d-flex justify-content-center`}
                    >
                        {brands_img.map((item, i) => (
                            <div 
                                className="col-md-6 mb-50 text-center wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <img
                                    src={item.img}
                                    alt="brand"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands
