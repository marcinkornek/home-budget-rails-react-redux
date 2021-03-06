import React          from 'react';
import { Provider }   from 'react-redux';
import BudgetItemsApp from './budget-items-app';
import storage        from '../store/storage';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const store = storage();

export default class BudgetItems extends React.Component {
  render() {
    var devTools
    if (__DEVELOPMENT__ && __DEVTOOLS__) {
      devTools =
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>
    }

    var itemsJson = {
      items: this.props.items,
      sum: this.props.sum
    }

    return (
      <div>
        <Provider store={store}>
          {() => <BudgetItemsApp
            currentUser={this.props.currentUser}
            itemsJson={itemsJson} />}
        </Provider>
        {devTools}
      </div>
    );
  };
};
