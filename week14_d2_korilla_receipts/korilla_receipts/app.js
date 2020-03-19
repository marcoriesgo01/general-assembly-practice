const receipts = [
    {
      person: 'Karolin',
      order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
          'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
      },
      paid: false
    },
   {
    person: 'Jerrica',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: false
  }
]

class Receipt extends React.Component {

    render() {
        console.log(this.props.receipt.order.paid)
        return (
            <div>
                <h2>{this.props.receipt.person}</h2>
                <h5>Main: <br /><span>{this.props.receipt.order.main}</span></h5>
                <h5>Protein: <br /><span>{this.props.receipt.order.protein}</span></h5>
                <h5>Rice: <br /><span>{this.props.receipt.order.rice}</span></h5>
                <h5>Sauce: <br /><span>{this.props.receipt.order.sauce}</span></h5>
                <h5>Drink: <br /><span>{this.props.receipt.order.drink}</span></h5>
                <h5>Cost: <br /><span>{this.props.receipt.order.cost}</span></h5>
            </div>
        )
    }
}


class App extends React.Component {
    state = {
        receipts
    }

    handlePaidClick = (index) => {
        console.log(receipts[index].paid);
        receipts[index].paid = true;
        console.log(receipts[index].paid);
        this.forceUpdate();
    }

    render () {
        return (
            <div>
                <h1 className='truck-name'>Korilla Receipts</h1>
                <div className='container'>
                    {this.state.receipts.map((receipt, index) => {
                        if (!receipt.paid){
                            return (
                                <div className='receipt' onClick={()=>{this.handlePaidClick(index)}}>
                                    <Receipt receipt={receipt} />
                                </div>
                            )
                        } else if(receipt.paid) {
                          return null;
                        }
                    })}   
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
  