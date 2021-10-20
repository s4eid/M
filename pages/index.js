import NavBar from "../components/Layout/NavBar/NavBar";
import Footer from "../components/Layout/Footer/Footer";
import HomePage from "../components/Home/HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}

Home.Nav = NavBar;
Home.Layout = Footer;
