import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  const NavTop = Component.NavTop ? Component.NavTop : React.Fragment;
  const NavSide = Component.NavSide ? Component.NavSide : React.Fragment;
  return (
    <Nav>
      <Layout>
        <NavTop>
          <NavSide>
            <Component {...pageProps} />
          </NavSide>
        </NavTop>
      </Layout>
    </Nav>
  );
}

export default MyApp;
