import "./TripMap.css";

function TripMap() {
  return (
    <section className="trip-map">

      <div className="trip-map-header">
        <div className="trip-map-star">✦</div>

        <p className="trip-map-subtitle">
          NUESTRO VIAJE
        </p>

        <h2>NUESTRO MAPA</h2>

        <p className="trip-map-description">
          Todos los lugares que vamos a visitar en Orlando.
        </p>
      </div>

      <div className="trip-map-container">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1_8EO7FcfEmtfM3VDQyxkCZywgKhbUNw&hl=es&ehbc=2E312F"
          title="Mapa de nuestro viaje a Orlando"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <a
        className="trip-map-link"
        href="https://www.google.com/maps/d/edit?mid=1_8EO7FcfEmtfM3VDQyxkCZywgKhbUNw&usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        VER MAPA COMPLETO
        <span>↗</span>
      </a>

    </section>
  );
}

export default TripMap;