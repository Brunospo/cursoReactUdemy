import { cloneElement } from "react"

const Familia3 = (props) => {

  //console.log(props)
  return(
    <div>
      {props.children.map((child, index) => cloneElement(child, {...props, key: index}))} {/* Quando há vários filhos */}
    </div>
  )
}

export default Familia3