import React, { Component } from 'react';


class Header extends Component {
    state = {}
    render() {
        return (
            <div id="header">
                <div className="wrapper">
                    <div className="header-style">
                        <img src={process.env.PUBLIC_URL + './img/header-right.png'}  className="header-logo"/>
                        <img src={process.env.PUBLIC_URL + './img/logo.png'}  className="header-logo" />
                        <img src={process.env.PUBLIC_URL + './img/header-left.png'} className="header-logo" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;