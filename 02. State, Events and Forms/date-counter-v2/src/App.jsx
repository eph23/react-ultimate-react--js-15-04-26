import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    function handleCountIncrease() {
        setCount((currentCount) => currentCount + step);
    }
    function handleCountDecrease() {
        setCount((currentCount) => currentCount - step);
    }

    function handleStepChange(event) {
        setStep(+event.target.value);
    }

    function handleCountInput(event) {
        setCount(+event.target.value);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div className="container">
            <div className="buttons">
                <input
                    type="range"
                    min="0"
                    max="10"
                    onChange={handleStepChange}
                    value={step}
                />
            </div>
            <span>
                <h3>Step: {step}</h3>
            </span>

            <div className="buttons">
                <button onClick={handleCountDecrease}>-</button>
                <span>
                    <input
                        type="text"
                        value={count}
                        onChange={handleCountInput}
                    />
                </span>
                <button className="buttons" onClick={handleCountIncrease}>
                    +
                </button>
            </div>
            <h3>Count: {count}</h3>

            <h1>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                          ? `${count} days from today is `
                          : `${Math.abs(count)} days ago was `}
                </span>

                <span>{date.toDateString()}</span>
            </h1>
            {count !== 0 || step !== 1 ? (
                <div className="buttons">
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

function App() {
    return <Counter />;
}

export default App;
