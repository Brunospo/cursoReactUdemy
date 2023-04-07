import { useState } from "react"

const Input = () => {
  const [texto, setTexto] = useState('Texto')

  return(
    <div>
      <h2>{texto}</h2>
    
      <input type="text" value={texto} onChange={
        function(e){
          setTexto(e.target.value)
        }
      }/>
    </div>
  )
}

export { Input }