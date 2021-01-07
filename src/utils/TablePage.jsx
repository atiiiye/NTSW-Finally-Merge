

class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                
<Table style={{
    opacity: 0.8,
    backgroundColor: "#00113a",
    color: "#ffffff",
    textAlign: "center"
  }}
  tableStyle="table table-hover table-striped table-bordered table-borderless table-responsive"
  pages={true}
  pagination={true}
  onRowClick={() => {}} // if You Want Table Row Data OnClick then assign this {row => console.log(row)}
  page={true}
  errormsg="Error. . ."
  loadingmsg="Loading. . ."
  isLoading={false} 
  sort={true} 
  title="Customers"
  search={true}
  size={10}
  data={{
    head: {
      id: "ID",
      name: "Name",
      email: "Email",
      created_at: "Created At",
      orders: "Orders",
      last_order: "Last OrderResponse",
      total_spent: "Total Spent"
    },
    data: [
      {
        id: 218354810912,
        name: "Kattie Wisoky",
        email: "Kattie.Wisoky@data-generator.com",
        created_at: "2017-11-07T15:14:07.000+0000",
        orders: 6,
        last_order: "#2233",
        total_spent: 0
      },
      {
        id: 218354843680,
        name: "Vernon McLaughlin",
        email: "Vernon.McLaughlin@data-generator.com",
        created_at: "2017-11-07T15:14:07.000+0000",
        orders: 4,
        last_order: "#1287",
        total_spent: 0
      },
      {
        id: 218354909216,
        name: "Jeffry Harber",
        email: "Jeffry.Harber@data-generator.com",
        created_at: "2017-11-07T15:14:07.000+0000",
        orders: 2,
        last_order: "#2356",
        total_spent: 0
      }
    ]
  }} />
            </div>
         );
    }
}
 
export default TablePage;

