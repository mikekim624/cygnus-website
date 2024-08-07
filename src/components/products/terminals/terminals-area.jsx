import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Product from './product'

import productsData from '@/data/products/terminals/products.json'

import useLocalStorage from '../../../utils/customHooks/useLocalStorage'

const ProductArea = (props) => {
    const [selectedTerminalId, setSelectedTerminalId] = useState(1)
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [searchError, setSearchError] = useState(false)
    const [baseFilteredProducts, setBaseFilteredProducts] =
        useState(productsData)

    const [accordionOpen, setAccordionOpen] = useLocalStorage('accordionOpen', {
        TerminalTypes: true,
        ConnectionType: false,
        BatteryEquipped: false,
        ReceiptPrinter: false,
        Features: false,
        PricingProgram: false,
    })

    const toggleAccordion = (panel) => {
        setAccordionOpen((prev) => ({
            ...prev,
            [panel]: !prev[panel],
        }))
    }

    const [filters, setFilters] = useLocalStorage('filters', {
        Standalone: false,
        SemiIntegrated: false,
        PinPad: false,
        MobileApp: false,
        Ethernet: false,
        Wifi: false,
        Cellular: false,
        Dial: false,
        BatteryEquipped: null,
        ReceiptPrinter: null,
        SupportsPinPad: false,
        Contactless: false,
        EmailReceipt: false,
        SMSReceipt: false,
        CygnusCashDiscount: false,
        Surcharge: false,
    })

    const applyFilters = () => {
        const isAnyFilterActive = Object.values(filters).some((value) =>
            typeof value === 'boolean' ? value : value !== null
        )

        if (!isAnyFilterActive) {
            setBaseFilteredProducts(productsData)
            setFilterSearch(
                productsData.filter((product) =>
                    product.title.toLowerCase().includes(search.toLowerCase())
                )
            )
            return
        }

        const filtered = productsData.filter((product) => {
            const matchesType =
                (filters.Standalone
                    ? product.terminalType?.includes('Standalone')
                    : true) &&
                (filters.SemiIntegrated
                    ? product.terminalType?.includes('Semi-Integrated')
                    : true) &&
                (filters.PinPad
                    ? product.terminalType?.includes('Pin-Pad')
                    : true) &&
                (filters.MobileApp
                    ? product.terminalType?.includes('Mobile App')
                    : true)

            const matchesConnection =
                (filters.Ethernet
                    ? product.connectionType?.includes('Ethernet')
                    : true) &&
                (filters.Wifi
                    ? product.connectionType?.includes('Wifi')
                    : true) &&
                (filters.Cellular
                    ? product.connectionType?.includes('Cellular')
                    : true) &&
                (filters.Dial ? product.connectionType?.includes('Dial') : true)

            const matchesFeatures =
                (filters.SupportsPinPad
                    ? product.features?.includes('Supports Pin-Pad')
                    : true) &&
                (filters.Contactless
                    ? product.features?.includes('Contactless')
                    : true) &&
                (filters.EmailReceipt
                    ? product.features?.includes('Email Receipt') ||
                      product.features?.includes('Email Receipt (Add-On)')
                    : true) &&
                (filters.SMSReceipt
                    ? product.features?.includes('SMS Receipt') ||
                      product.features?.includes('SMS Receipt (Add-On)')
                    : true) &&
                (filters.BatteryEquipped === 'yes'
                    ? product.features?.includes('Battery Equipped')
                    : filters.BatteryEquipped === 'no'
                    ? !product.features?.includes('Battery Equipped')
                    : true) &&
                (filters.ReceiptPrinter === 'yes'
                    ? product.features?.includes('Prints Receipts')
                    : filters.ReceiptPrinter === 'no'
                    ? !product.features?.includes('Prints Receipts')
                    : true)

            const matchesPricing =
                (filters.CygnusCashDiscount
                    ? product.pricingProgram?.includes('Cygnus Cash Discount')
                    : true) &&
                (filters.Surcharge
                    ? product.pricingProgram?.includes('Surcharge')
                    : true)

            return (
                matchesType &&
                matchesConnection &&
                matchesFeatures &&
                matchesPricing
            )
        })

        setBaseFilteredProducts(filtered)
        setFilterSearch(
            filtered.filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
            )
        )
    }

    // Trigger filtering on both filter and search changes
    useEffect(() => {
        applyFilters()
    }, [filters, search]) // Depend on search state as well

    useEffect(() => {
        onDelaySearch(search)
    }, [search, baseFilteredProducts])

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target
        setFilters((prev) => ({ ...prev, [id]: checked }))
    }

    const handleRadioChange = (event) => {
        const { id, value } = event.target
        setFilters((prev) => ({ ...prev, [id.split('-')[0]]: value }))
    }

    const resetRadioGroup = (filterName) => {
        setFilters((prev) => ({ ...prev, [filterName]: null }))
    }

    const [filterSearch, setFilterSearch] = useState(productsData)

    const moveToProductDetail = (e) => (terminalId, productId) => {
        e.preventDefault()
        const defaultPathName = router.pathname
        router.push(`${defaultPathName}/details/${productId}`)
    }

    const debounceTimeoutRef = useRef(null)
    const debounce = (func, delay) => {
        clearTimeout(debounceTimeoutRef.current)
        debounceTimeoutRef.current = setTimeout(func, delay)
    }

    const onDelaySearch = (search) => {
        if (search.trim().length < 1) {
            setFilterSearch(baseFilteredProducts)
            setSearchError(false)
        } else {
            const result = baseFilteredProducts.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
            )
            setFilterSearch(result)
            setSearchError(result.length === 0)
        }
    }

    const handleInputChange = (e) => {
        const searchValue = e.target.value
        setSearch(searchValue)
        debounce(() => onDelaySearch(searchValue), 500) // Apply search to the filtered results
    }

    useEffect(() => {
        setFilterSearch(productsData)
    }, [productsData])

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
                                                    onChange={(e) =>
                                                        handleInputChange(e)
                                                    }
                                                    value={search}
                                                />
                                                <div className="text-primary">
                                                    <i className="fa-light fa-search fa-lg"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <h4 className="d-flex align-items-center gap-2 mb-4">
                                <i class="fa-light fa-grid-2"></i> Filters
                            </h4>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item border-top-0">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${
                                                !accordionOpen.TerminalTypes &&
                                                'collapsed'
                                            }`}
                                            type="button"
                                            onClick={() =>
                                                toggleAccordion('TerminalTypes')
                                            }
                                            data-bs-toggle="collapse"
                                            data-bs-target="#TerminalTypes"
                                            aria-expanded="true"
                                            aria-controls="TerminalTypes"
                                        >
                                            Terminal Types
                                        </button>
                                    </h2>
                                    <div
                                        id="TerminalTypes"
                                        className={`accordion-collapse collapse ${
                                            accordionOpen.TerminalTypes &&
                                            'show'
                                        }`}
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="Standalone"
                                                    checked={filters.Standalone}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="Standalone"
                                                >
                                                    Standalone
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="SemiIntegrated"
                                                    checked={
                                                        filters.SemiIntegrated
                                                    }
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="SemiIntegrated"
                                                >
                                                    Semi-Integrated
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="PinPad"
                                                    checked={filters.PinPad}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="PinPad"
                                                >
                                                    Pin-Pad
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="MobileApp"
                                                    checked={filters.MobileApp}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="MobileApp"
                                                >
                                                    Mobile App
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${
                                                !accordionOpen.ConnectionType &&
                                                'collapsed'
                                            }`}
                                            type="button"
                                            onClick={() =>
                                                toggleAccordion(
                                                    'ConnectionType'
                                                )
                                            }
                                            data-bs-toggle="collapse"
                                            data-bs-target="#ConnectionType"
                                            aria-expanded="false"
                                            aria-controls="ConnectionType"
                                        >
                                            Connection Type
                                        </button>
                                    </h2>
                                    <div
                                        id="ConnectionType"
                                        className={`accordion-collapse collapse ${
                                            accordionOpen.ConnectionType &&
                                            'show'
                                        }`}
                                    >
                                        <div class="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="Ethernet"
                                                    checked={filters.Ethernet}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="Ethernet"
                                                >
                                                    Ethernet
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="Wifi"
                                                    checked={filters.Wifi}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="Wifi"
                                                >
                                                    Wifi
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="Cellular"
                                                    checked={filters.Cellular}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="Cellular"
                                                >
                                                    Cellular
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="Dial"
                                                    checked={filters.Dial}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="Dial"
                                                >
                                                    Dial
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${
                                                !accordionOpen.BatteryEquipped &&
                                                'collapsed'
                                            }`}
                                            type="button"
                                            onClick={() =>
                                                toggleAccordion(
                                                    'BatteryEquipped'
                                                )
                                            }
                                            data-bs-toggle="collapse"
                                            data-bs-target="#BatteryEquipped"
                                            aria-expanded="false"
                                            aria-controls="BatteryEquipped"
                                        >
                                            Battery Equipped
                                        </button>
                                    </h2>
                                    <div
                                        id="BatteryEquipped"
                                        className={`accordion-collapse collapse ${
                                            accordionOpen.BatteryEquipped &&
                                            'show'
                                        }`}
                                    >
                                        <div class="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="BatteryEquipped"
                                                    id="BatteryEquipped-Yes"
                                                    value="yes"
                                                    checked={
                                                        filters.BatteryEquipped ===
                                                        'yes'
                                                    }
                                                    onChange={handleRadioChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="BatteryEquipped-Yes"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="BatteryEquipped"
                                                    id="BatteryEquipped-No"
                                                    value="no"
                                                    checked={
                                                        filters.BatteryEquipped ===
                                                        'no'
                                                    }
                                                    onChange={handleRadioChange}
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="BatteryEquipped-No"
                                                >
                                                    No
                                                </label>
                                            </div>
                                            {filters.BatteryEquipped ? (
                                                <div className="text-end">
                                                    <button
                                                        className="btn btn-light mt-1"
                                                        onClick={() =>
                                                            resetRadioGroup(
                                                                'BatteryEquipped'
                                                            )
                                                        }
                                                    >
                                                        Reset
                                                    </button>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${
                                                !accordionOpen.ReceiptPrinter &&
                                                'collapsed'
                                            }`}
                                            type="button"
                                            onClick={() =>
                                                toggleAccordion(
                                                    'ReceiptPrinter'
                                                )
                                            }
                                            data-bs-toggle="collapse"
                                            data-bs-target="#ReceiptPrinter"
                                            aria-expanded="false"
                                            aria-controls="ReceiptPrinter"
                                        >
                                            Receipt Printer
                                        </button>
                                    </h2>
                                    <div
                                        id="ReceiptPrinter"
                                        className={`accordion-collapse collapse ${
                                            accordionOpen.ReceiptPrinter &&
                                            'show'
                                        }`}
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ReceiptPrinter"
                                                    id="ReceiptPrinter-Yes"
                                                    value="yes" // Set the value attribute
                                                    checked={
                                                        filters.ReceiptPrinter ===
                                                        'yes'
                                                    } // Conditionally render checked attribute
                                                    onChange={handleRadioChange} // Attach the onChange event handler
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ReceiptPrinter-Yes"
                                                >
                                                    Yes
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="ReceiptPrinter"
                                                    id="ReceiptPrinter-No"
                                                    value="no" // Set the value attribute
                                                    checked={
                                                        filters.ReceiptPrinter ===
                                                        'no'
                                                    } // Conditionally render checked attribute
                                                    onChange={handleRadioChange} // Attach the onChange event handler
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="ReceiptPrinter-No"
                                                >
                                                    No
                                                </label>
                                            </div>
                                            {filters.ReceiptPrinter ? (
                                                <div className="text-end">
                                                    <button
                                                        className="btn btn-light mt-1"
                                                        onClick={() =>
                                                            resetRadioGroup(
                                                                'ReceiptPrinter'
                                                            )
                                                        }
                                                    >
                                                        Reset
                                                    </button>
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${
                                                !accordionOpen.Features &&
                                                'collapsed'
                                            }`}
                                            type="button"
                                            onClick={() =>
                                                toggleAccordion('Features')
                                            }
                                            data-bs-toggle="collapse"
                                            data-bs-target="#Features"
                                            aria-expanded="false"
                                            aria-controls="Features"
                                        >
                                            Features
                                        </button>
                                    </h2>
                                    <div
                                        id="Features"
                                        className={`accordion-collapse collapse ${
                                            accordionOpen.Features && 'show'
                                        }`}
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="SupportsPinPad"
                                                    checked={
                                                        filters.SupportsPinPad
                                                    }
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="SupportsPinPad"
                                                >
                                                    Supports Pin-Pad
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="Contactless"
                                                    checked={
                                                        filters.Contactless
                                                    }
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="Contactless"
                                                >
                                                    Contactless
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="EmailReceipt"
                                                    checked={
                                                        filters.EmailReceipt
                                                    }
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="EmailReceipt"
                                                >
                                                    Email Receipt
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="SMSReceipt"
                                                    checked={filters.SMSReceipt}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="SMSReceipt"
                                                >
                                                    SMS Receipt
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${
                                                !accordionOpen.PricingProgram &&
                                                'collapsed'
                                            }`}
                                            type="button"
                                            onClick={() =>
                                                toggleAccordion(
                                                    'PricingProgram'
                                                )
                                            }
                                            data-bs-toggle="collapse"
                                            data-bs-target="#PricingProgram"
                                            aria-expanded="false"
                                            aria-controls="PricingProgram"
                                        >
                                            Pricing Program
                                        </button>
                                    </h2>
                                    <div
                                        id="PricingProgram"
                                        className={`accordion-collapse collapse ${
                                            accordionOpen.PricingProgram &&
                                            'show'
                                        }`}
                                    >
                                        <div className="accordion-body">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="CygnusCashDiscount"
                                                    checked={
                                                        filters.CygnusCashDiscount
                                                    }
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="CygnusCashDiscount"
                                                >
                                                    Cygnus Cash Discount
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="Surcharge"
                                                    checked={filters.Surcharge}
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="Surcharge"
                                                >
                                                    Surcharge
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9">
                            {filterSearch?.length ? (
                                <div className="mb-2 d-flex align-items-center gap-1">
                                    Total Products:
                                    <span className="text-link fw-bold">
                                        {filterSearch?.length}{' '}
                                    </span>
                                </div>
                            ) : (
                                ''
                            )}

                            {filterSearch?.length ? (
                                <div className="row">
                                    {filterSearch?.map((item) => (
                                        <Product
                                            key={item.id}
                                            item={item}
                                            moveToProductDetail={
                                                moveToProductDetail
                                            }
                                            selectedTerminalId={
                                                selectedTerminalId
                                            }
                                            className="col-xl-4 col-lg-4 col-md-6"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <span>No Product Found</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductArea
