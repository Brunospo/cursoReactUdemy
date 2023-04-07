import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
  return(
    <>
      <FamiliaMembro nome='Pedro' sobrenome={props.sobrenome}/> {/*Pegando explicitamente uma das propriedades */}
      <FamiliaMembro nome='Ana'{...props}/> {/*Passando todas as propriedades de uma só vez */}
      <FamiliaMembro nome='Gustavo' sobrenome='Silva'/> {/*Passando a propriedade explicitamente */}
    </>
  )
}

export default Familia