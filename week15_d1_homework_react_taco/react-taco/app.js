class TacoInfo extends React.Component {
render() {
    return (
        <div>
            <h3>Shell:</h3>
            <h4>{this.props.taco.shell.name}</h4>
            <p>{this.props.taco.shell.recipe}</p>
            <h3>Base:</h3>
            <h4>{this.props.taco.base_layer.name}</h4>
            <p>{this.props.taco.base_layer.recipe}</p>
            <h3>Condiment:</h3>
            <h4>{this.props.taco.condiment.name}</h4>
            <p>{this.props.taco.condiment.recipe}</p>
            <h3>Seasoning:</h3>
            <h4>{this.props.taco.seasoning.name}</h4>
            <p>{this.props.taco.seasoning.recipe}</p>
            <h3>Mixin:</h3>
            <h4>{this.props.taco.mixin.name}</h4>
            <p>{this.props.taco.mixin.recipe}</p>
        </div>
        );
    }
}

class TacoQueryForm extends React.Component {
    state = {
        taco: ""
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState(
            () => {
                fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true')
                    .then(response => {
                        return response.json();
                    })
                    .then(
                        json => 
                            this.setState({
                                taco: json
                            }),
                        err => console.log(err)
                    );
            }
        )
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" class="btn btn-primary btn-lg" value="Find a New Taco" />
                </form>
                {this.state.taco ? <TacoInfo taco={this.state.taco} /> : ""}
            </React.Fragment>
        )
    }
}



class App extends React.Component {
    render() {
        return <TacoQueryForm />;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)