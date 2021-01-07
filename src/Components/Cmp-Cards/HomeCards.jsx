import React from "react";
import { Card, Dropdown } from 'react-bootstrap'
import './../../css/Home.css';
import  Screenshot  from "./../../images/ntsw1.png";






const HomeCards = () => {



    return (
        <div className="maincontainer d-flex flex-column justify-content-around align-items-center ">

            <div className={'card-row  d-flex justify-content-between'}>
                <Card className={'cardBorder mt-5  '} style={{ width: '35rem' }}>

                    <Card.Body >
                        <div className="cardHeader ">
                            <img className="svg" src="/assets/img/volume-up.svg" alt="" width="32" height="32" title="Bootstrap"></img>
                            <Card.Title className={'text1 mt-3 mr-1 d-flex'}> اطلاعیه ها - 1 </Card.Title>
                        </div>



                    </Card.Body>

                    {/* <Dropdown.Divider /> */}

                    <Card.Body className=' pb-2'>
                        <Card.Link className={'text2  pr-3  d-flex'} href="#">امکان ارسال درخواست مجوز ارزی به استان محل صدورکارتی تولیدی کارای تولیدی دارای جواز تاسیس</Card.Link>
                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدور کارتی تولیدی کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدورر کارتی تولیدی دارا کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل کارتی تولیدیصدور کاهای تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2  pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل کارتی تولیدیصدور کارای تولیدی دارای جواز تاسیس</Card.Link>

                        <div className={'d-flex pt-3 justify-content-center'}>
                            <button className={"justifyContent"}>
                                بایگانی                       </button>
                        </div>
                    </Card.Body>
                </Card>

                {/* /////////////////////// */}

                <Card className={'cardBorder  mt-5 mr-4'} style={{ width: '35rem' }}>

                    <Card.Body >
                        <div className="cardHeader">
                            <img className="svg" src="/assets/img/volume-up.svg" alt="" width="32" height="32" title="Bootstrap"></img>
                            <Card.Title className={'text1 mt-3 mr-1 d-flex'}> اطلاعیه ها - 2 </Card.Title>
                        </div>



                    </Card.Body>

                    {/* <Dropdown.Divider /> */}

                    <Card.Body className='pb-2'>
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدو کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدو کارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل صدوکارتی تولیدی دارای جواز تاسیس</Card.Link>

                        <Dropdown.Divider />
                        <Card.Link className={'text2 pr-3  d-flex'} href="#"> امکان ارسال درخواست مجوز ارزی به استان محل  کارتی تولیدی صدوردارای جواز تاسیس</Card.Link>

                        <div className={'d-flex pt-3 justify-content-center'}>
                            <button className={"justifyContent"}>
                                بایگانی
                        </button>
                        </div>
                    </Card.Body>
                </Card>
            </div>

{/* <Card className=" ml-4" style={{ backgroundColor: "#f7f7f7" , width: '18rem' }}>
    <Card.Img variant="top" height="192" src={Screenshot} />
    <Card.Body >
        <Card.Title className="d-flex" >همتا</Card.Title>
        <Card.Text className="HomeNavbar">

            امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس
            امکان ارسال درخواست مجوز ارزی به استان محل صدور کارت بازرگانی برای واحدهای تولیدی دارای جواز تاسیس تغلعان
                       </Card.Text>
        <Card.Link href="#" className="d-flex justify-content-center">Hamta.ntsw.ir</Card.Link>

    </Card.Body>
</Card>  */}


        </div>
       



    );
};
export default HomeCards;


