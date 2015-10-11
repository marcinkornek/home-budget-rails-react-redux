import React, { PropTypes } from 'react'
import { Navbar, CollapsibleNav, Nav } from 'react-bootstrap'
import BudgetItem from './budget-item'

export default class BudgetItems extends React.Component {
  render() {
    console.log(this.props)

    var budgetItems = this.props.items.map((item, i) =>
      <BudgetItem item={item} currentUser={this.props.currentUser} key={i} />
    )

    return (
      <div className='items'>
        {budgetItems}
      </div>
    )
  }
}
