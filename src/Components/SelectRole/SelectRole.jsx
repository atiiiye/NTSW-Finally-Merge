import React, { useState } from "react";

//css
import styles from "./../../css/SelectRole.module.css";

//boootstrap
import { Input, Label, FormGroup, Button, Form } from "reactstrap";

//components
import SelectBox from "./SelectBox";
import Footer from "./../Cmp-Footer/Footer";


//import routes
import { NavLink, Redirect } from "react-router-dom";
import HomeHeader from "../Cmp-Header/HomeHeader";
import HomeNavbar from "../Cmp-Navbar/HomeNavbar";

const SelectRole = () => {
  const [options, setOptions] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const currentRole = "{ نقش جاری }";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (options) {
      console.info("Valid Form");
      setRedirect(true);
    } else {
      console.error("Invalid Form");
    }
  };

  if (redirect) {
    return <Redirect to={{ pathname: "/DefultPage" }} />;
  }
  return (
    <div className="parent">
      <div class="sticky-top">
        <section style={{ backgroundColor: "#05214b" }}>
          <HomeHeader />
        </section>
        <section style={{ backgroundColor: "#f7f7f7" }}>
          <HomeNavbar />
        </section>
      </div>
      <div className="container">
        <div className={styles.contents}>
          <div className={styles.descriptionBox}>
            <h3>تعیین نقش</h3>
            <span className="description">
              در این سیستم کاربران می توانند دارای نقش های مختلفی باشند که هر
              کدام از این نقش ها دارای دسترسی های متفاوتی هستند.
            </span>
            <span>برای ورود به سیستم نقش مورد نظر خود را انتخاب کنید</span>
            <span>
              پس از ورود به سیستم نیز می توانید از قسمت {currentRole} در نوار
              بالایی صفحه برای تغییر نقش خود اقدام نمایید.
            </span>
          </div>
          <Form onSubmit={handleSubmit}>
            <SelectBox />
            <Button className={styles.button} type="submit">
              ورود
            </Button>
          </Form>
          <NavLink to="/" className={styles.HomeLink}>
            <i className="fa fa-home" />
            بازگشت به صفحه اصلی
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectRole;
