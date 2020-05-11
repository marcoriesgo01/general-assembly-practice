import React, { Component } from 'react';

class NewDater extends Component {

    state = {
        name: "",
        age: "",
        starsign: "",
        img: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit =(event) => {
        event.preventDefault()
        const dater = {
          name: this.state.name,
          age: this.state.age,
          starsign: this.state.starsign,
          img: this.state.img
        }
        this.props.handleSubmit(event, dater)
    }  

    render() {
      return (
        <div className="form">
          <h4>Add A New User</h4>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-md-3">
                <label htmlFor="inputState">Name</label>
                <input type="text" className="form-control" onChange={this.handleChange} id="name" placeholder="Name"/>
            </div>
            <div className="form-group col-md-1">
                <label htmlFor="inputState">Age</label>
                <input type="text" className="form-control" onChange={this.handleChange} id="age" placeholder="24"/>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="inputState">Star Sign</label>
                <input type="text" className="form-control" onChange={this.handleChange} id="starsign" placeholder="i.e. Virgo"/>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="inputState">Image</label>
                <input type="text" className="form-control" onChange={this.handleChange} id="img" placeholder="Image URL"/>
            </div>
            <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
      );
    }
  }

export default NewDater;