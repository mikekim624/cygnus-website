import React, { useMemo, useState } from 'react'
import valorpay_data from '@/data/products/terminals/valorpay=data'
import pax_data from '@/data/products/terminals/pax-data'
import nmi_data from '@/data/products/terminals/nmi-data'
import firstdata_data from '@/data/products/terminals/firstdata-data'
import dejavoo_data from '@/data/products/terminals/dejavoo-data'
import { terminals } from '@/data/term-solutions'
import { useRouter } from 'next/router'
import Image from 'next/image'

const ProductArea = (props) => {
    const { firstSelected } = props
    const [searchedText, setSearchedText] = useState('')
    const [selectedTerminalId, setSelectedTerminalId] = useState(1)
    const router = useRouter()

    const mergedProducts = useMemo(() => {
        return {
            1: [...pax_data],
            2: [...dejavoo_data],
            3: [...firstdata_data],
            4: [...nmi_data],
            5: [...valorpay_data],
        }
    }, [])

    const products = useMemo(() => {
        if (searchedText === '') {
            return mergedProducts[selectedTerminalId]
        }

        const allProducts = [
            ...pax_data,
            ...dejavoo_data,
            ...firstdata_data,
            ...nmi_data,
            ...valorpay_data,
        ]

        return allProducts.filter((item) => {
            return item.title.toLowerCase().includes(searchedText.toLowerCase())
        })
    }, [selectedTerminalId, mergedProducts, searchedText])

    const moveToProductDetail = (e) => (terminalId, productId) => {
        e.preventDefault()
        const defaultPathName = router.pathname
        router.push(`${defaultPathName}/details/${terminalId}/${productId}`)
    }

    const changeSelectionOfProduct = (e) => (id) => {
        e.preventDefault()
        setSelectedTerminalId(id)
    }

    const setSearchProducts = (e) => {
        setSearchedText(e.target.value)
    }

    return (
        <>
            <div className="shop-area pt-50 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Terminal Solutions</h1>
                            <div className="contactform mb-60 mt-40">
                                <form id="contact-form" method="post">
                                    <div className="row text-center justify-content-center">
                                        <div className="col-lg-6">
                                            <div className="product-search contactform__input position-relative">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Search your product here"
                                                    onChange={setSearchProducts}
                                                    value={searchedText}
                                                />
                                                <div className="text-primary">
                                                    <i class="fa-light fa-search fa-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <ul
                                className="nav tp-nav-tavs right-border mb-70 flex-column gap-4"
                                id="myTab"
                                role="tablist"
                            >
                                {terminals.map((terminal) => {
                                    return (
                                        <li
                                            className="w-100 nav-item"
                                            role="presentation"
                                            key={terminal.id}
                                        >
                                            <button
                                                className={`w-100 nav-link ${
                                                    firstSelected &&
                                                    terminal.id === 1
                                                        ? 'active'
                                                        : ''
                                                }`}
                                                onClick={(e) =>
                                                    changeSelectionOfProduct(e)(
                                                        terminal.id
                                                    )
                                                }
                                                id="home-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="home-tab-pane"
                                                aria-selected="false"
                                                tabIndex="-1"
                                            >
                                                <Image
                                                    priority
                                                    src={terminal.img}
                                                    height={40}
                                                    width={90}
                                                    alt=""
                                                />
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                            <h4 className="d-flex align-items-center gap-2 mb-4">
                                <i class="fa-light fa-grid-2"></i> Filter
                            </h4>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item border-top-0">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Brands
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault1"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault1">Valor</label>
                                        </div>
                                        <div class="form-check">
                                        <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckChecked"
                                                checked
                                            />
                                            <label class="form-check-label" for="flexCheckChecked">Pax</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault2"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault2">Dejawoo</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault3"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault3">nmi</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault4"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault4">First Data</label>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Price
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault1"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault1">Valor</label>
                                        </div>
                                        <div class="form-check">
                                        <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckChecked"
                                                checked
                                            />
                                            <label class="form-check-label" for="flexCheckChecked">Pax</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault2"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault2">Dejawoo</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault3"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault3">nmi</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault4"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault4">First Data</label>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Categories
                                    </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault1"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault1">Valor</label>
                                        </div>
                                        <div class="form-check">
                                        <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckChecked"
                                                checked
                                            />
                                            <label class="form-check-label" for="flexCheckChecked">Pax</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault2"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault2">Dejawoo</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault3"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault3">nmi</label>
                                        </div>
                                        <div class="form-check">
                                            <input
                                                class="form-check-input"
                                                name="name"
                                                type="checkbox"
                                                id="flexCheckDefault4"
                                            />
                                            <label class="form-check-label" for="flexCheckDefault4">First Data</label>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            <div className="row">
                                {products.map((item) => (
                                    <div
                                        key={item.id}
                                        className="col-xl-4 col-lg-4 col-md-6"
                                        onClick={(e) =>
                                            moveToProductDetail(e)(
                                                selectedTerminalId,
                                                item.id
                                            )
                                        }
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
                                                <span className="tpshopitem__title mb-0">
                                                    <h4>{item.title}</h4>
                                                </span>
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
                </div>
            </div>
        </>
    )
}

export default ProductArea
