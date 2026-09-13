function ActivityCard({ activity }) {
  return (
    <div className="activity-card">

      <div className="activity-header">
        <span>{activity.icon}</span>
        <h3>{activity.name}</h3>
      </div>

      <div className="attractions">
        {activity.details.map((detail, index) => (
          <div
            className="attraction"
            key={index}
          >
            <span>✦</span>
            <span>{detail}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ActivityCard;