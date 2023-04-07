const ParOuImpar = (props) => {
  
  const {numero} = props

  const isPar = numero % 2 === 0

  return(
    <div>
      {
        isPar ? <span>Par</span> : <span>ímpar</span>
      }
    </div>
  )
}

export default ParOuImpar