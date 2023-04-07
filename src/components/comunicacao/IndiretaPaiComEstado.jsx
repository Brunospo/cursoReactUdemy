import { useState } from "react"
import { IndiretaFilhoComEstado } from "./IndiretaFilhoComEstado"

const IndiretaPaiComEstado = (props) => {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return(
    <div>
      <span>Nome: {nome} | Idade: {idade} | Nerd: {nerd ? 'Verdadeiro' : 'Falso'}</span>
      <IndiretaFilhoComEstado quandoClicar={fornecerInformacoes} />
    </div>
  )
}

export { IndiretaPaiComEstado }