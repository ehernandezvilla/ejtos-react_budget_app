# coding-project-template

# Expense Tracker Application

## Overview

This Expense Tracker application is a React-based web application designed to help users manage their expenses effectively. It allows users to add, update, and delete expenses, as well as adjust their budget in real-time. The application features a global currency selector, enabling users to choose their preferred currency symbol that reflects across all expense items.

## Features

- **Add Expenses**: Users can add new expenses by specifying the expense name and cost.
- **Update Expenses**: Increase or decrease the allocation for each expense item directly from the expense list.
- **Delete Expenses**: Remove unwanted expense items with a simple click.
- **Budget Management**: Set and update a budget limit to keep track of spending.
- **Currency Selection**: Choose a preferred currency symbol to be displayed across all expenses and budget allocations.

## Technologies Used

- **React**: Utilizes React for building the user interface.
- **Context API**: Manages global state across the application, including expenses, budget, and currency selection.
- **React Icons**: Enhances the UI with scalable vector icons.
- **CSS**: Provides styling for the application components.

## Project Structure

- /src
- /components
- Budget.js
- CurrencyForm.js
- ExpenseItem.js
- /context
- AppContext.js
- styles
- CurrencyForm.css
- App.js
- index.js
- `App.js`: The main component that renders the Expense Tracker application.
- `Budget.js`: Manages and displays the user's budget.
- `CurrencyForm.js`: Allows users to select their preferred currency symbol.
- `ExpenseItem.js`: Represents individual expense items, with functionality to increase, decrease, and delete.
- `AppContext.js`: Defines the global state using React's Context API and `useReducer` for state management.
- `CurrencyForm.css`: Styles for the `CurrencyForm` component.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd expense-tracker
npm install
```

To run the application locally:

```bash
npm start 
```

## Contributing
Contributions to the Expense Tracker application are welcome. Please ensure to follow the existing coding style and add unit tests for any new or changed functionality. Fork the repository and submit pull requests for review.