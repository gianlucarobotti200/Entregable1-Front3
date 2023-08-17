import { useState } from "react"
import Card from "./Card";
import styles from "./app.module.css"

function App() {
  const [auto, setAuto] = useState({ marca: '', modelo: '', anio: '' });
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mensajeErrorMarca, setMensajeErrorMarca] = useState(false);
  const [mensajeErrorModelo, setMensajeErrorModelo] = useState(false);
  const [mensajeErrorAnio, setMensajeErrorAnio] = useState(false);
  const [mensajeErrorForm, setMensajeErrorFrom] = useState(false);

  const handleMarca = (e) => {
    const marcaValue = e.target.value;

    if (marcaValue.trim() === "" || marcaValue.trim() !== marcaValue || marcaValue.length < 3) {
      setMensajeErrorMarca(true);
    } else {
      setMensajeErrorMarca(false);
    }

    setAuto({ ...auto, marca: marcaValue });
    setMostrarCard(false);
  }

  const handleModelo = (e) => {
    const modeloValue = e.target.value;

    if (modeloValue.trim() === "" || modeloValue.length < 6) {
      setMensajeErrorModelo(true);
    } else {
      setMensajeErrorModelo(false);
    }

    setAuto({ ...auto, modelo: modeloValue});
    setMostrarCard(false);
  }

  const handleAnio = (e) => {
    const anioValue = e.target.value;

    if (anioValue.trim() === "" || anioValue > 2023 || anioValue < 1980) {
      setMensajeErrorAnio(true);
    } else {
      setMensajeErrorAnio(false);
    }

    setAuto({ ...auto, anio: anioValue });
    
    /*cuando hay un onChange en cualquiera de los inputs, cambio a false el
    estado de mostrarCard para que la misma no se vea con datos incorrectos*/
    setMostrarCard(false); 

  }                        
  const enviarFormulario = (e) => {
    e.preventDefault();


    if ((auto.marca !== "" || auto.modelo !== "" || auto.anio !== "") && (!mensajeErrorMarca && !mensajeErrorModelo && !mensajeErrorAnio)) {
      setMensajeErrorFrom(false);
      setMostrarCard(true);
    } else{
      setMensajeErrorFrom(true);
    }
  }

  return (
    <div className={styles.App}>
      <h1>¿Qué vehículo conduces?</h1>
      <form className={styles.form} onSubmit={enviarFormulario}>
        <input type="text" value={auto.marca} onChange={handleMarca} placeholder='Marca' />
        
        <input type="text" value={auto.modelo} onChange={handleModelo} placeholder='Modelo' />
        
        <input type="number" value={auto.anio} onChange={handleAnio} placeholder='Año' />
        
        <button type="submit">Enviar</button>
      </form>
      {mensajeErrorMarca && <p className={styles.mensajeError}>Datos incorrectos en Marca. Debe contener al menos 3 caracteres y sin espacios al inicio.</p>}
      {mensajeErrorModelo && <p className={styles.mensajeError}>Datos incorrectos en Modelo. Debe contener al menos 6 caracteres</p>}
      {mensajeErrorAnio && <p className={styles.mensajeError}>Año fuera de rango.[1980-2023]</p>}
      {mensajeErrorForm && <p className={styles.mensajeError}>Por favor, completa correctamente todos los campos del formulario.</p>}
      {mostrarCard && <Card auto={auto} />}
      
    </div>
  );
}

export default App;
