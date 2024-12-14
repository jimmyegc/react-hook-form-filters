import React from 'react'
import EventosCards from './EventosCards';

const eventosData = [
  {
    titulo: "Concierto de Primavera",
    subtitulo: "Música clásica en vivo",
    descripcion: "Disfruta de una velada de música clásica con orquestas internacionales.",
    imagen: "https://via.placeholder.com/400x200",
  },
  {
    titulo: "Feria del Libro",
    subtitulo: "Lectura para todos",
    descripcion: "Explora los últimos lanzamientos editoriales y conoce a tus autores favoritos.",
    imagen: "https://via.placeholder.com/400x200",
  },
  {
    titulo: "Festival de Cine",
    subtitulo: "Cine independiente",
    descripcion: "Proyecciones de películas independientes y encuentros con directores.",
    imagen: "https://via.placeholder.com/400x200",
  },
];


export const Events = () => {
  return (
    <div>
    <h1>Eventos del Año</h1>
    <EventosCards eventos={eventosData} />
  </div>
  )
}
