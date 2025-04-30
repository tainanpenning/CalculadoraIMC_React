import { useState } from "react"
import style from "./Calculadora.module.css"

const Calculadora = ({ setResultado, setClassificacao }) => {
    const [inputPeso, setInputPeso] = useState("")
    const [inputAltura, setInputAltura] = useState("")

    const classificarIMC = (imc) => {
        if (imc < 16) return "Magreza grave"
        if (imc >= 16 && imc < 16.9) return "Magreza moderada"
        if (imc >= 17 && imc < 18.5) return "Magreza leve"
        if (imc >= 18.6 && imc < 24.9) return "Peso ideal"
        if (imc >= 25 && imc < 29.9) return "Sobrepeso"
        if (imc >= 30 && imc < 34.9) return "Obesidade grau I"
        if (imc >= 35 && imc < 39.9) return "Obesidade grau II"
        return "Obesidade grau III"
    }

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
        setClassificacao(classificarIMC(imc))
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