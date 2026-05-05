import PIZZAS from "./data.js";
function Header() {
    return (
        <header className="header">
            {" "}
            <h1>Fast React Pizza</h1>{" "}
        </header>
    );
}
function Menu() {
    return (
        <div className="menu">
            {" "}
            {PIZZAS.length > 0 ? (
                <>
                    {" "}
                    <h2>Our Menu</h2>{" "}
                    <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente repudiandae sunt quas accusamus et officiis
                        dicta voluptas quae perspiciatis eveniet incidunt
                        explicabo, inventore aliquam modi?{" "}
                    </p>{" "}
                </>
            ) : (
                <p>
                    {" "}
                    <p>
                        {" "}
                        We are still working on our menu. Please come back
                        later{" "}
                    </p>{" "}
                </p>
            )}{" "}
        </div>
    );
}
function Pizzas() {
    return (
        <ul className="pizzas">
            {" "}
            {PIZZAS.map((pizza) => (
                <Pizza key={pizza.name} pizza={pizza} />
            ))}{" "}
        </ul>
    );
}
function Pizza({ pizza }) {
    return (
        <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
            {" "}
            <img src={pizza.photoName} alt="" />{" "}
            <div>
                {" "}
                <h3>{pizza.name}</h3> <p>{pizza.ingredients}</p>{" "}
                <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>{" "}
            </div>{" "}
        </li>
    );
}
function Footer() {
    const openHour = 12;
    const closeHour = 22;
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= openHour && currentHour <= closeHour;
    console.log(isOpen);
    return (
        <footer className="footer">
            {" "}
            {isOpen ? (
                <OrderOnline openHour={openHour} closeHour={closeHour} />
            ) : (
                <StoreNotice closeHour={closeHour} />
            )}{" "}
        </footer>
    );
}
function StoreNotice({ openHour, closeHour }) {
    return (
        <p>
            {" "}
            We are happy to welcome you between {openHour}:00 and {closeHour}
            :00{" "}
        </p>
    );
}
function OrderOnline({ closeHour }) {
    return (
        <div className="order">
            {" "}
            <p>
                {" "}
                We are OPEN until {closeHour}:00. Come visit us or order
                online{" "}
            </p>{" "}
            <button className="btn">Order Online</button>{" "}
        </div>
    );
}
function App() {
    return (
        <div className="container">
            {" "}
            <Header /> <Menu /> <Pizzas /> <Footer />{" "}
        </div>
    );
}
export default App;
