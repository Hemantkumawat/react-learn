import { useState } from 'react'
import bgImage from './assets/bg-image.jpg'
import InputBox from './components/InputBox'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')
  const fromCurrencyInfo = useCurrencyInfo(fromCurrency)

  const options = Object.keys(fromCurrencyInfo);
  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

    setFromAmount(toAmount);
    setToAmount(fromAmount);
  }
  const convert = () => {
    setToAmount(fromAmount * fromCurrencyInfo[toCurrency]);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={fromAmount}
                onAmountChange={setFromAmount}
                onCurrencyChange={setFromCurrency}
                currencyOptions={options}
                selectedCurrency={fromCurrency}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toAmount}
                onAmountChange={setToAmount}
                onCurrencyChange={setToCurrency}
                currencyOptions={options}
                selectedCurrency={toCurrency}
                amountDisable={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert} >
              Convert From {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
