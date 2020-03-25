import Layout from "../components/Layout";
import { useState } from "react";
import Link from "next/link";

const About = () => {
  const [data, setData] = useState({
    biography:
      "I’m Oscar Alberto Ceballos from Venezuela, System Engineer and Web Developer with well developed skills and experience, bilingual , always enthusiastic to learn and undertake new challenges. I'm also good with: ",
    skills: [
      "Html",
      "Css",
      "Bootstrap 4",
      'TailwindCSS',
      "Javascript",
      "ReactJs",
      "VueJs",
      "AngularJs",
      "NodeJs",
      "Express",
      "MongoDB",
      "PHP",
      "SQL",
      "GraphQL",
      "Wordpress",
    ]
  });

  return (
    <Layout page="about">
      <section className="mh-about" id="mh-about" style={{ 'margin-top': "20px" }}>
        <div
          className="container"
          
        >
          <div
            className="row section-separator"
            
          >
            <div className="col-sm-12 col-md-6">
              <div
                className="mh-about-img shadow-2 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                <img
                  src="assets/images/ab-img.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mh-about-inner">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  About Me
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  {data.biography}
                </p>
                <div
                  className="mh-about-tag wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <ul>
                    {data.skills.map(item => (
                      <li>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="https://drive.google.com/open?id=1QIStcIuwpsntV3chmfgnrqUdCHLVCf-R">
                <a
                  target="_blank"
                  className="btn btn-fill wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  Downlaod CV <i className="fa fa-download"></i>
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mh-service" style={{ 'margin-top': "-160px" }}>
        <div className="container">
          <div className="row section-separator">
            <div
              className="col-sm-12 text-center section-title wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h2>What I do</h2>
            </div>
            <div className="col-md-4 col-sm-12" >
              <div
                className="mh-service-item shadow-1 dark-bg wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-bullseye purple-color"></i>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div
                className="mh-service-item shadow-1 dark-bg wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-code iron-color"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div
                className="mh-service-item shadow-1 dark-bg wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.7s"
              >
                <i className="fa fa-object-ungroup sky-color"></i>
                <h3>App Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
