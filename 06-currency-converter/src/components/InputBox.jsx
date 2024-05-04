import { useId } from 'react';
function InputBox({
    label,
    className = "",
    amount = 0,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex gap-2 `}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>
                    {label}
                </label>
                <input id={amountInputId}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    placeholder="Amount" disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable} value={selectedCurrency}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    {currencyOptions.map((currency) => (<option key={currency} value={currency}>{currency.toUpperCase()}</option>))}
                    <option value="usd">
                        usd
                    </option>
                </select>
            </div>
        </div>
    );
}

export default InputBox;