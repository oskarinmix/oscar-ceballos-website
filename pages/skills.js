import Layout from "../components/Layout";
const Skills = () => (
  <Layout page="skills">
    <section className="mh-skills" id="mh-skills" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row section-separator">
          <div className="section-title text-center col-sm-12">
            <h2>Skills</h2>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="mh-skills-inner">
              <div
                className="mh-professional-skill wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <h3>Technical Skills</h3>
                <div className="each-skills">
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Javascript</div>
                        <div className="percentagem-num">96%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "96%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">React</div>
                        <div className="percentagem-num">92%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Node Js</div>
                        <div className="percentagem-num">88%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">PHP</div>
                        <div className="percentagem-num">77%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="nome">Redux</div>
                        <div className="percentagem-num">77%</div>
                      </div>
                      <div className="progressBar">
                        <div
                          className="percentagem"
                          style={{ width: "77%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div
              className="mh-professional-skills wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <h3>Professional Skills</h3>
              <ul className="mh-professional-progress">
                <li>
                  <div
                    className="mh-progress mh-progress-circle"
                    data-progress="95"
                  ></div>
                  <div className="pr-skill-name">Communication</div>
                </li>
                <li>
                  <div
                    className="mh-progress mh-progress-circle"
                    data-progress="55"
                  ></div>
                  <div className="pr-skill-name">Team Work</div>
                </li>
                <li>
                  <div
                    className="mh-progress mh-progress-circle"
                    data-progress="86"
                  ></div>
                  <div className="pr-skill-name">Project Management</div>
                </li>
                <li>
                  <div
                    className="mh-progress mh-progress-circle"
                    data-progress="60"
                  ></div>
                  <div className="pr-skill-name">Creativity</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Skills;
