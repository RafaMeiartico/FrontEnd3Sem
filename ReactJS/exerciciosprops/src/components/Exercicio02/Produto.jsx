import "./Produto.css"

function Produto({ nome, preco, descricao }) {
    return (
        <>
            <p>Nome do Produto: {nome}</p>
            <p>Preço: R$:{preco}</p>
            <p> Descrição do produto: {descricao}</p>
        </>
    )
}

export default Produto