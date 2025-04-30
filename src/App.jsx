import { useState } from "react"
import Calculadora from "./components/Calculadora"
import Tabela from "./components/Tabela"

function App() {
  const [resultado, setResultado] = useState("")
  const [classificacao, setClassificacao] = useState("")

  return (
    <>
      <Calculadora setResultado={setResultado} setClassificacao={setClassificacao} />
      <Tabela resultado={resultado} classificacao={classificacao}/>
    </>
  )
}

export default App
