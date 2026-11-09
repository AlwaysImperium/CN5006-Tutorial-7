# CN5006 – Tutorial 7: React Discount Calculator

## Project Overview

The aim of this tutorial was to develop a functional React component that calculates a discounted product price based on a percentage entered by the user.

The application was created using React, JavaScript, JSX and Vite.

## Technologies Used

- React
- JavaScript (ES6+)
- JSX
- HTML and CSS
- Vite
- Visual Studio Code

## Component Functionality

The main component, `DiscountCalculator.jsx`, demonstrates the following functionality:

- Accepts `productName` and `price` as props from `App.jsx`.
- Displays the product name and original price.
- Allows the user to enter a discount percentage.
- Uses React's `useState` hook to manage component state.
- Validates that the entered discount is between 0% and 100%.
- Calculates the discounted price when the button is clicked.
- Displays the final price in bold, coloured text.

## Example Calculation

The calculator was tested using the following values:

| Property | Value |
|---|---|
| Product | Sony FX3 |
| Original Price | £3,500.00 |
| Discount | 20% |
| Discount Amount | £700.00 |
| Final Price | £2,800.00 |

The calculation uses the following formula:

`Discounted Price = Original Price - (Original Price × Discount Percentage / 100)`

## Running the Application

1. Install Node.js and npm.
2. Clone this repository.
3. Open the project folder in Visual Studio Code.
4. Install dependencies using `npm install`.
5. Start the development server using `npm run dev`.
6. Open the local URL displayed in the Terminal, usually `http://localhost:5173/`.

## Learning Outcomes

Through this portfolio task, I gained practical experience developing React functional components, passing data through props, managing state using `useState`, handling button events and applying conditional rendering.

I also developed my understanding of input validation, component organisation and using GitHub for version control.
