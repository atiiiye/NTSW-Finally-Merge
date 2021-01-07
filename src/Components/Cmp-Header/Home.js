import React from "react";
import HomeHeader from "./HomeHeader";

import BootstrapCarousel from '../Cmp-Slider/HomeSlider'
//import { HomeSlider2 } from "../Cmp-Slider2";
import HomeNavbar from '../Cmp-Navbar/HomeNavbar';
//import Test from '../test';
import HomeCards from "../Cmp-Cards/HomeCards";
import Footer from "../Cmp-Footer/Footer";
import HomeSlider2 from './../Cmp-Slider2/HomeSlider2';

const Home = () => {
  return (
    <div>
      <div  class="sticky-top">
        <section style={{ backgroundColor: "#05214b" }}>
          <HomeHeader />
        </section>
        <section  style={{ backgroundColor: "#f7f7f7" }}>
          <HomeNavbar />
        </section>
      </div>

      <section style={{ backgroundColor: "#fff" }}>
        <BootstrapCarousel />
      </section>
      <section style={{ backgroundColor: " #f7f7f7" }}>
        <HomeCards />

      </section>
      <section style={{ backgroundColor: "#fff" }}>
        <HomeSlider2 />
      </section>
      <footer style={{ backgroundColor: "#05214b" }}>
        <Footer />

      </footer>

    </div>
  );
};
export default Home;