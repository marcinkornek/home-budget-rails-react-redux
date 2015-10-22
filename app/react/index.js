import React from 'react';
window.React = React;

import HelloWorld    from './components/hello-world';
import Header        from './components/header';
import BudgetItems   from './containers/budget-items';

registerComponent('hello-world', HelloWorld);
registerComponent('header', Header);
registerComponent('budget-items', BudgetItems);
