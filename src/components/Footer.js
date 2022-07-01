import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img className="img-fluid bgFooter1" src="/images/bg-circle.svg" alt="" />
      <img className="img-fluid bgFooter2" src="/images/bg-circle.svg" alt="" />
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-0"></div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="footerLinks">
                    <h6 className="footerLinkHeading">shop</h6>
                    <ul>
                      <li>
                        <a href="#">shipping</a>
                      </li>
                      <li>
                        <a href="#">delivery time</a>
                      </li>
                      <li>
                        <a href="#">payment</a>
                      </li>
                      <li>
                        <a href="#">warranty</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="footerLinks">
                    <h6 className="footerLinkHeading">about</h6>
                    <ul>
                      <li>
                        <a href="#">about xtwo</a>
                      </li>
                      <li>
                        <a href="#">business customer</a>
                      </li>
                      <li>
                        <a href="#">showroom</a>
                      </li>
                      <li>
                        <a href="#">contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="footerLinks">
                    <h6 className="footerLinkHeading">legal</h6>
                    <ul>
                      <li>
                        <a href="#">terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">return policy</a>
                      </li>
                      <li>
                        <a href="#">privacy policy</a>
                      </li>
                      <li>
                        <a href="#">imprint</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footerSubscribeSection">
                <h6 className="footerSubscribeHeading">
                  Get comfortable &amp; stay a while
                </h6>
                <p>
                  Subscribe to our newsletter and get 10% off first purchase
                </p>
                <div className="footerInputContainer">
                  <i className="fa-solid fa-envelope footerInputIcon"></i>
                  <input
                    className="footerInput"
                    type="text"
                    placeholder="Email address"
                  />
                  <button className="footerInputBtn">
                    <i className="fa-solid fa-arrow-right footerBtnIcon"></i>
                  </button>
                </div>
                <p>
                  By signing up, you agree that we may send you e-mail
                  marketing. You can opt-out of e-mail marketing at any time.
                  See our privacy policy for more information.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-2">
            <div className="col-lg-2">
              <img
                className="img-fluid mt-5 pt-4 footerLogo"
                src="/images/logo.svg"
                alt=""
              />
            </div>
            <div className="col-lg-8">
              <div className="row mb-3">
                <div className="col-12 ">
                  <img
                    className="img-fluid me-3"
                    src="/images/visa.png"
                    alt=""
                  />
                  <img
                    className="img-fluid me-3"
                    src="/images/paypal.png"
                    alt=""
                  />
                  <img
                    className="img-fluid me-3"
                    src="/images/applepay.png"
                    alt=""
                  />
                  <img
                    className="img-fluid me-3"
                    src="/images/mastero.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-12">
                  <span className="me-4">
                    All rights reserved - &copy; 2021 xTWO store
                  </span>
                  <span className="me-4">Privacy Policy</span>
                  <span className="me-4">Terms of use</span>
                  <span className="me-4">Accessibility Policy</span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <a href="mailto:help@xtwostore.com">help@xtwostore.com</a>
                  <span className="me-4">+1 (855) 461-2272</span>
                  <span className="me-4">
                    Store Access, xTWOstore GieBener Str. 42 35410 Hungen
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <img
                className="img-fluid mt-5 sslImg"
                src="/images/icon-ssl.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
