import { Input } from "./Components"
import useCurrencyInfo from "./hooks/UseCurrencyInfo"
import { useState } from "react"
function App() {
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [amount, setAmount] = useState()
    const [convertedAmount, setConvertedAmount] = useState()

    const currencyInfo = useCurrencyInfo(from)
    const currencyInfo2 = useCurrencyInfo(to)

    const options = Object.keys(currencyInfo)

    const swap = () => {
        setFrom(to)
        setTo(from)
    }

    const convert = () => {
        console.log(amount);
        setConvertedAmount(amount * currencyInfo[to])
    }


    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682309809365-041243ded78c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGZvciUyMEN1cnJlbmN5JTIwRXhjaGFuZ2V8ZW58MHx8MHx8fDA%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onAmountChange={(currency) => setAmount(currency)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5"  >
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default App
