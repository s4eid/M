import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Nav>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Nav>
  );
}

export default MyApp;
