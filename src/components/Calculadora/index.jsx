import { useState } from "react"
import style from "./Calculadora.module.css"

const Calculadora = ({ setResultado }) => {
    const [inputPeso, setInputPeso] = useState("")
    const [inputAltura, setInputAltura] = useState("")

    const botaoCalcular = () => {
        const peso = parseFloat(inputPeso)
        const altura = parseFloat(inputAltura)

        if (!peso || !altura){
            alert("Preencha os campos para fazer o cálculo corretamente!")
            return
        } else if (peso <= 0 || altura <= 0){
            alert("Coloque um valor válido!")
            return
        }

        const imc = peso / (altura * altura)
        setResultado(imc.toFixed(1));
    }

    return (
        <div className="container">
            <h1 className={style.h1}>Calculadora de IMC</h1>
            <input className={style.input} type="number" placeholder="Digite sua altura" value={inputAltura} onChange={(e) => setInputAltura(e.target.value)} />
            <input className={style.input} type="number" placeholder="Digite seu peso" value={inputPeso} onChange={(e) => setInputPeso(e.target.value)} />
            <button className={style.button} type="button" onClick={botaoCalcular} >Calcular</button>
        </div>
    )
}

export default Calculadora