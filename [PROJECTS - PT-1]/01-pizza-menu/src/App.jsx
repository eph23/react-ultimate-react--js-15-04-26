import PIZZAS from "./data.js";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza</h1>
        </header>
    );
}

function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente repudiandae sunt quas accusamus et officiis dicta
                voluptas quae perspiciatis eveniet incidunt explicabo, inventore
                aliquam modi?
            </p>
        </div>
    );
}

function Pizzas() {
    return (
        <ul className="pizzas">
            {PIZZAS.map((pizza) => (
                <Pizza key={pizza.name} pizza={pizza} />
            ))}
        </ul>
    );
}

function Pizza({ pizza }) {
    return (
        <li className="pizza">
            <img src={pizza.photoName} alt="" />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>We are happy to welcome you between 12:00 and 12:00</p>
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Pizzas />
            <Footer />
        </div>
    );
}

export default App;
