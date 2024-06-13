export function click() {
    console.log("se presiono el boton")
  }



  export const cargarMusicas = (fileInput, canciones, setCanciones) => {
    console.log("cargando una cancion")
    const files = fileInput.current.files;
    const nuevasCanciones = Array.from(files).map(file => ({ name: file.name, url: URL.createObjectURL(file) }));
    setCanciones([...canciones, ...nuevasCanciones]);
  };
  
  export const reproducir = (cancion, setCancionSeleccionada) => {
    setCancionSeleccionada(cancion);
  };
  