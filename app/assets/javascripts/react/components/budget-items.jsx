import React, { PropTypes }            from 'react'
import { Navbar, CollapsibleNav, Nav } from 'react-bootstrap'
import BudgetItem                      from './budget-item'
import BudgetItemAdd                   from './budget-item-add'

export default class BudgetItems extends React.Component {
  render() {
    console.log(this.props)

    var budgetItems = this.props.items.map((item, i) =>
      <BudgetItem item={item} currentUser={this.props.currentUser} key={i} />
    )

    var budgetItemAdd =
      <BudgetItemAdd
        currentUser={this.props.currentUser}
        onAddClick={(item) =>
          console.log(item)
        } />

    return (
      <div className='items'>
        {budgetItemAdd}
        {budgetItems}
      </div>
    )
  }
}
