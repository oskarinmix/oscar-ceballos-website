import Layout from "../components/Layout";
const Pricing = () => (
  <Layout page="pricing">
    <section className="mh-pricing" id="mh-pricing">
      <div className="">
        <div className="container">
          <div className="row section-separator " style={{ height: "100vh" }}>
            <div
              className="col-sm-12 section-title"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h3>Pricing Table</h3>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="mh-pricing dark-bg shadow-2 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-calendar"></i>
                <h4>Full-time work</h4>
                <p>I am available for full time</p>
                <h5>$1500</h5>
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li>Music Writing</li>
                </ul>
                <a href="#" className="btn btn-fill">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="mh-pricing dark-bg shadow-2 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-file"></i>
                <h4>Fixed Price Project</h4>
                <p>I am available for fixed roles</p>
                <h5>$500</h5>
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li>Music Writing</li>
                </ul>
                <a href="#" className="btn btn-fill">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="mh-pricing dark-bg shadow-2 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.7s"
              >
                <i className="fa fa-hourglass"></i>
                <h4>Hourley work</h4>
                <p>I am available for Hourley projets</p>
                <h5>$50</h5>
                <ul>
                  <li>Web Development</li>
                  <li>Advetising</li>
                  <li>Game Development</li>
                  <li>Music Writing</li>
                </ul>
                <a href="#" className="btn btn-fill">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Pricing;
