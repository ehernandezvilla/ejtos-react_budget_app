import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import '../styles/CurrencyForm.css';

function CurrencyForm() {
    const { currency, updateCurrency } = useContext(AppContext);

    const handleCurrencyChange = (e) => {
        const newCurrency = e.target.value;
        updateCurrency(newCurrency);
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
