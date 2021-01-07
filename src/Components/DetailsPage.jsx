import React, { Component } from 'react';
import Input from "../utils/Input";
import TitleDetails from "../utils/TilteDetails";
import VerticalSpace from "../utils/VerticalSpace";
import "../css/detailsPage.css";
import "../css/tabPage.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Button from "../utils/Button";
import Paginate from "../utils/Paginate";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "../css/input.css";



const presidents = [
    { name: 'George Washington', biography: '...' },
    { name: 'Theodore Roosevelt', biography: '...' },
];

const stateChange = ["پیش نویس", "جدید", "در حال استعلام", "استعلام شده", "منتظر مجوزها", "آماده ثبت سفارش", "در حال ثبت سفارش", "آماده پرداخت کارمزد", "ثبت سفارش"];

const Header = ["کدتعرفه", "شرح تعرفه", "شرح تجاری", "درصد حقوق ورودی", "کارخانه سازنده", "وضعیت کالا", "سال تولید", "وزن خالص", "وزن ناخالص", "	تعداد / مقدار", "مبلغ FOB", "	جزییات"];

const data = [
    { phone: 90183929, gender: "‏--- ست کایفو پلاستی؛ ست ورتبرو پلاستی ( تزریق سیمان و نمونه برداری به مهره اسکلت)", age: "نا", name: "5", test: "", test1: "نو", test2: "1970", test3: "100.00000000", test4: "110.00000000	", test5: "52", test6: <Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" /> }
];


const Header1 = ["شماره مجازی کالا", "شماره تعرفه", "شرح تجاری", "  شرح تجاری", " نتیجه استعلام ضوابط", " سازمان مجوزدهنده", "توضیحات سازمان مجوزدهنده ", "فیلدهای مهم مجوزدهنده ", "وضعیت درخواست مجوز ", "	 نتیجه اولیه درخواست ثبت سفارش"];

const data1 = [
    { phone: 55516299011, gender: 90183929, age: "نا", name: "| نیاز به اخذ مجوز ارزی", test: "سازمان صنعت، معدن و تجارت استان اصفهان-تخصیص ارز", test1: "", test2: "فیلد مهمی برای این ردیف مشخص نشده است", test3: "ارسال نشده", test4: "" }
];


const Header2 = ["ردیف", "تاریخ و زمان", "	وضعیت فعالیت", "  وضعیت پرونده", " 	نسخه پرونده", " شماره درخواست سامانه مجوزها", "پیام وهشدارهای دریافتی"];

const data2 = [
    { phone: 1, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: " توسط کاربر از حالت جدید" },
    { phone: 2, gender: "1399/09/26 - 15:35", age: "فعال", name: "استعلام شده", test: "1", test1: "0", test2: " نیاز به اخذ مجوز ارزی " },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" },
    { phone: 3, gender: "1399/09/26 - 15:35", age: "فعال", name: "درحال استعلام ضوابط", test: "1", test1: "0", test2: "" }
];

class DetailsPage extends Component {


    getTabs = () => {
        return presidents.map((president, index) => ({
            title: president.name,
            getContent: () => president.biography,
            /* Optional parameters */
            key: index,
            tabClassName: 'tab',
            panelClassName: 'panel',
        }));
    };


    render() {
        const change = 0;
        const classWizard = "details-page-title-color";
        return (
            <div className="details-page">
                <div className="detail-page-body">
                    <VerticalSpace />
                    <div className="details-page-title">
                        <span className={change == 0 ? `${classWizard}` : ""}> {stateChange[0]}</span>
                        <span className={change == 1 ? `${classWizard}` : ""}> {stateChange[1]}</span>
                        <span className={change == 2 ? `${classWizard}` : ""}> {stateChange[2]}</span>
                        <span className={change == 3 ? `${classWizard}` : ""}> {stateChange[3]}</span>
                        <span className={change == 4 ? `${classWizard}` : ""}> {stateChange[4]}</span>
                        <span className={change == 5 ? `${classWizard}` : ""}> {stateChange[5]}</span>
                        <span className={change == 6 ? `${classWizard}` : ""}> {stateChange[6]}</span>
                        <span className={change == 7 ? `${classWizard}` : ""}> {stateChange[7]}</span>
                        <span className={change == 8 ? `${classWizard}` : ""}> {stateChange[8]}</span>

                    </div>
                    <VerticalSpace />
                    <TitleDetails title="اطلاعات اصلی" />
                    <VerticalSpace space="1.5rem" />
                    <div className="row">
                        <div className="col-12 col-sm-4"><Input title="شماره پرونده" input disabled placeholder="665289517" /></div>
                        <div className="col-12 col-sm-4"><Input title="شماره پیش فاکتور" input disabled placeholder="58474741" /></div>
                        <div className="col-12 col-sm-4"><Input title="سطح دسترسی" input disabled placeholder="کامل" /></div>
                        <div className="col-12 col-sm-4"><Input title=" شناسه فروشنده خارجی" input disabled placeholder="1010305" /></div>
                        <div className="col-12 col-sm-4"><Input title="فروشنده خارجی  " input disabled placeholder="bunge" /></div>
                        <div className="col-12 col-sm-4"><Input title=" تلفن فروشنده خارجی" input disabled placeholder="آذربایجان" /></div>
                        <div className="col-12 col-sm-4"><Input title=" کشور ذینفع" input disabled placeholder="2020/12/14" /></div>
                        <div className="col-12 col-sm-4"><Input title="  تاریخ صدور" input disabled placeholder="2021/01/31" /></div>
                        <div className="col-12 col-sm-4"><Input title="تاریخ اعتبار " input disabled placeholder="" /></div>
                        <div className="col-12 col-sm-4"><Input title="شناسه کسب و کار " input disabled placeholder="ساسان خدائي" /></div>
                        <div className="col-12 col-sm-4"><Input title="  ثبت کننده" input disabled placeholder="58474741" /></div>
                        <div className="col-12 col-sm-4"><Input title="برچسب پرونده " input disabled placeholder="هيچکدام" /></div>
                    </div>
                    <VerticalSpace />
                    <TitleDetails title=" اطلاعات گمرکی و حمل ونقل" />
                    <VerticalSpace space="1.5rem" />
                    <div className="row">
                        <div className="col-12 col-sm-4"><Input title="نوع قرارداد " input disabled placeholder="CPT" /></div>
                        <div className="col-12 col-sm-4"><Input title="  مرز ورودی" input disabled placeholder="بندر عباس" /></div>
                        <div className="col-12 col-sm-4"><Input title="روش حمل " input disabled placeholder="جاده ای - دریایی" /></div>
                        <div className="col-12 col-sm-4"><Input title=" کشورهای مبدا حمل  " input disabled placeholder="آرژانتین" /></div>
                        <div className="col-12 col-sm-4"><Input title="محل بارگیری   " input disabled placeholder="" /></div>
                        <div className="col-12 col-sm-4"><Input title=" گمرک مقصد  " input disabled placeholder="تهران" /></div>
                        <div className="col-12 col-sm-4"><Input title="  ناوگان حمل ونقل" input disabled placeholder="ایرانی" /></div>
                        <div className="col-12 col-sm-4"><Input title="   حمل به دفعات" input disabled placeholder="غیر مجاز" /></div>
                    </div>
                    <VerticalSpace />
                    <TitleDetails title="  اطلاعات مالی و بانکی " />
                    <VerticalSpace space="1.5rem" />
                    <div className="row">
                        <div className="col-12 col-sm-4"><Input title="مبلغ کل پرونده  " input disabled placeholder="1,000" /></div>
                        <div className="col-12 col-sm-4"><Input title=" نوع عملیات ارزی " input disabled placeholder="بانکی " /></div>
                        <div className="col-12 col-sm-4"><Input title="نوع ارز  " input disabled placeholder="یورو " /></div>
                        <div className="col-12 col-sm-4"><Input title=" تامین ارز  " input disabled placeholder="0" /></div>
                        <div className="col-12 col-sm-4"><Input title="  تخفیف    " input disabled placeholder="0" /></div>
                        <div className="col-12 col-sm-4"><Input title=" هزینه حمل   " input disabled placeholder="100" /></div>
                    </div>
                    <VerticalSpace  />
                    <TitleDetails title=" اطلاعات ثبت سفارش " />
                    <VerticalSpace space="1.5rem" />
                    <div className="row">
                        <div className="col-12 col-sm-4"><Input title="شماره ثبت سفارش    " input disabled placeholder="" /></div>
                        <div className="col-12 col-sm-4"><Input title="   تاریخ صدور ثبت سفارش " input disabled placeholder=" " /></div>
                        <div className="col-12 col-sm-4"><Input title=" تاریخ اعتبار ثبت سفارش  " input disabled placeholder=" " /></div>
                        <div className="col-12 col-sm-4"><Input title="   نوع واردات   " input disabled placeholder="با کارت بازرگانی" /></div>
                        <div className="col-12 col-sm-4"><Input title="  حمل یکسره    " input disabled placeholder="مجاز نیست" /></div>
                        <div className="col-12 col-sm-4"><Input title=" حالت ثبت سفارش    " input disabled placeholder="هیچ کدام" /></div>
                    </div>
                </div>
                <hr style={{ backgroundColor: "#315492" }} />
                <VerticalSpace />

                <div className="details-button">
                    <Button title="تغییر سطح دسترسی" backgroundColor="rgb(68, 156, 236)" width="150px" height="50px" borderRadius="10px" color="#fff" />
                    <Button title="ابطال پرونده" backgroundColor="rgb(68, 156, 236)" width="160px" height="50px" borderRadius="10px" color="#fff" />
                    <Button title="کپی پرونده" backgroundColor="rgb(68, 156, 236)" width="130px" height="50px" borderRadius="10px" color="#fff" />
                    <Button title="ویرایش پرونده" backgroundColor="rgb(68, 156, 236)" width="140px" height="50px" borderRadius="10px" color="#fff" />
                    <Button title="درخواست مجوز" backgroundColor="rgb(68, 156, 236)" width="130px" height="50px" borderRadius="10px" color="#fff" />
                    <Button title=" مشاهده مستندات" backgroundColor="rgb(105, 37, 126)" width="150px" height="50px" borderRadius="10px" color="#fff" />

                </div>
                <VerticalSpace space="1.5rem" />

                <div className="details-page-tab">
                    <Tabs >

                        <TabList id="details-tab" >
                            <Tab className="details-tabs"> کالاها</Tab>
                            <Tab className="details-tabs">مشاهده آخرین وضعیت درخواست ها </Tab>
                            <Tab className="details-tabs"> مشاهده سوابق تغییر وضعیت پرونده</Tab>
                            <Tab className="details-tabs">مجوزهای مورد نیاز پرونده</Tab>
                            <Tab className="details-tabs">مشاهده سوابق تغییر سطح دسترسی</Tab>
                            <Tab className="details-tabs">  گزارش پرداخت</Tab>
                        </TabList>
                        <TabPanel className="details-subtab">
                            <Paginate Header={Header} data={data} col="phone.gender.age.name.size.test.test1.test2.test3.test4.test5.test6" />
                        </TabPanel>
                        <TabPanel className="details-subtab">
                            <Paginate Header={Header1} data={data1} col="phone.gender.age.name.size.test.test1.test2.test3.test4" />
                        </TabPanel>
                        <TabPanel className="details-subtab">
                            <Paginate Header={Header2} data={data2} col="phone.gender.age.name.size.test.test1" />
                        </TabPanel>
                        <TabPanel className="details-subtab">
                            <Paginate Header={Header2} data={data2} col="phone.gender.age.name.size.test.test1" />
                        </TabPanel>
                        <TabPanel className="details-subtab">
                            <Paginate Header={Header2} data={data2} col="phone.gender.age.name.size.test.test1" />
                        </TabPanel>
                        <TabPanel className="details-subtab">
                            <Paginate Header={Header2} data={data2} col="phone.gender.age.name.size.test.test1" />
                        </TabPanel>
                    </Tabs>
                    <Link to="/OrderPage"  > <Button title="بازگشت" backgroundColor="rgb(68, 156, 236)" width="100px" height="50px" borderRadius="10px" color="#fff" /> </Link>

                </div>


            </div>
        );
    }
}
export default DetailsPage;
