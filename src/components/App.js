import "./App.css";
import Navbar from "./Navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import Footer from "./Footer";

//Arrows for sliders
function PrevArrow({ onClick }) {
  return (
    <div className="slickArrows slickArrowLeft">
      <i className="fa-solid fa-arrow-left" onClick={onClick}></i>
    </div>
  );
}
function NextArrow({ onClick }) {
  return (
    <div className="slickArrows slickArrowRight">
      <i className="fa-solid fa-arrow-right" onClick={onClick}></i>
    </div>
  );
}
function PrevArrow2({ onClick }) {
  return (
    <div className="slickArrows slickArrowLeft slickArrows2">
      <i className="fa-solid fa-arrow-left" onClick={onClick}></i>
    </div>
  );
}
function NextArrow2({ onClick }) {
  return (
    <div className="slickArrows slickArrowRight slickArrows2">
      <i className="fa-solid fa-arrow-right" onClick={onClick}></i>
    </div>
  );
}

function App() {
  // Settings for sliders
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow2 />,
    nextArrow: <NextArrow2 />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  // Data for sliders
  var topTrendingProducts = [
    {
      id: 1,
      flagType: "red",
      imgSrc: "/images/prod-img-1.svg",
    },
    {
      id: 2,
      flagType: "blue",
      imgSrc: "/images/prod-img-1.svg",
    },
    {
      id: 3,
      flagType: "red",
      imgSrc: "/images/prod-img-1.svg",
    },
    {
      id: 4,
      flagType: "blue",
      imgSrc: "/images/prod-img-1.svg",
    },
    {
      id: 5,
      flagType: "red",
      imgSrc: "/images/prod-img-1.svg",
    },
    {
      id: 6,
      flagType: "blue",
      imgSrc: "/images/prod-img-1.svg",
    },
    {
      id: 7,
      flagType: "red",
      imgSrc: "/images/prod-img-1.svg",
    },
  ];
  return (
    <>
      <Navbar />

      <section className="grayBackground1 py-4">
        {/* Carousel */}
        <div className="customCarouselOuterContainer container mb-5">
          <div className="customCarouselContainer">
            <div className="customCarousel">
              <div className="container">
                <div className="row">
                  <div className="order-lg-2 order-md-2 order-sm-2 col-lg-6 col-md-6 col-sm-6 col-xs-12 carouselRight">
                    <img
                      className="img-fluid"
                      src="/images/banner-1.svg"
                      alt=""
                    />
                  </div>
                  <div className="order-lg-1 order-md-1 order-sm-1 col-lg-6 col-md-6 col-sm-6 col-xs-12 carouselLeft">
                    <img
                      className="img-fluid"
                      src="/images/logo_villeroy_bosh.svg"
                      alt=""
                    />
                    <h1>
                      Save Water &amp;
                      <br />
                      Energy with stylish <br />
                      basin by
                      <br />
                      Villeroy &amp; Bosh
                    </h1>
                    <p>
                      From Oct-2021 to Jan-2022 you will receive <br />
                      10% cashback on all purchase price
                    </p>
                    <button className="shopNowBtn">
                      Shop Now
                      <span>
                        <img
                          className="img-fluid"
                          src="/images/icon_cart.svg"
                          alt=""
                        />
                      </span>
                    </button>
                    <div className="carouselDots">
                      <span className="carouselDotActive"></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shopBox shopBox1">
              <h6 className="shopBoxText">
                This weekend all <br />
                sanitary 20%.
              </h6>
              <a className="shopBoxLink" href="#">
                Shop Now
                <span>
                  <svg
                    width="19px"
                    height="15px"
                    fill="#fff"
                    viewBox="0 0 19 15"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Final"
                      stroke="#fff"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        id="XTWO-Home-05"
                        transform="translate(-740.000000, -2725.000000)"
                        stroke="#fff"
                        strokeWidth="1.4"
                      >
                        <g
                          id="product"
                          transform="translate(0.000000, 2102.382922)"
                        >
                          <g
                            id="Group-41"
                            transform="translate(126.000000, 140.000000)"
                          >
                            <g
                              id="Group-43"
                              transform="translate(534.000000, 460.000000)"
                            >
                              <g
                                id="Group-40-Copy"
                                transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                              >
                                <g
                                  id="arrow-right"
                                  transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                                >
                                  <line
                                    x1="16.5"
                                    y1="6"
                                    x2="0"
                                    y2="6"
                                    id="Path"
                                  ></line>
                                  <polyline
                                    id="Path"
                                    points="10.5 0 16.5 6 10.5 12"
                                  ></polyline>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </div>

            <div className="shopBox shopBox2">
              <h6 className="shopBoxText">
                Improve your bathroom <br />
                with Grohe Start.
              </h6>
              <a className="shopBoxLink" href="#">
                Shop Now
                <span>
                  <svg
                    width="19px"
                    height="15px"
                    fill="#fff"
                    viewBox="0 0 19 15"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Final"
                      stroke="#fff"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <g
                        id="XTWO-Home-05"
                        transform="translate(-740.000000, -2725.000000)"
                        stroke="#fff"
                        strokeWidth="1.4"
                      >
                        <g
                          id="product"
                          transform="translate(0.000000, 2102.382922)"
                        >
                          <g
                            id="Group-41"
                            transform="translate(126.000000, 140.000000)"
                          >
                            <g
                              id="Group-43"
                              transform="translate(534.000000, 460.000000)"
                            >
                              <g
                                id="Group-40-Copy"
                                transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                              >
                                <g
                                  id="arrow-right"
                                  transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                                >
                                  <line
                                    x1="16.5"
                                    y1="6"
                                    x2="0"
                                    y2="6"
                                    id="Path"
                                  ></line>
                                  <polyline
                                    id="Path"
                                    points="10.5 0 16.5 6 10.5 12"
                                  ></polyline>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* 1st scroll */}
        <div className="nbCardContainer container mb-5">
          <div className="row pb-4">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="row">
                <div className="col-3">
                  <div className="cardIconContainer">
                    <img
                      className="img-fluid"
                      src="/images/icon-gift-box.svg"
                      alt="Gift box"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="nbCardHeading">
                    Download the app get 5% off!
                  </h3>
                  <p className="nbCardText">
                    Lorem ipsum is simply dummy text of the printing and
                    industry.
                  </p>
                  <a className="learnMore" href="#">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="row">
                <div className="col-3">
                  <div className="cardIconContainer">
                    <img
                      className="img-fluid"
                      src="/images/icon-magic-wand.svg"
                      alt="Gift box"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="nbCardHeading">
                    Refurbish your
                    <br /> bathroom
                  </h3>
                  <p className="nbCardText">
                    Lorem ipsum is simply dummy text of the printing and
                    industry.
                  </p>
                  <a className="learnMore" href="#">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="row">
                <div className="col-3">
                  <div className="cardIconContainer">
                    <img
                      className="img-fluid"
                      src="/images/icon-delivery-package.svg"
                      alt="Gift box"
                    />
                  </div>
                </div>
                <div className="col-9">
                  <h3 className="nbCardHeading">Free shipping over $600.00</h3>
                  <p className="nbCardText">
                    Lorem ipsum is simply dummy text of the printing and
                    industry.
                  </p>
                  <a className="learnMore" href="#">
                    learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="greyHr" />
        </div>
        {/* Shop by Category */}
        <div className="container mb-5 pb-5">
          <div className="headingContainer mb-4">
            <h1 className="heading">Shop by category</h1>
            <a className="seeAll" href="#">
              see all products
              <span>
                <svg
                  width="19px"
                  height="15px"
                  viewBox="0 0 19 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x</title>
                  <g
                    id="Final"
                    stroke="#E2E8EC"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="XTWO-Home-05"
                      transform="translate(-740.000000, -2725.000000)"
                      stroke="#0E66B4"
                      strokeWidth="1.4"
                    >
                      <g
                        id="product"
                        transform="translate(0.000000, 2102.382922)"
                      >
                        <g
                          id="Group-41"
                          transform="translate(126.000000, 140.000000)"
                        >
                          <g
                            id="Group-43"
                            transform="translate(534.000000, 460.000000)"
                          >
                            <g
                              id="Group-40-Copy"
                              transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                            >
                              <g
                                id="arrow-right"
                                transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                              >
                                <line
                                  x1="16.5"
                                  y1="6"
                                  x2="0"
                                  y2="6"
                                  id="Path"
                                ></line>
                                <polyline
                                  id="Path"
                                  points="10.5 0 16.5 6 10.5 12"
                                ></polyline>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="categoryCard">
                <h5>Shower Systems</h5>
                <p>27 Product</p>
                <span className="cardBigText">01</span>
                <img className="img-fluid" src="/images/cat-1.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="categoryCard">
                <h5>Toilet &amp; Bidets</h5>
                <p>27 Product</p>
                <span className="cardBigText">02</span>
                <img className="img-fluid" src="/images/cat-2.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="categoryCard">
                <h5>Washbasins</h5>
                <p>27 Product</p>
                <span className="cardBigText">03</span>
                <img className="img-fluid" src="/images/cat-3.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="categoryCard">
                <h5>Bath Fitting</h5>
                <p>27 Product</p>
                <span className="cardBigText">04</span>
                <img className="img-fluid" src="/images/cat-4.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Trending Sales */}
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="trendingCard">
                <div className="row">
                  <div className="col-6">
                    <p>trending sale</p>
                    <h4>
                      40% Flat on <br /> Bathtubs
                    </h4>
                    <a className="seeAll" href="#">
                      shop now
                      <span>
                        <svg
                          width="19px"
                          height="15px"
                          viewBox="0 0 19 15"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>
                            06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x
                          </title>
                          <g
                            id="Final"
                            stroke="#E2E8EC"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="XTWO-Home-05"
                              transform="translate(-740.000000, -2725.000000)"
                              stroke="#0E66B4"
                              strokeWidth="1.4"
                            >
                              <g
                                id="product"
                                transform="translate(0.000000, 2102.382922)"
                              >
                                <g
                                  id="Group-41"
                                  transform="translate(126.000000, 140.000000)"
                                >
                                  <g
                                    id="Group-43"
                                    transform="translate(534.000000, 460.000000)"
                                  >
                                    <g
                                      id="Group-40-Copy"
                                      transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                                    >
                                      <g
                                        id="arrow-right"
                                        transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                                      >
                                        <line
                                          x1="16.5"
                                          y1="6"
                                          x2="0"
                                          y2="6"
                                          id="Path"
                                        ></line>
                                        <polyline
                                          id="Path"
                                          points="10.5 0 16.5 6 10.5 12"
                                        ></polyline>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="col-6">
                    <div className="trendingCardImgContainer">
                      <img
                        className="img-fluid"
                        src="/images/fav-sink-modern-bathroom.svg"
                        alt="Bathtub"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trendingCard">
                <div className="row">
                  <div className="col-6">
                    <div className="trendingCardImgContainer me-2">
                      <img
                        className="img-fluid"
                        src="/images/fav-shower.svg"
                        alt="Shower"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <p>trending sale</p>
                    <h4>
                      40% Flat on <br /> Bathtubs
                    </h4>
                    <a className="seeAll" href="#">
                      shop now
                      <span>
                        <svg
                          width="19px"
                          height="15px"
                          viewBox="0 0 19 15"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>
                            06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x
                          </title>
                          <g
                            id="Final"
                            stroke="#E2E8EC"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="XTWO-Home-05"
                              transform="translate(-740.000000, -2725.000000)"
                              stroke="#0E66B4"
                              strokeWidth="1.4"
                            >
                              <g
                                id="product"
                                transform="translate(0.000000, 2102.382922)"
                              >
                                <g
                                  id="Group-41"
                                  transform="translate(126.000000, 140.000000)"
                                >
                                  <g
                                    id="Group-43"
                                    transform="translate(534.000000, 460.000000)"
                                  >
                                    <g
                                      id="Group-40-Copy"
                                      transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                                    >
                                      <g
                                        id="arrow-right"
                                        transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                                      >
                                        <line
                                          x1="16.5"
                                          y1="6"
                                          x2="0"
                                          y2="6"
                                          id="Path"
                                        ></line>
                                        <polyline
                                          id="Path"
                                          points="10.5 0 16.5 6 10.5 12"
                                        ></polyline>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner */}
        <div className="container mb-5">
          <div className="discoverBanner">
            <img
              className="img-fluid discoverBannerBg"
              src="/images/bg-circle.svg"
              alt=""
            />
            <div className="row">
              <div className="col-lg-6">
                <img className="img-fluid" src="/images/discover.svg" alt="" />
              </div>
              <div className="col-lg-6">
                <p>
                  The most amazing water <br />
                  experiences
                </p>
                <h2>
                  Discover the right shower for your personal wellbeing moment
                </h2>
                <a className="discoverLink" href="#">
                  view more
                  <span>
                    <svg
                      width="19px"
                      height="15px"
                      viewBox="0 0 19 15"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x</title>
                      <g
                        id="Final"
                        stroke="#fff"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <g
                          id="XTWO-Home-05"
                          transform="translate(-740.000000, -2725.000000)"
                          stroke="#fff"
                          strokeWidth="1.4"
                        >
                          <g
                            id="product"
                            transform="translate(0.000000, 2102.382922)"
                          >
                            <g
                              id="Group-41"
                              transform="translate(126.000000, 140.000000)"
                            >
                              <g
                                id="Group-43"
                                transform="translate(534.000000, 460.000000)"
                              >
                                <g
                                  id="Group-40-Copy"
                                  transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                                >
                                  <g
                                    id="arrow-right"
                                    transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                                  >
                                    <line
                                      x1="16.5"
                                      y1="6"
                                      x2="0"
                                      y2="6"
                                      id="Path"
                                    ></line>
                                    <polyline
                                      id="Path"
                                      points="10.5 0 16.5 6 10.5 12"
                                    ></polyline>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Top Trending Products Slider */}
        <div className="sliderOuterContainer container mb-5">
          <div className="headingContainer mb-4">
            <h1 className="heading">
              Top Trending <br /> Products
            </h1>
            <a className="seeAll" href="#">
              see all products
              <span>
                <svg
                  width="19px"
                  height="15px"
                  viewBox="0 0 19 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x</title>
                  <g
                    id="Final"
                    stroke="#E2E8EC"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="XTWO-Home-05"
                      transform="translate(-740.000000, -2725.000000)"
                      stroke="#0E66B4"
                      strokeWidth="1.4"
                    >
                      <g
                        id="product"
                        transform="translate(0.000000, 2102.382922)"
                      >
                        <g
                          id="Group-41"
                          transform="translate(126.000000, 140.000000)"
                        >
                          <g
                            id="Group-43"
                            transform="translate(534.000000, 460.000000)"
                          >
                            <g
                              id="Group-40-Copy"
                              transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                            >
                              <g
                                id="arrow-right"
                                transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                              >
                                <line
                                  x1="16.5"
                                  y1="6"
                                  x2="0"
                                  y2="6"
                                  id="Path"
                                ></line>
                                <polyline
                                  id="Path"
                                  points="10.5 0 16.5 6 10.5 12"
                                ></polyline>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
          <Slider {...settings}>
            {topTrendingProducts.map((product) => (
              <SliderCard
                key={product.id}
                flagType={product.flagType}
                imgSrc={product.imgSrc}
              />
            ))}
          </Slider>
        </div>
      </section>
      <section className="grayBackground2 py-4">
        {/* Brands */}
        <div className="container mt-3 mb-4">
          <img className="img-fluid" src="/images/brands-logo.jpg" alt="" />
        </div>
        {/* Trending Sale cards - Dark */}
        <div className="trendingContainer container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="trendingCardDark trendingCardDark1">
                <div className="row">
                  <div className="col-6">
                    <p>trending sale</p>
                    <h4>
                      40% Flat on
                      <br /> Bathtubs.
                    </h4>
                    <a href="#">
                      shop now
                      <span>
                        <svg
                          width="19px"
                          height="15px"
                          viewBox="0 0 19 15"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>
                            06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x
                          </title>
                          <g
                            id="Final"
                            stroke="#fff"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="XTWO-Home-05"
                              transform="translate(-740.000000, -2725.000000)"
                              stroke="#fff"
                              strokeWidth="1.4"
                            >
                              <g
                                id="product"
                                transform="translate(0.000000, 2102.382922)"
                              >
                                <g
                                  id="Group-41"
                                  transform="translate(126.000000, 140.000000)"
                                >
                                  <g
                                    id="Group-43"
                                    transform="translate(534.000000, 460.000000)"
                                  >
                                    <g
                                      id="Group-40-Copy"
                                      transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                                    >
                                      <g
                                        id="arrow-right"
                                        transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                                      >
                                        <line
                                          x1="16.5"
                                          y1="6"
                                          x2="0"
                                          y2="6"
                                          id="Path"
                                        ></line>
                                        <polyline
                                          id="Path"
                                          points="10.5 0 16.5 6 10.5 12"
                                        ></polyline>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src="/images/trending-banner-1.svg"
                      alt="Bathtub"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trendingCardDark trendingCardDark2">
                <div className="row">
                  <div className="col-6">
                    <p>trending sale</p>
                    <h4>
                      40% Flat on
                      <br /> Bath fittings
                    </h4>
                    <a href="#">
                      shop now
                      <span>
                        <svg
                          width="19px"
                          height="15px"
                          viewBox="0 0 19 15"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>
                            06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x
                          </title>
                          <g
                            id="Final"
                            stroke="#fff"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <g
                              id="XTWO-Home-05"
                              transform="translate(-740.000000, -2725.000000)"
                              stroke="#fff"
                              strokeWidth="1.4"
                            >
                              <g
                                id="product"
                                transform="translate(0.000000, 2102.382922)"
                              >
                                <g
                                  id="Group-41"
                                  transform="translate(126.000000, 140.000000)"
                                >
                                  <g
                                    id="Group-43"
                                    transform="translate(534.000000, 460.000000)"
                                  >
                                    <g
                                      id="Group-40-Copy"
                                      transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                                    >
                                      <g
                                        id="arrow-right"
                                        transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                                      >
                                        <line
                                          x1="16.5"
                                          y1="6"
                                          x2="0"
                                          y2="6"
                                          id="Path"
                                        ></line>
                                        <polyline
                                          id="Path"
                                          points="10.5 0 16.5 6 10.5 12"
                                        ></polyline>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="col-6">
                    <img
                      className="img-fluid"
                      src="/images/trending-banner-2.svg"
                      alt="Bathtub"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Featured Products Slider */}
        <div className="sliderOuterContainer container mb-5 pb-5">
          <div className="headingContainer mb-4">
            <h1 className="heading">Featured Products</h1>
            <a className="seeAll" href="#">
              see all products
              <span>
                <svg
                  width="19px"
                  height="15px"
                  viewBox="0 0 19 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x</title>
                  <g
                    id="Final"
                    stroke="#E2E8EC"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="XTWO-Home-05"
                      transform="translate(-740.000000, -2725.000000)"
                      stroke="#0E66B4"
                      strokeWidth="1.4"
                    >
                      <g
                        id="product"
                        transform="translate(0.000000, 2102.382922)"
                      >
                        <g
                          id="Group-41"
                          transform="translate(126.000000, 140.000000)"
                        >
                          <g
                            id="Group-43"
                            transform="translate(534.000000, 460.000000)"
                          >
                            <g
                              id="Group-40-Copy"
                              transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                            >
                              <g
                                id="arrow-right"
                                transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                              >
                                <line
                                  x1="16.5"
                                  y1="6"
                                  x2="0"
                                  y2="6"
                                  id="Path"
                                ></line>
                                <polyline
                                  id="Path"
                                  points="10.5 0 16.5 6 10.5 12"
                                ></polyline>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
          <Slider {...settings2}>
            {topTrendingProducts.map((product) => (
              <SliderCard
                key={product.id}
                flagType={product.flagType}
                imgSrc={product.imgSrc}
              />
            ))}
          </Slider>
        </div>
      </section>
      <section className="grayBackground3 py-5">
        {/* More About xTW0 Store */}
        <div className="container pt-4">
          <div className="headingContainer mb-4">
            <h1 className="heading">
              More About
              <br /> xTW0 Store
            </h1>
            <a className="seeAll" href="#">
              see more
              <span>
                <svg
                  width="19px"
                  height="15px"
                  viewBox="0 0 19 15"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>06766BB9-788D-4E08-BCD9-924EE947FD19@1.5x</title>
                  <g
                    id="Final"
                    stroke="#E2E8EC"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      id="XTWO-Home-05"
                      transform="translate(-740.000000, -2725.000000)"
                      stroke="#0E66B4"
                      strokeWidth="1.4"
                    >
                      <g
                        id="product"
                        transform="translate(0.000000, 2102.382922)"
                      >
                        <g
                          id="Group-41"
                          transform="translate(126.000000, 140.000000)"
                        >
                          <g
                            id="Group-43"
                            transform="translate(534.000000, 460.000000)"
                          >
                            <g
                              id="Group-40-Copy"
                              transform="translate(90.000000, 30.000000) scale(-1, 1) translate(-90.000000, -30.000000) translate(60.000000, 0.000000)"
                            >
                              <g
                                id="arrow-right"
                                transform="translate(30.250000, 30.000000) scale(-1, 1) translate(-30.250000, -30.000000) translate(22.000000, 24.000000)"
                              >
                                <line
                                  x1="16.5"
                                  y1="6"
                                  x2="0"
                                  y2="6"
                                  id="Path"
                                ></line>
                                <polyline
                                  id="Path"
                                  points="10.5 0 16.5 6 10.5 12"
                                ></polyline>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="moreCard">
                <img
                  className="img-fluid"
                  src="/images/bottom-banner-1.svg"
                  alt=""
                />
                <p>
                  As a business customer, you benefit from special
                  <br /> conditions
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="moreCard">
                <img
                  className="img-fluid"
                  src="/images/bottom-banner-2.svg"
                  alt=""
                />
                <p>Take advantage of our special occasion offer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
              <div className="moreCard">
                <img
                  className="img-fluid"
                  src="/images/bottom-banner-3.svg"
                  alt=""
                />
                <p>
                  Would you like to see and touch the products of your choice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
