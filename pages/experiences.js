import Head from "next/head";
import Header from '../components/Header'
import Cabecera from '../components/Cabecera'
import Scripts from '../components/Scripts'
const Experiences = () => (
  <React.Fragment>
    <Cabecera title="About me"></Cabecera>
    <div class="dark-vertion black-bg">
      <div className="container">
        <Header page="experiences"></Header>
        <section className="mh-experince" id="mh-experience">
          <div className="bolor-overlay">
            <div className="container">
              <div className="row section-separator">
                <div className="col-sm-12 col-md-6">
                  <div className="mh-education">
                    <h3
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.2s"
                    >
                      Education
                    </h3>
                    <div className="mh-education-deatils">
                      <div
                        className="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.3s"
                      >
                        <h4>
                          Art & Multimedia From{" "}
                          <a href="#">Oxford University</a>
                        </h4>
                        <div className="mh-eduyear">2005-2008</div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum{" "}
                        </p>
                      </div>

                      <div
                        className="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.5s"
                      >
                        <h4>
                          Art & Multimedia From{" "}
                          <a href="#">Oxford University</a>
                        </h4>
                        <div className="mh-eduyear">2005-2008</div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum{" "}
                        </p>
                      </div>

                      <div
                        className="mh-education-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                      >
                        <h4>
                          Art & Multimedia From{" "}
                          <a href="#">Oxford University</a>
                        </h4>
                        <div className="mh-eduyear">2005-2008</div>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using L orem Ipsum{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="mh-work">
                    <h3>Work Experience</h3>
                    <div className="mh-experience-deatils">
                      <div
                        className="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                      >
                        <h4>
                          UI/UX Designer <a href="#">IronSketch</a>
                        </h4>
                        <div className="mh-eduyear">2005-2008</div>
                        <span>Responsibility :</span>
                        <ul className="work-responsibility">
                          <li>
                            <i className="fa fa-circle"></i>Validate CSS
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Project Management
                          </li>
                        </ul>
                      </div>

                      <div
                        className="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                      >
                        <h4>
                          Art & Multimedia From{" "}
                          <a href="#">Oxford University</a>
                        </h4>
                        <div className="mh-eduyear">2005-2008</div>
                        <span>Responsibility :</span>
                        <ul className="work-responsibility">
                          <li>
                            <i className="fa fa-circle"></i>Validate CSS
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Project Management
                          </li>
                        </ul>
                      </div>

                      <div
                        className="mh-work-item dark-bg wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.7s"
                      >
                        <h4>
                          Art & Multimedia From{" "}
                          <a href="#">Oxford University</a>
                        </h4>
                        <div className="mh-eduyear">2005-2008</div>
                        <span>Responsibility :</span>
                        <ul className="work-responsibility">
                          <li>
                            <i className="fa fa-circle"></i>Validate CSS
                          </li>
                          <li>
                            <i className="fa fa-circle"></i>Project Management
                          </li>
                        </ul>
                      </div>
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

export default Experiences;




