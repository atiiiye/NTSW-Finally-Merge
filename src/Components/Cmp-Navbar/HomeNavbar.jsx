import React, { useState, useEffect } from "react";

import { Dropdown, Button, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import '../../scss/Home.css';



const HomeNavbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [scrolled, setScrolled] = useState(false);
    //this.toggle = this.toggle.bind(this);
    //const onMouseEnter = onMouseEnter.bind;

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);


    const sayHello = () => {
        let Text1 = "at least 4 nums requiered!!";
        //document.querySelector('#p1').innerHTML=Text1;
        alert('Hi man!!!!!')
    }


    // function myFunction() {
    //     var d = document.getElementById("div1");
    //     let topPos = d.offsetTop;
    //     console.log("topPos" , topPos , "window.pageYOffset" , window.pageYOffset)
    //     if (window.pageYOffset >= topPos) {
    //         d.offsetTop.classList.add("sticky");
    //     } else {
    //         d.offsetTop.classList.remove("sticky");
    //     }
    // }




    // useEffect(() => {
    //     // window.onscroll = function () { myFunction() }
    //     console.log('mount it!' , window.onscroll = function () { myFunction() } );
    // });

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })



    return (
      //    { }

      <div id="div1" className="justify maincontainer ">
        <ul className="nav nav-pills  navbar2 d-flex flex-row-reverse  justify-content-around  align-items-center ">
          <Dropdown
            isOpen={dropdownOpen}
            onMouseEnter={toggle}
            onMouseLeave={toggle}
          >
            <div className="dropdown">
              <DropdownToggle
                caret
                className="d-flex  justify-content-center align-items-center"
                id="dropdown-basic"
              >
                ثبت نام
                {/* <p id="p1" ></p> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="darkblue"
                  className="icon mr-2 bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="text-right" onClick={sayHello}>
                  ثبت نام کاربران ایرانی
                </DropdownItem>
                <DropdownItem divider className="m-0" />
                <DropdownItem className="text-right">
                  ثبت نام کاربران خارجی (forein customers)
                </DropdownItem>
                <DropdownItem></DropdownItem>
              </DropdownMenu>
            </div>
          </Dropdown>
          <Dropdown
            isOpen={dropdownOpen1}
            onMouseEnter={toggle1}
            onMouseLeave={toggle1}
          >
            <div className="dropdown">
              <DropdownToggle
                caret
                className="d-flex justify-content-center align-items-center"
                variant="info"
                id="dropdown-basic"
              >
                سوالات متداول
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="darkblue"
                  class="icon mr-2 bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="darkblue" class="icon mr-2 bi bi-arrow-down-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                            </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="darkblue" class="icon mr-2 bi bi-sort-down-alt" viewBox="0 0 16 16">
                                <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                            </svg> */}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="ff m-auto text-right">
                  تجارت داخلی
                </DropdownItem>
                <DropdownItem divider className="m-0" />
                <DropdownItem className="ff  text-right">
                  تجارت خارجی{" "}
                </DropdownItem>
                <DropdownItem divider className="m-0" />
                <DropdownItem className="ff m-auto text-right">
                  {" "}
                  شناسه کالا
                </DropdownItem>
              </DropdownMenu>
            </div>
          </Dropdown>
          <Dropdown
            isOpen={dropdownOpen2}
            onMouseEnter={toggle2}
            onMouseLeave={toggle2}
          >
            <div className="dropdown">
              <DropdownToggle
                caret
                className="d-flex  border-0 justify-content-center align-items-center"
                variant="info"
                id="dropdown-basic"
              >
                استعلامات
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="darkblue"
                  class="icon mr-2 bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="darkblue" class="icon mr-2 bi bi-arrow-down-short" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                            </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="darkblue" class="icon mr-2 bi bi-sort-down-alt" viewBox="0 0 16 16">
                                <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                            </svg> */}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="py-0 text-right">
                  شناسه کالا
                </DropdownItem>
              </DropdownMenu>
            </div>
          </Dropdown>
          <Button color="info" className="button1" size="sm">
            زیرسامانه ها
          </Button>{" "}
          <Button color="info" className="button1" size="sm">
            ورود
          </Button>{" "}
          <Button color="info" className="button1" size="sm">
            صفحه اصلی
          </Button>{" "}
        </ul>
      </div>
    );
}

export default HomeNavbar;