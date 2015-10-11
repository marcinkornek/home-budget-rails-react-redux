import React from 'react';
window.React = React;

import HelloWorld    from './components/hello-world';
import Header        from './components/header';
import BudgetItems   from './components/budget-items';
import BudgetItemAdd from './components/budget-item-add';

registerComponent('hello-world', HelloWorld);
registerComponent('header', Header);
registerComponent('budget-items', BudgetItems);
registerComponent('budget-item-add', BudgetItemAdd);
