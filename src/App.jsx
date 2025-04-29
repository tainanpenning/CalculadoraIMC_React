import { useState } from "react"
import Calculadora from "./components/Calculadora"
import Tabela from "./components/Tabela"

function App() {
  const [resultado, setResultado] = useState("")

  return (
    <>
      <Calculadora setResultado={setResultado} />
      <Tabela resultado={resultado} />
    </>
  )
}

export default App
