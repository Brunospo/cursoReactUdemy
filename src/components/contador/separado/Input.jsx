const Input = (props) => {
  return(
    <>
      <label htmlFor="passoInput">N° de passos: </label>
      <input type="number" name="passoInput" id="passoInput" value={props.passo} onChange={e => props.setPasso(+e.target.value)} style={{width: '50px'}}/>
    </>
  )
}

export { Input }