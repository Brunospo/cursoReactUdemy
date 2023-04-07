import { IndiretaFilho } from "./IndiretaFilho"

const IndiretaPai = (props) => {
  function fornecerInformacoes(nome, idade, nerd) {
    alert(`Nome: ${nome} | Idade: ${idade} | Nerd: ${nerd}`)
  }

  return(
    <div>
      <span>Pai</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  )
}

export { IndiretaPai }