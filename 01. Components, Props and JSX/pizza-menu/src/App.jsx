import pizzaData from "./data";

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente repudiandae sunt quas accusamus et officiis
                        dicta voluptas quae perspiciatis eveniet incidunt
                        explicabo, inventore aliquam modi?
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza key={pizza.name} pizzaObj={pizza} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We are still working on our menu. Please come back later</p>
            )}
        </main>
    );
}

function Order({ closeHour }) {
    return (
        <div className="order">
            <p>
                We are OPEN until {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order Online</button>
        </div>
    );
}

function Notice({ closeHour, openHour }) {
    return (
        <p>
            We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                <Notice closeHour={openHour} openHour={openHour} />
            )}
        </footer>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
