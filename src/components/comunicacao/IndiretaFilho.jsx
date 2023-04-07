const IndiretaFilho = (props) => {

  const divStyle = {display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #c77dc3'}
  const buttonStyle = {borderRadius: '5px', padding: '3px', border: 0, backgroundColor: '#c77dc3', color: '#fff', marginLeft: '10px', cursor: 'pointer'}
  
  return(
    <div style={divStyle}>
      <span>Filho </span>
      <button onClick={
        function (e) {
          props.quandoClicar('Bruno', 20, false)
        }
      } style={buttonStyle}>
        Fornecer Informacoes
      </button>
    </div>
  )
}

export { IndiretaFilho }