import React from "react";


// progress_data
const progress_data = [
  {
    id: 1,
    icon: "flaticon-approval",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Application Submitted",
    des: (
      <>
        Submit your statement alongside your application <br /> and our in-house underwriting team will review the application.
      </>
    ),
  },
  {
    id: 2,
    icon: "flaticon-flask",
    img: "/assets/img/shape/navtabs-01.png",
    title: "Terminal Deployment",
    des: (
      <>
        If your application is approved we will configure, test, and deploy the equipments
        for you to use to accept payments.
      </>
    ),
  },
  {
    id: 3,
    icon: "flaticon-report",
    img: "",
    title: "Accept Payments",
    des: (
      <>
        Start accepting payments!
      </>
    ),
  },
];

const connection_data = [
  {
    id: 1,
    title: "Up to  50% of our profits go to YOU!",
    des: (
      <>
        You, representing your 501(c) 
        charitable organization, introduce 
        Cygnus Payments Connections 
        to your community business 
        contacts. If they elect to 
        work with Cygnus 
        Connections, 
        we’ll ensure you 
        receive up to 
        50% of the profits 
        your connection 
        generates for Cygnus 
        Payments! It’s that easy!
      </>
    ),
  },
  {
    id: 2,
    title: "More opportunities in your community",
    des: (
      <>
        Local businesses know that 
        their customers are community-focused and looking for simple 
        ways to make a difference 
        right at home.
        Once they see how 
        easy it is to work with 
        Cygnus Payments, 
        more businesses will 
        get involved with your 
        charity, and you benefit!
      </>
    ),
  },
  {
    id: 3,
    title: "More time for you to focus on helping",
    des: (
      <>
        Partnering with Cygnus 
        Connections and local business to 
        generate passive income for your 
        work frees you and your team 
        from the time and effort
        involved in constant fundraising. 
        This gives you and your 
        volunteers and staff more time
        to do what you really love -
        and what your community
        needs most.
      </>
    ),
  },
]

// tab_content
const tab_content = [
  {
    id: 1,
    tab_id: "profile-tab-pane",
    aria_labelledby: "profile-tab",
    header: (
      <>
        To maximize value and minimize cost through a consultative, merchant-focused approach<br />
        to modern point-of-sale solutions and transparent payment processing. 
      </>
    ),
    title: "Our Mission To Provide Best Solutions",
    des_1: (
      <>
        Cygnus Payments tailors robust, cloud-based solutions, leveraging their value to maximize profitability. Currently, Cygnus offer many value-added product lines including: 
      </>
    ),
    des_2: (
      <>
        1. Verticalized POS Equipment<br />
        2. Integrated Payments<br />
        3. Value Added Marketing Programs<br />
        4. Small Business Lending<br />
        5. POS Leasing available

      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-03.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-04.jpg" },
    ],
  },
  {
    id: 2,
    tab_id: "contact-tab-pane",
    aria_labelledby: "contact-tab",
    header: (
      <>
      </>
    ),
    title: "We are Trusted by over 2500+ customers",
    des_1: (
      <>
      </>
    ),
    des_2: (
      <>
      </>
    ),
    images: [
      { order: "order-lg-1", img: "/assets/img/tab/tab-thumb-01.jpg" },
      { order: "order-lg-3", img: "/assets/img/tab/tab-thumb-02.jpg" },
    ],
  },
];
const NavTab = () => {
  return (
    <>
      <section id="nav-area" className="nav-area tp-common-area pt-130 pb-80">
        <div className="container">
          <ul className="nav tp-nav-tavs mb-70 nav-fill" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                OUR PROCESS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="mission-tab"
                data-bs-toggle="tab"
                data-bs-target="#mission-tab-pane"
                type="button"
                role="tab"
                aria-controls="mission-tab-pane"
                aria-selected="true"
                tabIndex="-1"
              >
                OUR MISSION
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="connection-tab"
                data-bs-toggle="tab"
                data-bs-target="#connection-tab-pane"
                type="button"
                role="tab"
                aria-controls="connection-tab-pane"
                aria-selected="false"
                tabIndex="-1"
              >
                CYGNUS CONNECTIONS
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            {/* {tab_content.map((item) => (
              <div
                key={item.id}
                className="tab-pane fade"
                id={`${item.tab_id}`}
                role="tabpanel"
                aria-labelledby={`${item.aria_labelledby}`}
              >
                <span className="nav-info d-flex justify-content-center text-center mb-75">
                  {item.header}
                </span>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                    <div className="nabmission mb-30">
                      <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                        <h4 className="nabmission__title mb-35">
                          {item.title}
                        </h4>
                        <p className="mb-35">{item.des_1}</p>
                        <p>{item.des_2}</p>
                      </div>
                    </div>
                  </div>

                  {item.images.map((img, i) => (
                    <div
                      key={i}
                      className={`col-xl-3 col-lg-3 col-md-6 ${img.order}`}
                    >
                      <div className="nabthumb mb-30">
                        <img src={img.img} alt="tab-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))} */}
            <div
              className="tab-pane fade show active"
              id="mission-tab-pane"
              role="tabpanel"
              aria-labelledby="mission-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                <>
                  To maximize value and minimize cost through a consultative, merchant-focused approach<br />
                  to modern point-of-sale solutions and transparent payment processing. 
                </>
              </span>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 order-lg-2">
                  <div className="nabmission mb-30">
                    <div className="nabmission__content text-center ml-50 mr-50 pt-20">
                      <h4 className="nabmission__title mb-35">
                        Our Mission To Provide Best Solutions
                      </h4>
                      <p className="mb-35">
                        <>
                          Cygnus Payments tailors robust, cloud-based solutions, leveraging their value to maximize profitability. Currently, Cygnus offer many value-added product lines including: 
                        </>
                      </p>
                      <p>
                        <>
                          1. Verticalized POS Equipment<br />
                          2. Integrated Payments<br />
                          3. Value Added Marketing Programs<br />
                          4. Small Business Lending<br />
                          5. POS Leasing available

                        </>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 order-lg-1">
                    <div className="nabthumb mb-30">
                      <img src="/assets/img/tab/tab-thumb-03.jpg" alt="tab-thumb" />
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 order-lg-3">
                    <div className="nabthumb mb-30">
                      <img src="/assets/img/tab/tab-thumb-04.jpg" alt="tab-thumb" />
                    </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                Our process to ensure your payment needs are met
              </span>
              <div className="row">
                {progress_data.map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                    <div className="navtabs nav-primary p-relative text-center mb-40">
                      <div className="navtabs__icon mb-35">
                        <i className={item.icon}></i>
                      </div>
                      <div className="navtabs__content">
                        <h5 className="navtabs__title mb-25 mb-10">
                          {item.title}
                        </h5>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="connection-tab-pane"
              role="tabpanel"
              aria-labelledby="connection-tab"
            >
              <span className="nav-info d-flex justify-content-center text-center mb-75">
                One swipe can make a world of different in YOUR community!
              </span>
              <div className="row d-flex justify-content-center">
                {connection_data.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-3 col-md-6 mr-20 ml-30">
                    <div className="navtabs nav-primary p-relative text-center">
                      <div className="navtabs__content">
                        <h6 className="navtabs__title pr-20 pl-20 pt-30 pb-30 mb-25 theme-bg">
                          {item.title}
                        </h6>
                        <p>{item.des}</p>
                      </div>
                      {item.img && (
                        <div className="navtabs__shape d-none d-lg-block">
                          <img src={item?.img} alt="shape" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavTab;
