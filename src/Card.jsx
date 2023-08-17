import React from "react";
import styles from "./card.module.css"

const Card = ({auto}) => {
  return(
    <div className={styles.card}>
      <h2>Detalles del Vehículo</h2>
      <p><strong>Marca:</strong> {auto.marca}</p>
      <p><strong>Modelo:</strong> {auto.modelo}</p>
      <p><strong>Año:</strong> {auto.anio}</p>
    </div>
  )
}

export default Card;