import React, { PropTypes } from 'react'
import { Panel } from 'react-bootstrap'

export default class BudgetItem extends React.Component {

  render() {
    return (
      <Panel className='item'>
        <div className='item-body'>
          <div className='item-field'>
            <div className='item-label'>name:</div>
            <div className='item-value'>{this.props.item.name}</div>
          </div>

          <div className='item-field'>
            <div className='item-label'>price:</div>
            <div className='item-value'>{this.props.item.price}</div>
          </div>

          <div className='item-field'>
            <div className='item-label'>created at:</div>
            <div className='item-value'>{this.props.item.created_at}</div>
          </div>
        </div>

        <div className='item-delete' onClick={this.deleteItem.bind(this)}>
          x
        </div>
      </Panel>
    )
  }

  deleteItem(e) {
    e.preventDefault()
    this.props.onAddClick(this.props.item.id);
  }

}
