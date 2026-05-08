import "./Aluno.css"

function Aluno({nome, curso, imagem}) {
    return(
        <>
        <p>Nome do aluno: {nome} | Curso: {curso}</p>
        <img src="{imagem}"/>
        </>
    )
}

export default Aluno