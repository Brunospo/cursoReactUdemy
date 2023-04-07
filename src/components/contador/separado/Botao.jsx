const Botao = (props) => {
  const buttonStyle = {
    border: 0,
    padding: '9px',
    color: '#fff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '1.4rem'
  }

  return(
    <button onClick={props.operacao} style={{backgroundColor: props.color, ...buttonStyle}}>{props.children}</button>
  )
}

export { Botao }