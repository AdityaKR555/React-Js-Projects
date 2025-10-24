import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyHooks";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    const tempFrom = from;
    const tempAmount = amount;
    setFrom(to);
    setTo(tempFrom);
    setAmount(convertedAmt);
    setConvertedAmt(tempAmount);
  };

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmt(amount * currencyInfo[to]);
  };

  return (
    <div className="window"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/840/518/large_2x/abstract-money-transfer-online-currency-on-background-modern-blue-concept-arrow-global-money-movement-currency-exchange-dollar-euro-yen-vector.jpg')`, objectFit: "cover",
      }}
    >
      <div className="container"> 
        <form style={{margin: "auto", width: "60%", background: "rgba(255, 255, 255, 0.4)", border: "1px solid rgba(221, 0, 255, 0.3)", height: "85%", borderRadius: "30px", padding: "50px", backdropFilter: "blur(100px) brightness(1.2) contrast(0.8)", boxShadow: "12px 12px 200px skyBlue", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "22px"}}
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from} 
            onAmountChange={(amount) => setAmount(amount)}
          />

          <button
          style={{zIndex: "10", backgroundColor: "rgba(6, 6, 74, 1)", borderRadius: "12px"}}
            type="button"
            onClick={swap}
          >
            swap
          </button>

          <InputBox
            label="To"
            amount={convertedAmt}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          <button type="submit" onClick={convert} 
          style={{zIndex: "10", backgroundColor: "rgba(6, 6, 74, 1)", borderRadius: "12px", width: "100%"}}>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

