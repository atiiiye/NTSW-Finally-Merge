import React, { Component } from 'react';
import { TablePagination } from 'react-pagination-table';
// import  Table  from "react-responsive-data-table"; 
import Button from "../utils/Button";
// https://github.com/miteshtagadiya/react-responsive-data-table
// https://reactjsexample.com/react-components-for-sorting-filtering-and-pagination-of-data/
// https://codesandbox.io/examples/package/react-data-table-component
// https://codesandbox.io/s/ccyuu
//https://codesandbox.io/s/react-table-with-pagination-and-searching-cxo0n

class Paginate extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>

                {/* <Table
                //  style={{
                //     opacity: 0.8,
                //     backgroundColor: "#00113a",
                //     color: "#ffffff",
                //     textAlign: "center"
                // }}
                    tableStyle="table table-hover table-striped table-bordered table-borderless table-responsive"
                    pages={true}
                    pagination={true}
                    // onRowClick={() => { }} // if You Want Table Row Data OnClick then assign this {row => console.log(row)}
                    page={true}
                    errormsg="Error. . ."
                    loadingmsg="Loading. . ."
                    isLoading={false}
                    sort={true}
                    // title="Customers"
                    search={true}
                    size={10}
                    data={{
                        head: {
                            columnIndex: "ردیف",
                            prfVCodeInt: "شماره پرونده",
                            prfNumberStr: "شماره پیش فاکتور",
                            prfDate: "تاریخ صدور پیش فاکتور",
                            prfExpireDate: "تاریخ اعتبار پیش فاکتور",
                            prfSellerNameEnStr: "فروشنده خارجی ",
                            prfCountryNameStr: "کشور ذینفع",
                            prfTotalPriceMny: "مبلغ کل پیش فاکتور",
                            prfCurrencyTypeStr:"نوع ارز ",
                            prfIsBankOPStr:"نوع عملیات ارزی ",
                            prfStatusStr:" وضعیت ",
                            theRegistrant:" تهیه کننده ",
                            prfOrderNoStr:"شماره ثبت سفارش  ",
                            details:"جزئیات  ",
                        },
                        data: [
                            {
                                columnIndex: "1",
                                prfVCodeInt: "665303913 ",
                                prfNumberStr: "665303913  ",
                                prfDate: "2020/11/30",
                                prfExpireDate: "2020/11/30   ",
                                prfSellerNameEnStr: " مؤمنیان ",
                                prfCountryNameStr: "ایران ",
                                prfTotalPriceMny: " 0",
                                prfCurrencyTypeStr:"  ",
                                prfIsBankOPStr:"بانکی ",
                                prfStatusStr:" پیش نویس ",
                                theRegistrant:" کاربر تستي  ",
                                prfOrderNoStr:"شماره ثبت سفارش  ",
                                details:<Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" />,
                            },
                            {
                                columnIndex: "2",
                                prfVCodeInt: "665303913 ",
                                prfNumberStr: "665303913  ",
                                prfDate: "2020/11/30",
                                prfExpireDate: "2020/11/30   ",
                                prfSellerNameEnStr: " مؤمنیان ",
                                prfCountryNameStr: "ایران ",
                                prfTotalPriceMny: " 1",
                                prfCurrencyTypeStr:"  ",
                                prfIsBankOPStr:"بانکی ",
                                prfStatusStr:" پیش نویس ",
                                theRegistrant:" کاربر تستي  ",
                                prfOrderNoStr:"شماره ثبت سفارش  ",
                                details:<Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" />,
                            },
                            {
                                columnIndex: "3",
                                prfVCodeInt: "665303913 ",
                                prfNumberStr: "665303913  ",
                                prfDate: "2020/11/30",
                                prfExpireDate: "2020/11/30   ",
                                prfSellerNameEnStr: " مؤمنیان ",
                                prfCountryNameStr: "ایران ",
                                prfTotalPriceMny: " 2",
                                prfCurrencyTypeStr:"  ",
                                prfIsBankOPStr:"بانکی ",
                                prfStatusStr:" پیش نویس ",
                                theRegistrant:" کاربر تستي  ",
                                prfOrderNoStr:"شماره ثبت سفارش  ",
                                details:<Button title="جزئیات" backgroundColor="rgb(68, 156, 236)" width="80px" height="30px" borderRadius="10px" color="#fff" />,
                            }
                        ]
                    }} /> */}

                                   <TablePagination
                                // title="TablePagination"
                                // subTitle="Sub Title"
                    
                                headers={this.props.Header}
                                data={this.props.data}
                                columns={this.props.col}
                                perPageItemCount={10}
                                totalCount={this.props.data.length}
                                arrayOption={[["size", 'all', ' ']]} /> 
            </div>
        );
    }
}

export default Paginate;