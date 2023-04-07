import { cloneElement } from "react"

const Familia2 = (props) => {
  return(
    <>
      {cloneElement(props.children, props)} {/* Quando há apenas um filho */}
    </>
  )
}

export default Familia2