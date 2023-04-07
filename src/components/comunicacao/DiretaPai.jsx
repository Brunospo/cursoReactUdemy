import { DiretaFilho } from "./DiretaFilho"

const DiretaPai = (props) => {
  return(
    <div>
      <DiretaFilho nome='Fulano' idade={20} nerd={false}/>
      <DiretaFilho nome='Ciclano' idade={26} nerd={true}/>
    </div>
  )
}

export { DiretaPai }