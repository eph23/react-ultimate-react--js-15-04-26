import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleCountIncrease() {
        setCount((currentCount) => currentCount + step);
    }
    function handleCountDecrease() {
        setCount((currentCount) => currentCount - step);
    }

    function handleStepIncrease() {
        setStep((currentStep) => currentStep + 1);
    }
    function handleStepDecrease() {
        setStep((currentStep) => currentStep - 1);
    }

    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div className="container">
            <div className="buttons">
                <button onClick={handleStepDecrease}>-</button>
                <span>
                    <h3>Step: {step}</h3>
                </span>
                <button onClick={handleStepIncrease}>+</button>
            </div>

            <div className="buttons">
                <button onClick={handleCountDecrease}>-</button>
                <span>
                    <h3>Count: {count}</h3>
                </span>
                <button className="buttons" onClick={handleCountIncrease}>
                    +
                </button>
            </div>

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
        </div>
    );
}

function App() {
    return <Counter />;
}

export default App;
