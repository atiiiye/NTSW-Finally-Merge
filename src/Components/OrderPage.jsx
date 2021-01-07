import React, { Component } from 'react';
import VerticalSpace from '../utils/VerticalSpace';
import TitleDetails from "../utils/TilteDetails";
import Paginate from "../utils/Paginate";
import Button from "../utils/Button";
import Input from "../utils/Input";
import ModernDatepicker from 'react-modern-datepicker';
import moment from 'moment';
import SelectOption from "../utils/SelectOption";

const Header = ["ردیف", " شماره پرونده", "شماره پیش فاکتور", "تاریخ صدور پیش‌فاکتور", " تاریخ اعتبار پیش‌فاکتور", "فروشنده خارجی ", "کشور ذینفع ", "مبلغ کل پیش فاکتور ", "نوع ارز ", "	نوع عملیات ارزی", "وضعیت ", "ثبت کننده", "شماره ثبت سفارش", " جزئیات"];
const data = [
    { phone: 1, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 2, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 3, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 4, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 5, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 6, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 7, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 8, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 9, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 10, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 11, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 12, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 13, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 14, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 15, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> },
    { phone: 16, gender: "665298235", age: "قلثقل", name: "2020/12/21", test: "2020/12/22", test1: "SHANGHAI JINTAO INTERNATIONAL TRADE", test2: "آفریقای مرکزی", test3: "1,000", test4: "دلاراسترالیا	", test5: "بدون انتقال ارز", test7: "استعلام شده", test8: "محمدامین حری", test9: "", test10: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> }
];

class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        }
    }

    handleChange = (date) => {
        this.setState({
            startDate: date,
        });
    }

    handleChangeEndDate = (endDate) => {
        this.setState({
            endDate: endDate
        });
    }


    render() {
        console.log("date", this.state.startDate);

        return (
            <div className="wrapper">
                <VerticalSpace />
                <TitleDetails title="مدیریت پرونده" />
                 <div className="order-page-register">
                    <div className="order-page-register-add" style={{ marginTop: "1rem" }}>
                        <Button title="پرونده جدید" backgroundColor="rgb(68, 156, 236)" width="115px" borderRadius="5px" padding="4px" color="#fff" icon="add.svg" />
                    </div>
                    <div className="order-page-option">
                        <span>وضعیت</span>
                        <select>
                            <option >همه</option>
                            <option>پیش نویس ها</option>
                            <option>  جدید </option>
                            <option>درحال استعلام  </option>
                            <option>استعلام شده  </option>
                            <option>رد پیش فاکتور  </option>
                            <option>منتظر مجوزها  </option>
                            <option>آماده ثبت سفارش  </option>
                            <option> در حال ثبت سفارش</option>
                            <option>آماده پرداخت کارمزد  </option>
                            <option>ثبت سفارش  </option>
                            <option>درخواست مجوز    </option>
                            <option>عدم تائید درخواست   </option>
                            <option>منتظر نتیجه کارشناسی   </option>
                            <option>در حال تکمیل فرایند ثبت سفارش   </option>
                            <option>رد توسط بانک عامل </option>
                        </select>
                    </div>
                    <div className="order-page-option">
                        <span>انتخاب پرونده ها</span>
                        <select>
                            <option >همه</option>
                            <option> پرونده های فعال </option>
                            <option>  پرونده های غیر فعال </option>
                        </select>
                    </div>
                    <div className="start-date">
                        <span> صدور از تاریخ </span>
                        <ModernDatepicker
                            date={this.state.startDate}
                            format={'DD-MM-YYYY'}
                            showBorder
                            onChange={(date) => this.handleChange(date)}
                            placeholder={'Select a date'}
                        />

                    </div>
                    <div className="end-date">
                        <span> تا تاریخ</span>
                        <ModernDatepicker
                            date={this.state.endDate}
                            format={'DD-MM-YYYY'}
                            showBorder
                            onChange={(endDate) => this.handleChangeEndDate(endDate)}
                            placeholder={'Select a date'}
                        />
                    </div>
                    <div className="order-page-search">
                        <Input title=" متن جستجو " input />
                    </div>
                    <div className="order-page-info">
                        <Button backgroundColor="rgb(68, 156, 236)" borderRadius="5px" width="45px"  padding="5px" color="#fff" icon="search.svg" />
                        <Button backgroundColor="rgb(68, 156, 236)" borderRadius="5px" width="45px"  padding="5px" color="#fff" icon="information.svg" />
                    </div>
                </div>
                <div className="details-page-tab">
                    <Paginate id="test1" className="test1" Header={Header} data={data} col="phone.gender.age.name.test.test1.test2.test3.test4.test5.test7.test8.test9.test10" />

                </div>  
            </div>
        );
    }
}

export default OrderPage;