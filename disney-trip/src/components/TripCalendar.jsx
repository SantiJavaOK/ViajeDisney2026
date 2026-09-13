import { tripDays } from "../data/tripData";
import DayCard from "./DayCard";

function TripCalendar() {
  return (
    <main className="trip-calendar">
      {tripDays.map((day) => (
        <DayCard
          key={day.date}
          day={day}
        />
      ))}
    </main>
  );
}

export default TripCalendar;