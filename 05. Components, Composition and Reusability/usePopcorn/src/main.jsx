import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
/* import './index.css'
import App from './App.jsx' */
import StartRating from "./StartRating";

function Test() {
    const [movieRating, setMovieRating] = useState();

    return (
        <div>
            <StartRating
                color="blue"
                maxRating={10}
                onSetRating={setMovieRating}
            />
            <p>This movie was rated {movieRating} stars</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <App /> */}
        <StartRating maxRating={5} />
        <StartRating size={24} color="red" defaultRating={3} />
        <Test />
    </StrictMode>,
);
