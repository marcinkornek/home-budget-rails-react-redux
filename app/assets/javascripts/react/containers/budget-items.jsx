import React          from 'react';
import { Provider }   from 'react-redux';
import BudgetItemsApp from './budget-items-app';
import storage        from '../store/storage';

const store = storage();

export default class BudgetItems extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <BudgetItemsApp
          currentUser={this.props.currentUser} />}
      </Provider>
    );
  };
};
