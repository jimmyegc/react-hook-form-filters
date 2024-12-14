import React from "react";
import PropTypes from "prop-types";
import "./EventosCards.scss";

const EventosCards = ({ eventos }) => {
  return (
    <div className="eventos-container">
      {eventos.map((evento, index) => (
        <div className="evento-card" key={index}>
          <img src={evento.imagen} alt={evento.titulo} className="evento-imagen" />
          <div className="evento-contenido">
            <h3 className="evento-titulo">{evento.titulo}</h3>
            <h4 className="evento-subtitulo">{evento.subtitulo}</h4>
            <p className="evento-descripcion">{evento.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

EventosCards.propTypes = {
  eventos: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      subtitulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventosCards;
