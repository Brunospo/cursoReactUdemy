import { useState } from "react"
import { Botao } from "./Botao"
import { Display } from "./Display"
import { Input } from "./Input"

const ContadorSeparado = (props) => {
  const valorInicial = props.valorInicial || 0

  const [count, setCount] = useState(valorInicial)
  const [passo, setPasso] = useState(0)

  function add (){
    setCount(count + passo)
  }
  
  function sub (){
    setCount(count - passo)
  }

  return(
    <div>
      <section style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Botao operacao={sub} color='#b12323' > - </Botao>
        <Display count={count}/>
        <Botao operacao={add} color='#23b12f' > + </Botao>        
      </section>

      <Input passo={passo} setPasso={setPasso}/>
    </div>
  )
}

export { ContadorSeparado }