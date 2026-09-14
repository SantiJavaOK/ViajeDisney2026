import Header from "./components/Header";
import TripCalendar from "./components/TripCalendar";
import TripMap from "./components/TripMap";
import ShoppingList from "./components/ShoppingList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ShoppingList />
      <TripCalendar />
      <TripMap />
    </div>
  );
}

export default App;