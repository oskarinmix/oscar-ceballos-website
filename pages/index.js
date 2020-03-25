import React, { useState } from "react";
import Layout from "../components/Layout";
const Home = props => {
  const [data, setData] = useState({
    name: "Oscar A. Ceballos",
    title: "Frontend Engineer",
    email: "oscaralbertoceballos@gmail.com",
    address: "Mérida, Venezuela",
    image: "/assets/images/hero.png",
    phone: "+58 412 0642004",
    facebook: "",
    twitter: "",
    instagram: "",
    github: ""
  });

  return (
    <Layout page="home">
      <section className="mh-home image-bg home-2-img" id="mh-home" style={{ height : '100vh' }}>
        <div className="img-foverlay img-color-overlay" style={{ height : '100vh' }}>
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
                    {data.name}
                  </h2>
                  <h4
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    {data.title}
                  </h4>

                  <ul>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.4s"
                    >
                      <i className="fa fa-envelope"></i>
                      <a href="mailto:">{data.email}</a>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.5s"
                    >
                      <i className="fa fa-phone"></i>
                      <a href="callto:">{data.phone}</a>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.6s"
                    >
                      <i className="fa fa-map-marker"></i>
                      <address>{data.address}</address>
                    </li>
                  </ul>

                  <ul
                    className="social-icon wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  >
                    <li>
                      <a href="{data.facebook}">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="{data.twitter}">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="{data.github}">
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="{data.instagram}">
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
                    <img src={data.image} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Home;
