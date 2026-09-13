function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      <div className="attractions">
        {activity.details.map((detail, index) => {
          // Si el detalle es un objeto, tiene nombre y link
          const name = typeof detail === "string" ? detail : detail.name;
          const url = typeof detail === "string" ? null : detail.url;

          // Evita mostrar elementos vacíos
          if (!name) return null;

          if (url) {
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="attraction"
              >
                <span>✦</span>
                <span>{name}</span>
                <span className="attraction-arrow">↗</span>
              </a>
            );
          }

          return (
            <div key={index} className="attraction">
              <span>✦</span>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityCard;