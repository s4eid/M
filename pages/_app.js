import "../styles/globals.css";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apolloConfig/useApollo";
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
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
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
  );
}

export default MyApp;
