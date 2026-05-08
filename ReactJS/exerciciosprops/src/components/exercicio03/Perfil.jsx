import "./Perfil.css"

function Perfil({ nome, idade, profissao }) {
    return (
        <p className="card-perfil">
            Nome: {nome} <br />
            Idade: {idade} <br />
            Profissão: {profissao} <br />
        </p>
    )
}

export default Perfil