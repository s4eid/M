import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  const NavTop = Component.NavTop ? Component.NavTop : React.Fragment;
  const NavSide = Component.NavSide ? Component.NavSide : React.Fragment;
  const NavTopStudent = Component.NavTopStudent
    ? Component.NavTopStudent
    : React.Fragment;
  const NavSideStudent = Component.NavSideStudent
    ? Component.NavSideStudent
    : React.Fragment;
  return (
    <Nav>
      <Layout>
        <NavTop>
          <NavSide>
            <NavTopStudent>
              <NavSideStudent>
                <Component {...pageProps} />
              </NavSideStudent>
            </NavTopStudent>
          </NavSide>
        </NavTop>
      </Layout>
    </Nav>
  );
}

export default MyApp;
