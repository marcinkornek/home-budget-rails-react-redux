import React, { PropTypes } from 'react'
import { Navbar, CollapsibleNav, Nav } from 'react-bootstrap'

export default class BudgetItem extends React.Component {


  render() {
    console.log(this.props)

    return (
      <div className='item'>
        {this.props.item.name}
      </div>
    )
  }
}
