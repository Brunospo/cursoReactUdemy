const IndiretaFilhoComEstado = (props) => {

  const divStyle = {display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #c77dc3'}
  const buttonStyle = {borderRadius: '5px', padding: '3px', border: 0, backgroundColor: '#c77dc3', color: '#fff', marginLeft: '10px', cursor: 'pointer'}

  const gerarIdade = () => parseInt(Math.random() * (20)) + 50
  const gerarNerd = () => Math.random() > 0.5
  
  return(
    <div style={divStyle}>
      <span>Filho </span>
      <button onClick={
        function (e) {
          props.quandoClicar('Bruno', gerarIdade(), gerarNerd())
        }
      } style={buttonStyle}>
        Fornecer Informacoes
      </button>
    </div>
  )
}

export { IndiretaFilhoComEstado }