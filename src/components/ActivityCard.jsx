function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      {" "}
      <div className="attractions">
        {" "}
        {activity.details.map((detail, index) => (
          <a
            key={index}
            href={detail.url}
            target="_blank"
            rel="noopener noreferrer"
            className="attraction"
          >
            {" "}
            <span>✦</span> <span>{detail.name}</span>{" "}
            <span className="attraction-arrow"> ↗ </span>{" "}
          </a>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
export default ActivityCard;
