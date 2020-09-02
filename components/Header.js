import React from "react";
import Link from "next/link";
const Header = (props) => {
  const { page } = props;
  return (
    <React.Fragment>
      <header
        className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp"
        id="mh-header"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg mh-nav nav-btn">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto ml-auto">
                  <li
                    className="nav-item"
                    className={page === "home" ? "active" : ""}
                  >
                    <Link href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    className={"about" === page ? "active" : ""}
                  >
                    <Link href="/about">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    className={"skills" === page ? "active" : ""}
                  >
                    <Link href="/skills">
                      <a className="nav-link">Skills</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    className={"experiences" === page ? "active" : ""}
                  >
                    <Link href="/experiences">
                      <a className="nav-link">Experiences</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    className={"portfolio" === page ? "active" : ""}
                  >
                    <Link href="/portfolio">
                      <a className="nav-link">Portfolio</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    className={"pricing" === page ? "active" : ""}
                  >
                    <Link href="/pricing">
                      <a className="nav-link">Pricing</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    className={"blog" === page ? "active" : ""}
                  >
                    <Link href="/blog">
                      <a className="nav-link">Blog</a>
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    className={"contact" === page ? "active" : ""}
                  >
                    <Link href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
