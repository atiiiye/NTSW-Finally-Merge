import { React } from "react";
import '../../css/Home.css';

const Footer = () => {
    return (
        <div className="maincontainer mt-4 footer">

            <div className=' HomeFooter'>
                <div>
                    <img className=" mr-3 nemad" src="/assets/img/logo.png" alt="" />
                </div>

                <div className="mx-auto HomeFooter-text" >
                    <p className=" mt-4"> تلفن مرکز پشتیبانی :   75492000 - 21 (98+)     ساعت پاسخگویی : شنبه الی چهارشنبه ساعت ٨ الی ١٦:٣٠ و پنجشنبه ها ساعت ٨ الی ١٤</p>
                    <p>ارتباط با مدیر سامانه : admin@ntsw.ir</p>
                    <p>کلیه حقوق این سامانه برای وزارت صنعت، معدن و تجارت محفوظ است.</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;