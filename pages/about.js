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
      "TailwindCSS",
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
    ],
    cvUrl: "",
  });

  return (
    <Layout page="about">
      <section
        className="mh-about"
        id="mh-about"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingTop: "70px",
        }}
      >
        <div className="container">
          <div className="row">
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
                    {data.skills.map((item, index) => (
                      <li key={index}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={data.cvUrl}>
                  <span
                    className="btn btn-fill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    Downlaod CV <i className="fa fa-download"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mh-service" style={{ paddingTop: "40px" }}>
          <div className="row ">
            <div
              className="col-sm-12 text-center section-title wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h2>What I do</h2>
            </div>
            <div className="col-md-4 col-sm-12">
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
