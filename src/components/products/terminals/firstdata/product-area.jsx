import firstdata_data from '@/data/products/terminals/firstdata-data'
import NiceSelect from '@/ui/nice-select'
import Link from 'next/link'
import React from 'react'

const ProductArea = () => {
    const selectHandler = (e) => {}
    return (
        <>
            <div className="shop-area pt-50 pb-130">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                    <div className="row">
                        {firstdata_data.map((item) => (
                            <div
                                key={item.id}
                                className="col-xl-3 col-lg-4 col-md-4"
                            >
                                <div
                                    className="tpshopitem mb-50 wow fadeInUp"
                                    data-wow-delay=".6s"
                                >
                                    <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                                            <img
                                                src={item.img}
                                                alt="shop-thumb"
                                            />
                                    </div>
                                    <div className="tpshopitem__content text-center">
                                        <span className="tpshopitem__title mb-5">
                                                {item.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductArea
