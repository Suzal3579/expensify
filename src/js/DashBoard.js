import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const DashBoard = () => (
    <div>
        <h1 className="text-center">DashBoard</h1>
        <ExpenseListFilters />
        <ExpenseList />
        <ExpensesSummary />
    </div>
);

export default DashBoard;
