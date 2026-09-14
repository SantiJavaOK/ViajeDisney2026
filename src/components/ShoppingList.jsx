import { useState } from "react";
import shoppingList from "../data/shoppingList.json";
import "./ShoppingList.css";

function ShoppingList() {
  const [items, setItems] = useState(shoppingList.items);

  const toggleItem = (index) => {
    setItems((currentItems) =>
      currentItems.map((item, i) =>
        i === index
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  };

  return (
    <section className="shopping-list">

      <div className="shopping-header">

        <div className="shopping-icon">
          🛒
        </div>

        <div>
          <p className="shopping-subtitle">
            PARA EL VIAJE
          </p>

          <h2>{shoppingList.title}</h2>

          <p className="shopping-location">
            {shoppingList.location}
          </p>
        </div>

      </div>

      <div className="shopping-items">

        {items.map((item, index) => (
          <button
            key={index}
            className={`shopping-item ${
              item.checked ? "checked" : ""
            }`}
            onClick={() => toggleItem(index)}
          >

            <span className="shopping-checkbox">
              {item.checked ? "✓" : ""}
            </span>

            <span className="shopping-name">
              {item.name}
            </span>

          </button>
        ))}

      </div>

    </section>
  );
}

export default ShoppingList;