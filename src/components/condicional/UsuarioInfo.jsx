import If from "./if"

const UsuarioInfo = (props) => {
  const usuario = props.usuario || {}
  return(
    <>
      <If teste={usuario && usuario.nome}>
        Seja bem vindo(a) <strong>{usuario.nome}</strong>
      </If>
    
      <br />

      <If teste={!usuario || !usuario.nome}>
        Seja bem vindo(a) <strong>Anônimo</strong>
      </If>
    </>
  )
}

export default UsuarioInfo