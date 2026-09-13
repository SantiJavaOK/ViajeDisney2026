import { useState } from "react";
import ActivityCard from "./ActivityCard";

function DayCard({ day }) {
  const [open, setOpen] = useState(false);

  const mainActivity = day.activities[0];

  return (
    <section className={`day-card ${open ? "open" : ""}`}>

      <button
        className="day-card-button"
        onClick={() => setOpen(!open)}
      >

        <span className="day-number">
          {day.date}
        </span>

        <div className="day-top">
          <div>
            <span className="day-name">
              {day.day}
            </span>

            <span className="day-month">
              {day.month}
            </span>
          </div>
        </div>

        {mainActivity && (
          <div className="day-main">

            <div className="day-icon">
              {mainActivity.icon}
            </div>

            <div className="day-activity">
              <h2>{mainActivity.name}</h2>

              <p>
                {mainActivity.name === "Magic Kingdom"
                  ? "Un día de magia"
                  : "Nuestra aventura continúa"}
              </p>
            </div>

          </div>
        )}

        <div className="day-arrow">
          {open ? "↑" : "↓"}
        </div>

      </button>

      {open && (
        <div className="day-details">

          {day.activities.map((activity, index) => (
            <ActivityCard
              key={index}
              activity={activity}
            />
          ))}

        </div>
      )}

    </section>
  );
}

export default DayCard;