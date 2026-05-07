import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handleIsOpen() {
        setIsOpen((open) => !open);
    }

    function handleNext() {
        if (step < messages.length) {
            setStep((step) => step + 1);
        }
    }

    function handlePrevious() {
        if (step > messages.length + 1 - messages.length) {
            setStep((step) => step - 1);
        }
    }

    return (
        <>
            <button className="close" onClick={handleIsOpen}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <div className="message">
                        <p>
                            Step {step}: {messages[step - 1]}
                        </p>
                    </div>
                    <div className="buttons">
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
