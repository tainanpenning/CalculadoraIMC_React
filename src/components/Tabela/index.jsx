import "./Tabela.module.css"

const Tabela = ({ resultado }) => {
    return (
        <>
            {resultado && (
                <table>
                    <thead>
                        <tr>
                            <th>Índice de IMC</th>
                        </tr>
                        <tr>
                            <th>Seu IMC é: {resultado}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Menos que 16</td>
                            <td>Magreza grave</td>
                        </tr>
                        <tr>
                            <td>Entre 16 e 16,9</td>
                            <td>Magreza moderada</td>
                        </tr>
                        <tr>
                            <td>Entre 17 e 18,5</td>
                            <td>Magreza leve</td>
                        </tr>
                        <tr>
                            <td>Entre 18,6 e 24,9</td>
                            <td>Preso ideal</td>
                        </tr>
                        <tr>
                            <td>Entre 25 e 29,9</td>
                            <td>Sobrepreso</td>
                        </tr>
                        <tr>
                            <td>Entre 30 e 34,9</td>
                            <td>Obesidade grau I</td>
                        </tr>
                        <tr>
                            <td>Entre 35 e 39,9</td>
                            <td>Obesidade grau II</td>
                        </tr>
                        <tr>
                            <td>Maior que 40</td>
                            <td>Obesidade grau III</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Tabela