import { useState } from "react"
import { gerarNumeros } from "./gerarNumeros"

const MegaSena = () => {
  const inputStyle = {border: '1px solid grey', fontSize: '1.3rem', marginLeft: '5px', width: '50px'}
  const numberStyle = {backgroundColor: '#11df2d', marginTop: '5px', marginLeft: '3px', height: '35px', width: '35px', boxSizing: 'border-box', textAlign: "center", display: 'inline-block', borderRadius: '50%'}
  const buttonStyle = {border: 0, padding: '10px', cursor: 'pointer', backgroundColor: '#38b348', color: '#fff', fontSize: '1.2rem', borderRadius: '10%'}
  const div1Style = {display: 'flex', alignItems: 'baseline', justifyContent: 'space-evenly'}
  const div2Style = {display: 'flex', alignItems: 'baseline', justifyContent: 'center'}

  const [qtdNumeros, setQtdNumeros] = useState(1)

  /* const numeros = gerarNumeros(qtdNumeros) */
  const [numeros, setNumeros] = useState([])

  return(
    <div>
      <h2>Gerar Números</h2>

      <div style={div1Style}>
        <div style={div2Style}>
          <label htmlFor="qtdNumeros" >Quantidade de Números: </label>
          <input type="number" value={qtdNumeros} onChange={e => setQtdNumeros(+e.target.value)} min={1} max={15} id='qtdNumeros' style={inputStyle}/>
        </div>

        <button onClick={() => {
            setNumeros(gerarNumeros(qtdNumeros))
          }} style={buttonStyle}>Gerar</button>
      </div>

      {numeros.map(numero => <span key={numero} style={numberStyle}>{numero}</span>)}
    </div>
  )
}

export { MegaSena }