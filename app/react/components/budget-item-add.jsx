import React, { PropTypes } from 'react'
import { Input, ButtonInput } from 'react-bootstrap'

export default class BudgetItemAdd extends React.Component {

  render() {
    return (
      <div className='item-add'>
        <form className='new-item-form' onSubmit={this.handleSubmitForm.bind(this)}>
          <Input type='text' name='name' placeholder='item name' ref='name' />
          <Input type='number' name='price' placeholder='item price' ref='price' />

          <ButtonInput type='submit' value='Add' />
        </form>
      </div>
    )
  }

  handleSubmitForm(e) {
    e.preventDefault()
    var newItem = {
      name: this.refs.name.getValue(),
      price: this.refs.price.getValue()
    }
    this.props.onAddClick(newItem);
  }
}
