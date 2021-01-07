import React, { Component } from 'react';


class Footer extends Component {
    state = {}
    render() {
        return (
            <div id="footer">
                <div className="wrapper" id="footer-page">

                    <div id="footer-logo">
                        <img src={process.env.PUBLIC_URL + './img/logo-footer.png'} />
                    </div>
                    <div id="footer-content">
                        <p>تلفن مرکز پشتیبانی :   75492000 - 21 (98+)     ساعت پاسخگویی : شنبه الی چهارشنبه ساعت ٨ الی ١٦:٣٠ و پنجشنبه ها ساعت ٨ الی ١٤</p>
                        <p>ارتباط با مدیر سامانه : admin@ntsw.ir</p>
                        <p>کلیه حقوق این سامانه برای وزارت صنعت، معدن و تجارت محفوظ است.</p>
                    </div>

                </div>

            </div>
        );
    }
}

export default Footer;