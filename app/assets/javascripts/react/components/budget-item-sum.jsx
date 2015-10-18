import React, { PropTypes } from 'react'
import { Input, ButtonInput } from 'react-bootstrap'

export default class BudgetItemSum extends React.Component {

  render() {
    return (
      <div className='items-sum'>
        sum
        <div className='items-sum__value'>{this.props.sum}</div>
        zł
      </div>
    )
  }

  handleSubmitForm(e) {
    e.preventDefault()
    var newItem = {
      name: this.refs.name.getValue(),
      price: this.refs.price.getValue()
    }
    this.props.onSumClick(newItem);
  }
}
