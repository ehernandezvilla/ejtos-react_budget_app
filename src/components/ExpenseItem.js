import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10, // Adjust the increment as needed
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10, // Adjust the decrement as needed
        };

        dispatch({
            type: 'RED_EXPENSE', // Ensure you have a reducer action to handle this
            payload: expense
        });
    };

    // Inline style for the buttons
    const buttonStyle = {
        borderRadius: '50%', // Make button rounded
        border: 'none',
        cursor: 'pointer',
        padding: '5px 8px',
        marginLeft: '5px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '30px',
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button style={{ ...buttonStyle, backgroundColor: 'green' }} onClick={() => increaseAllocation(props.name)}>
                    <TiPlus color="white" />
                </button>
            </td>
            <td>
                <button style={{ ...buttonStyle, backgroundColor: 'red' }} onClick={() => decreaseAllocation(props.name)}>
                    <TiMinus color="white" />
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
