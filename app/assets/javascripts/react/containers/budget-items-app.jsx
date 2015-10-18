import React, { PropTypes }            from 'react'
import { connect }                     from 'react-redux';
import { Navbar, CollapsibleNav, Nav } from 'react-bootstrap'
import BudgetItem                      from '../components/budget-item'
import BudgetItemAdd                   from '../components/budget-item-add'
import * as actions                    from '../actions/items';

export default class BudgetItemsApp extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.fetchItems(this.props.currentUser.id));
  }

  render() {
    const { dispatch, items } = this.props;

    var budgetItems = items.map((item, i) =>
      <BudgetItem
        item={item} currentUser={this.props.currentUser} key={i}
        onAddClick={(itemId) =>
          dispatch(actions.deleteItem(itemId))
        } />
    )

    var budgetItemAdd =
      <BudgetItemAdd
        currentUser={this.props.currentUser}
        onAddClick={(item) =>
          dispatch(actions.createItem(item))
        } />

    return (
      <div className='items'>
        {budgetItemAdd}
        {budgetItems}
      </div>
    )
  }
}

function select(state) {
  return {
    items: state.items.items,
  };
}

export default connect(select)(BudgetItemsApp);
