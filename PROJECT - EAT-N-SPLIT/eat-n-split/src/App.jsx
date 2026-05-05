import { useState } from "react";
import initialFriends from "./data.js";

/* ******************************************** */
/*ANCHOR                    BUTTON COMPONENT                   */
function Button({ children, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR               FRIEND COMPONENT               */
function Friend({ friend, onSelection, selectedFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} ${Math.abs(friend.balance)}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you ${friend.balance}
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            <Button onClick={() => onSelection(friend)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </li>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                 FRIENDS LIST                 */
function FriendsList({ friends, onSelection, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                />
            ))}
        </ul>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                ADD FRIEND FORM               */
function FormAddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleImageChange(event) {
        setImage(event.target.value);
    }

    function handleSubmit(event) {
        if (!name || !image) return;

        const id = crypto.randomUUID();
        event.preventDefault();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form action="" className="form-add-friend" onSubmit={handleSubmit}>
            <label htmlFor="">✏️Friend Name</label>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor="">📸Image URL</label>
            <input type="text" value={image} onChange={handleImageChange} />
            <Button onSubmit={onAddFriend}>Add</Button>
        </form>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                SPLIT BILL FORM               */
function FormSplitBill({ selectedFriend, onSplitBill }) {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const paidByFriend = bill ? bill - paidByUser : "";

    function handleBill(event) {
        setBill(Number(event.target.value));
    }
    function handleBillByUser(event) {
        setPaidByUser(
            Number(event.target.value) > bill
                ? paidByUser
                : Number(event.target.value),
        );
    }
    function handleWhoIsPaying(event) {
        setWhoIsPaying(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }

    return (
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>

            <label htmlFor="">💲Bill value</label>
            <input type="text" value={bill} onChange={handleBill} />

            <label htmlFor="">💸Your Expenses</label>
            <input type="text" value={paidByUser} onChange={handleBillByUser} />

            <label htmlFor="">💰{selectedFriend.name}'s Expenses</label>
            <input type="text" value={paidByFriend} disabled />

            <label htmlFor="">💳Who is paying bill</label>
            <select value={whoIsPaying} onChange={handleWhoIsPaying}>
                <option value="user">You</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>
            <Button>Split bill</Button>
        </form>
    );
}
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                 APP COMPONENT                */
function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowFriend() {
        setShowAddFriend((show) => !show);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    function handleSelectFriend(friend) {
        // setSelectedFriend(friend);
        setSelectedFriend((selected) =>
            selected?.id === friend.id ? null : friend,
        );
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend,
            ),
        );

        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelectFriend}
                    selectedFriend={selectedFriend}
                />
                {showAddFriend && (
                    <FormAddFriend onAddFriend={handleAddFriend} />
                )}
                <Button onClick={handleShowFriend}>
                    {!showAddFriend ? "Add Friend" : "Close"}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                />
            )}
        </div>
    );
}
/* ******************************************** */

export default App;
