import React, { Component } from 'react'
import Footer from './Cmp-Footer/Footer';
import Header from '../utils/Header';
import Login from "./Lgoin";
import HomeHeader from './Cmp-Header/HomeHeader';
import HomeNavbar from './Cmp-Navbar/HomeNavbar';



class HomePageLogin extends Component {
    state = {}
    render() {
        return (
          <div>
            <div class="sticky-top">
              <section style={{ backgroundColor: "#05214b" }}>
                <HomeHeader />
              </section>
              <section style={{ backgroundColor: "#f7f7f7" }}>
                <HomeNavbar />
              </section>
            </div>
            <main>
              <Login />
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        );
    }
}

export default HomePageLogin;