import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, currency, budget } = useContext(AppContext)
    const [newBudget, setNewBudget] = useState(budget);
    const [previousBudget, setPreviousBudget] = useState(expenses.budget);

    // console.log(expenses)


    useEffect(() => {
        const totalExpenses = expenses.reduce((acc, expense) => acc + expense.cost, 0);
        if (newBudget < totalExpenses && newBudget !== previousBudget) {
            window.alert('Cannot set budget lower than total expenses.');
            setNewBudget(previousBudget)
        } else {
            setPreviousBudget(newBudget)
        }
    }, [newBudget,expenses,previousBudget])

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        setNewBudget(updatedBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: Number(updatedBudget),
        });
        // console.log(budget)
    };

    return (
<div className='alert alert-secondary'>
    <span>Budget:{currency} </span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;