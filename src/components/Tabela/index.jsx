import style from "./Tabela.module.css"

const Tabela = ({ resultado }) => {
    return (
        <>
            {resultado && (
                <table className={style.table}>
                    <thead className={style.thead}>
                        <tr className={style.tr}>
                            <th>Índice de IMC</th>
                        </tr>
                        <tr className={style.tr}>
                            <th>Seu IMC é: {resultado}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={style.tr}>
                            <td className={style.td}>Menos que 16</td>
                            <td className={style.td}>Magreza grave</td>
                        </tr>
                        <tr className={style.tr}>
                            <td className={style.td}>Entre 16 e 16,9</td>
                            <td className={style.td}>Magreza moderada</td>
                        </tr>
                        <tr className={style.tr}>
                            <td className={style.td}>Entre 17 e 18,5</td>
                            <td className={style.td}>Magreza leve</td>
                        </tr>
                        <tr className={style.tr}>
                            <td className={style.td}>Entre 18,6 e 24,9</td>
                            <td className={style.td}>Peso ideal</td>
                        </tr>
                        <tr className={style.tr}>
                            <td className={style.td}>Entre 25 e 29,9</td>
                            <td className={style.td}>Sobrepeso</td>
                        </tr>
                        <tr className={style.tr}>
                            <td className={style.td}>Entre 30 e 34,9</td>
                            <td className={style.td}>Obesidade grau I</td>
                        </tr>
                        <tr className={style.tr}>
                            <td className={style.td}>Entre 35 e 39,9</td>
                            <td className={style.td}>Obesidade grau II</td>
                        </tr>
                        <tr className={style.tr}>
                            <td className={style.td}>Maior que 40</td>
                            <td className={style.td}>Obesidade grau III</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Tabela