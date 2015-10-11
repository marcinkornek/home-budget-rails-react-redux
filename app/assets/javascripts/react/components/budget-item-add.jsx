import React, { PropTypes } from 'react'
import { Input, ButtonInput } from 'react-bootstrap'

export default class BudgetItemAdd extends React.Component {

  render() {
    return (
      <div className='item-add'>
        <form className='new-item-form' onSubmit={this.handleSubmitForm.bind(this)}>
          <Input type='text' name='item' placeholder='new item' ref='item' />

          <ButtonInput type='submit' value='Add' />
        </form>
      </div>
    )
  }

  handleSubmitForm(e) {
    e.preventDefault()
    var newItem = {
      brand: this.refs.item.getValue()
    }
    this.props.onAddClick(newItem);
  }
}
