import React, { Component } from 'react'

class Customers extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       customers: [],
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:5000/api/customers').then(res => res.json()).then(customers => this.setState({customers}));
  }
  render() {
    return (
      <div>
        {this.state.customers.map(customers => <p>{customers.firstName}</p>)}
      </div>
    )
  }
}

export default Customers
