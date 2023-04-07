import { produtos } from "../../data/produtos"

import './TabelaProdutos.css'

const TabelaProdutos = () => {

  const produtosTd = produtos.map(produto => {
    return(
      <tr key={produto.id}>
        <td>
          {produto.id}
        </td>
        <td>
          {produto.nome}
        </td>
        <td>
          R$ {produto.preco.toFixed(2).replace('.', ',')}
        </td>
      </tr>
    )
  })

  return(
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtosTd}
      </tbody>
    </table>
  )
}
export default TabelaProdutos