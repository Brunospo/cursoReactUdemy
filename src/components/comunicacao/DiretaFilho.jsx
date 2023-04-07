const DiretaFilho = (props) => {
  return(
    <div>
      <span>{props.nome} </span>
      <strong>{props.idade} </strong>
      <span>{props.nerd ? 'Verdadeiro' : 'Falso'}</span>
    </div>
  )
}

export { DiretaFilho }