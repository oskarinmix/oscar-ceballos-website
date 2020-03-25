import React from 'react';
import Cabecera from "../components/Cabecera";
import Header from "../components/Header";
import Scripts from '../components/Scripts';
const Home = () => (
  <React.Fragment>
    <Cabecera title="Oscar Ceballos"></Cabecera>
    <div className="dark-vertion black-bg">
      <div className="container">
        <Header page="home"></Header>
        <section
          className="mh-home image-bg home-2-img"
          id="mh-home"
          style={{ height: '100vh' }}
        >
          <div className="img-foverlay img-color-overlay" style={{ height: '100vh'}}>
            <div className="container">
              <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
                <div className="col-sm-6">
                  <div className="mh-header-info">
                    <div
                      className="mh-promo wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.1s"
                    >
                      <span>Hello I'm</span>
                    </div>

                    <h2
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                    >
                      Oscar Ceballos
                    </h2>
                    <h4
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.3s"
                    >
                      Frontend Engineer
                    </h4>

                    <ul>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                      >
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:">oscaralbertoceballos@gmail.com</a>
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.5s"
                      >
                        <i className="fa fa-phone"></i>
                        <a href="callto:">+58 4120642004</a>
                      </li>
                      <li
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                      >
                        <i className="fa fa-map-marker"></i>
                        <address>Mérida, Venezuela</address>
                      </li>
                    </ul>

                    <ul
                      className="social-icon wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.7s"
                    >
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="hero-img wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <div className="img-border">
                      <img
                        src="assets/images/hero.png"
                        alt=""
                        className="img-fluid"
                      />
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Scripts></Scripts>
    </div>
  </React.Fragment>
);

export default Home;
