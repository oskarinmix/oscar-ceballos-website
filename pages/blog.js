import Head from "next/head";
import Header from "../components/Header";
import Cabecera from "../components/Cabecera";
import Scripts from "../components/Scripts";
const Blog = () => (
  <React.Fragment>
    <Cabecera title="Blog"></Cabecera>
    <div class="dark-vertion black-bg">
      <div className="container">
        <Header page="blog"></Header>
        <section className="mh-blog" id="mh-blog">
          <div className="container">
            <div className="row section-separator">
              <div
                className="col-sm-12 section-title wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                <h3>Featured Posts</h3>
              </div>
              <div className="col-sm-12 col-md-4">
                <div
                  className="mh-blog-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <img
                    src="assets/images/b-3.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="blog-inner">
                    <h2>
                      <a href="blog-single.html">
                        A life without the daily traffic jams
                      </a>
                    </h2>
                    <div className="mh-blog-post-info">
                      <ul>
                        <li>
                          <strong>Post On</strong>
                          <a href="#">24.11.19</a>
                        </li>
                        <li>
                          <strong>By</strong>
                          <a href="#">ThemeSpiders</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div
                  className="mh-blog-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <img
                    src="assets/images/b-2.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="blog-inner">
                    <h2>
                      <a href="blog-single.html">
                        Proportion are what’s really needed
                      </a>
                    </h2>
                    <div className="mh-blog-post-info">
                      <ul>
                        <li>
                          <strong>Post On</strong>
                          <a href="#">24.11.19</a>
                        </li>
                        <li>
                          <strong>By</strong>
                          <a href="#">ThemeSpiders</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div
                  className="mh-blog-item dark-bg wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                >
                  <img
                    src="assets/images/b-1.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="blog-inner">
                    <h2>
                      <a href="blog-single.html">
                        Mounts of paper work to remember the way
                      </a>
                    </h2>
                    <div className="mh-blog-post-info">
                      <ul>
                        <li>
                          <strong>Post On</strong>
                          <a href="#">24.11.19</a>
                        </li>
                        <li>
                          <strong>By</strong>
                          <a href="#">ThemeSpiders</a>
                        </li>
                      </ul>
                    </div>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mh-testimonial" id="mh-testimonial">
          <div className="home-v-img">
            <div className="container">
              <div className="row section-separator">
                <div
                  className="col-sm-12 section-title wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <h3>Client Reviews</h3>
                </div>
                <div
                  className="col-sm-12 wow fadeInUp"
                  id="mh-client-review"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <div className="each-client-item">
                    <div className="mh-client-item dark-bg black-shadow-1">
                      <img
                        src="assets/images/c-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        Absolute wonderful ! I am completely blown away.The very
                        best.I was amazed at the quality
                      </p>
                      <h4>John Mike</h4>
                      <span>CEO, Author.Inc</span>
                    </div>
                  </div>
                  <div className="each-client-item">
                    <div className="mh-client-item dark-bg black-shadow-1">
                      <img
                        src="assets/images/c-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        Absolute wonderful ! I am completely blown away.The very
                        best.I was amazed at the quality
                      </p>
                      <h4>John Mike</h4>
                      <span>CEO, Author.Inc</span>
                    </div>
                  </div>

                  <div className="each-client-item">
                    <div className="mh-client-item dark-bg black-shadow-1">
                      <img
                        src="assets/images/c-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        Absolute wonderful ! I am completely blown away.The very
                        best.I was amazed at the quality
                      </p>
                      <h4>John Mike</h4>
                      <span>CEO, Author.Inc</span>
                    </div>
                  </div>
                  <div className="each-client-item">
                    <div className="mh-client-item dark-bg black-shadow-1">
                      <img
                        src="assets/images/c-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        Absolute wonderful ! I am completely blown away.The very
                        best.I was amazed at the quality
                      </p>
                      <h4>John Mike</h4>
                      <span>CEO, Author.Inc</span>
                    </div>
                  </div>
                  <div className="each-client-item">
                    <div className="mh-client-item dark-bg black-shadow-1">
                      <img
                        src="assets/images/c-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        Absolute wonderful ! I am completely blown away.The very
                        best.I was amazed at the quality
                      </p>
                      <h4>John Mike</h4>
                      <span>CEO, Author.Inc</span>
                    </div>
                  </div>

                  <div className="each-client-item">
                    <div className="mh-client-item dark-bg black-shadow-1">
                      <img
                        src="assets/images/c-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <p>
                        Absolute wonderful ! I am completely blown away.The very
                        best.I was amazed at the quality
                      </p>
                      <h4>John Mike</h4>
                      <span>CEO, Author.Inc</span>
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

export default Blog;
