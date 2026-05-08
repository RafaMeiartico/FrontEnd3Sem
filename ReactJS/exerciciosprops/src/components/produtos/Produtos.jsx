import "./Produtos.css"
import Produto from "../Exercicio02/Produto"

export default function Produtos() {
    const Produtos = [
           { 
            nome: "Poke",
            preco: 50,
            descricao: "Poke muito gostosoooo"
        },
           { 
            nome: "Hot holl",
            preco: 50,
            descricao: "hot holl bem crocante"
        },
    ]
    
    return(
        Produtos.map((produtinho) => {
            return(
                <Produto 
                    nome={produtinho.nome}
                    preco={produtinho.preco}
                    descricao={produtinho.descricao}
                />
            )
        })
    )
}