import { useState } from "react"

const Contador = (props) => {
  const valorInicial = props.valorInicial || 0

  const [count, setCount] = useState(valorInicial)
  const [passo, setPasso] = useState(0)

  const buttonStyle = {
    border: 0,
    padding: '9px',
    color: '#fff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '1.4rem'
  }

  function add (){
    setCount(count + passo)
  }
  
  function sub (){
    setCount(count - passo)
  }

  return(
    <div>
      <section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <button onClick={sub} style={{backgroundColor: '#b12323', ...buttonStyle}}>-</button>
        <h2>{count}</h2>
        <button onClick={add} style={{backgroundColor: '#23b12f', ...buttonStyle}}>+</button>
      </section>

      <label htmlFor="passoInput">N° de passos: </label>
      <input type="number" name="passoInput" id="passoInput" value={passo} onChange={e => setPasso(+e.target.value)} style={{width: '50px'}}/>
    </div>
  )
}

export { Contador }