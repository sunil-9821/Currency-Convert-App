import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [display, setDisplay] = useState("none");
  const [conversionResult, setConversionResult] = useState(null);

  const getCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.dev/v1/currencies");
      if (!res.ok) throw new Error("Failed to fetch currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error fetching currencies:", error);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  const handleConvert = async () => {
    setDisplay("block");
    setTimeout(() => {
      convertCurrency();
    }, 3000);
  };

  const convertCurrency = async () => {
    if (!fromCurrency || !toCurrency || !amount) {
      setDisplay("none");
      return;
    }
    try {
      const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      if (!res.ok) throw new Error("Failed to convert currencies");
      const data = await res.json();
      setConversionResult(data.rates[toCurrency]);
      setDisplay("none");
    } catch (error) {
      console.error("Error converting currencies:", error);
    }
  };
  return (
    <div className="container w-50 mt-2 p-5 rounded-4">
      <h1 className="text-center">Currency Converter</h1>
      <div className="selecter d-flex justify-content-center gap-4">
        <div>
          <p className="fs-5 m-1">From</p>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="fs-6"
          >
            <option value="" disabled>
              Select currency
            </option>
            {currencies.map((currency, i) => (
              <option value={currency} key={i}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="fs-5 m-1">To</p>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="fs-6"
          >
            <option value="" disabled>
              Select currency
            </option>
            {currencies.map((currency, i) => (
              <option value={currency} key={i}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="amountContainer mt-3">
        <p className="fs-5 m-1">Amount</p>
        <input
          className="w-100 py-1 px-2 rounded fs-5"
          type="number"
          placeholder="Enter amount here"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="convertBtn d-flex align-items-center justify-content-center">
        <button
          className="btn btn-primary btn-lg m-3 w-25"
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
      <div className="result">
        {conversionResult ? (
          <p className="fs-3 m-3 text-center">
            {amount} {fromCurrency} = {conversionResult} {toCurrency}
          </p>
        ) : (
          <div
            className={`spinner spinner-border text-primary mt-3 d-${display}`}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;
