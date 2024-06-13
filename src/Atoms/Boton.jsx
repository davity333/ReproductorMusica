import React, { useRef, useState } from "react";
import style from './Boton.module.css';

import { cargarMusicas, reproducir } from "../data/musica";

const Boton = () => {
  const fileInput = useRef(null);
  const [canciones, setCanciones] = useState([]);
  const [cancionSeleccionada, setCancionSeleccionada] = useState(null);

 

  return (
    <>
      <input id={style.buton} ref={fileInput} type="file" accept="audio/*" multiple onChange={() => cargarMusicas(fileInput, canciones, setCanciones)} />

      <div id={style.names}>
        {canciones.map((cancion, index) => (
          <div key={index}>
            <span>{cancion.name}</span>
            <button onClick={() => reproducir(cancion, setCancionSeleccionada)}>CLICK</button>
          </div>
        ))}
      </div>

     

      {cancionSeleccionada && (
        <audio controls id={style.audio} src={cancionSeleccionada.url}>

        </audio>
      )}
    </>
  );
};

export default Boton;
