const PaxProductDetails = (props) => {
    const { item } = props

    return (
        <>
            <div className="shop-area pt-50 pb-130">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 col-xl-5">
                            <div className="tpshopitem__thumb p-relative fix p-relative mb-35">
                                <img
                                    src={item.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <img
                                src="http://localhost:3000/assets/img/logo/logo.png"
                                height="40px"
                                alt=""
                            />
                            <h1 className="mt-20 mb-30">
                                {item.title}
                            </h1>
                            <p>
                                Introducing the Dejavoo QD4, the ultimate mobile
                                payment terminal designed for businesses on the
                                go. With its sleek design, state-of-the-art
                                security features, and compatibility with
                                various payment methods, the QD4 is a must-have
                                for any entrepreneur looking to streamline their
                                payment processes.
                            </p>

                            <ul
                                className="nav tp-nav-tavs mt-40 nav-fill"
                                id="myTab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="w-100 nav-link"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#key-features"
                                        type="button"
                                        role="tab"
                                        aria-controls="key-features"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >
                                        KEY FEATURES
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="w-100 nav-link active"
                                        id="mission-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#specifications"
                                        type="button"
                                        role="tab"
                                        aria-controls="specifications"
                                        aria-selected="true"
                                        tabIndex="-1"
                                    >
                                        SPECIFICATIONS
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="w-100 nav-link"
                                        id="connection-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#ask-a-question"
                                        type="button"
                                        role="tab"
                                        aria-controls="ask-a-question"
                                        aria-selected="false"
                                        tabIndex="-1"
                                    >
                                        ASK A QUESTION
                                    </button>
                                </li>
                            </ul>

                            <div
                                className="tab-content pt-30"
                                id="myTabContent"
                            >
                                <div
                                    className="tab-pane fade show active"
                                    id="key-features"
                                    role="tabpanel"
                                    aria-labelledby="key-features"
                                >
                                    <div class="tp-about__info-list ab-check-list mb-55">
                                        <ul>
                                            <li><i class="fa-solid fa-check"></i>Versatile Payment Options</li>
                                            <li><i class="fa-solid fa-check"></i>Lightning-fast Processing</li>
                                            <li><i class="fa-solid fa-check"></i>Robust Security Feature</li>
                                            <li><i class="fa-solid fa-check"></i>User-friendly Interface</li>
                                            <li><i class="fa-solid fa-check"></i>Compact and Portable</li>
                                            <li><i class="fa-solid fa-check"></i>Seamless Integration</li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="specifications"
                                    role="tabpanel"
                                    aria-labelledby="specifications"
                                >
                                    <div class="tp-about__info-list ab-check-list mb-55">
                                        <ul>
                                            <li><i class="fa-solid fa-check"></i>Versatile Payment Options</li>
                                            <li><i class="fa-solid fa-check"></i>EMV and NFC Contactless Built In – EMV 4.x L1 and L2 certified</li>
                                            <li><i class="fa-solid fa-check"></i>Quad-Core @ 1.1GHz</li>
                                            <li><i class="fa-solid fa-check"></i>Ethernet, WiFi, USB</li>
                                            <li><i class="fa-solid fa-check"></i>Large touch screen</li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="ask-a-question"
                                    role="tabpanel"
                                    aria-labelledby="ask-a-question"
                                >
                                    <div className="contactform mb-60">
                                        <form id="contact-form" method="post">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="contactform__input mb-30">
                                                        <input
                                                            name="name"
                                                            type="text"
                                                            placeholder="Enter your Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="contactform__input mb-30">
                                                        <input
                                                            name="email"
                                                            type="email"
                                                            placeholder="Enter your mail"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="contactform__input mb-30">
                                                        <textarea
                                                            name="message"
                                                            placeholder="Type your comment"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="contactform__input mb-30-btn">
                                                        <button
                                                            id="button"
                                                            type="submit"
                                                            className="tp-btn w-100"
                                                        >
                                                            Send Message
                                                        </button>
                                                    </div>
                                                    <p className="ajax-response"></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaxProductDetails
