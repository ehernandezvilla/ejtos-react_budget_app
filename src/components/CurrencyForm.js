import { useState } from "react";
import '../styles/CurrencyForm.css'

function CurrencyForm() {
    const [currency, setCurrency] = useState('£');

    const handleCurrencyChange = (e) => {
        const newCurrency = e.target.value;
        setCurrency(newCurrency);
    };

    return (
        <>
            <form className="currencyForm">
                <label htmlFor="currency">Currency:</label>
                <select id="currency" name="currency" value={currency} onChange={handleCurrencyChange}>
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </form>
        </>
    );
}

export default CurrencyForm;
