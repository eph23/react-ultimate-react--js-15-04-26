import { useEffect, useState } from "react";

function App() {
    const [amount, setAmount] = useState(1);
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [quoteCurrency, setQuoteCurrency] = useState("BDT");
    const [converted, setConverted] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    function handleChangeAmount(event) {
        setAmount(Number(event.target.value));
    }
    function handleChangeBaseCurrency(event) {
        setBaseCurrency(event.target.value);
    }
    function handleChangeQuoteCurrency(event) {
        setQuoteCurrency(event.target.value);
    }


    useEffect(
        function () {
            async function convert() {
                setIsLoading(true)

                const response = await fetch(
                    `https://api.frankfurter.dev/v2/rate/${baseCurrency}/${quoteCurrency}`,
                );

                const data = await response.json();
                setConverted(data.rate);
                setIsLoading(false)
            }
            if(baseCurrency === quoteCurrency) return setConverted(amount)
            convert();
        },
        [amount, baseCurrency, quoteCurrency],
    );

    return (
        <div className="app">
            <div className="container">
                <h2>Currency Converter</h2>

                <div className="inputs">
                    <label>💲Amount</label>
                    <input
                        type="text"
                        value={amount}
                        onChange={handleChangeAmount}
                        disabled={isLoading}
                    />
                </div>
                <div className="inputs">
                    <label>💲Select Base Currency</label>
                    <select
                        value={baseCurrency}
                        onChange={handleChangeBaseCurrency}
                        disabled={isLoading}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="BDT">BDT</option>
                    </select>
                </div>

                <div className="inputs">
                    <label>💲Select Quote Currency</label>
                    <select
                        value={quoteCurrency}
                        onChange={handleChangeQuoteCurrency}
                        disabled={isLoading}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>
                        <option value="BDT">BDT</option>
                    </select>
                </div>
                <p className="result">Converted Amount</p>
                <p>
                     {(converted * amount).toFixed(2)} {quoteCurrency}
                </p>
            </div>
        </div>
    );
}

export default App;
