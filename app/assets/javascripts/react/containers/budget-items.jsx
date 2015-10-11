import React          from 'react';
import { Provider }   from 'react-redux';
import BudgetItemsApp from './budget-items-app';
import storage        from '../store/storage';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const store = storage();

export default class BudgetItems extends React.Component {
  render() {
    var devTools =
      <DebugPanel top right bottom>
        <DevTools store={store}
                  monitor={LogMonitor} />
      </DebugPanel>

    return (
      <div>
        <Provider store={store}>
          {() => <BudgetItemsApp
            currentUser={this.props.currentUser} />}
        </Provider>
        {devTools}
      </div>
    );
  };
};
