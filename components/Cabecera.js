import React from "react";
import Head from "next/head";
const Cabecera = ({title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />>
        <link rel="shortcut icon" href="/assets/images/apple-icon.png" />
        <link
          rel="shortcut icon"
          sizes="72x72"
          href="/assets/images/apple-icon-72x72.png"
        />
        <link
          rel="shortcut icon"
          sizes="114x114"
          href="/assets/images/apple-icon-114x114.png"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/assets/icons/font-awesome-4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/assets/plugins/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/plugins/css/animate.css" />
        <link rel="stylesheet" href="/assets/plugins/css/owl.css" />
        <link
          rel="stylesheet"
          href="/assets/plugins/css/jquery.fancybox.min.css"
        />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        
      <link rel="stylesheet" href="assets/css/colors/yellow.css" title="yellow"/>
      </Head>
    </React.Fragment>
  );
};
export default Cabecera;
