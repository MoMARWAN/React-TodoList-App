import React, { Component } from 'react'

import '../../App.css'


class Additem extends Component {
  state = {
    name: '',
    age: ''
  }


  handlechange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }


  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value === '') {
      return false
    } else {
      this.props.Additem(this.state)
      this.setState({
        name: '',
        age: ''
      })
    }
  }
  render() {
    return (
      <div  className='form-su'>

        <from className='form' onSubmit={this.handleSubmit}>

          <input type="text" placeholder='enter name....' id='name' onChange={this.handlechange} value={this.state.name} />
          <input type="number" placeholder='enter name....' id='age' onChange={this.handlechange} value={this.state.age} />
          <input type="submit" value='Add' onClick={this.handleSubmit} />

        </from>

      </div>
    )
  }
}


export default Additem