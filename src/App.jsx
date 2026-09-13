import Header from "./components/Header";
import TripCalendar from "./components/TripCalendar";
import TripMap from "./components/TripMap";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <TripCalendar />
      <TripMap />
    </div>
  );
}

export default App;