class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tardis: {
                name: 'Time and Relative Dimension in Space',
                caps: false,
            }
        }
    }

    changeIt = (text) => {
        console.log("Clicked");
        if (this.state.tardis.caps) {
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
        
      }

    render () {
        return (
            <div onClick={this.changeIt}>
                {this.state.tardis.name}
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)