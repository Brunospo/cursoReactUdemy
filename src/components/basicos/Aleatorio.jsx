const Aleatorio =  props => {
  const { min, max } = props

  const aleatorio = parseInt(Math.random() * (max - min)) + min

  return (
    <div>
    <h2>Número aleatório</h2>
    <p><strong>Valor Minimo: {min}</strong></p>
    <p><strong>Valor Máximo: {max}</strong></p>
    <p><strong>Valor aleatório: {aleatorio}</strong></p>
  </div>
  )
}

export default Aleatorio