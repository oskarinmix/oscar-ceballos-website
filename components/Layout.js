import React, { useEffect } from "react";
import Cabecera from "../components/Cabecera";
import Header from "../components/Header";
import Scripts from "../components/Scripts";
const Layout = props => {
  const { page } = props;

  useEffect(function() {
    document.getElementsByTagName("body")[0].className =
      "dark-vertion black-bg";
  });

  return (
    <React.Fragment>
      <Cabecera title="Oscar Ceballos"></Cabecera>
      <Header page={page}></Header>

      {props.children}

      <Scripts></Scripts>
    </React.Fragment>
  );
};
export default Layout;
