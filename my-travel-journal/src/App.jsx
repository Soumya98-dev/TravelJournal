import React from "react";
import './App.css';
import Header from "./Header/Header.jsx";
import Card from "./Card/Card.jsx";
import data from "./Data";

function App() {
    const cardData = data.map((item) => (
        <Card
            key={item.id}
            // *** OBJECT DESTRUCTURING
            {...item}
        />
    ));

    return (
        <div>
            <Header/>
            {cardData}
        </div>
    )
}

export default App;