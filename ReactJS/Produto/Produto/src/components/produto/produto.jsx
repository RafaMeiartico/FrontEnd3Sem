import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'

export default function Produto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [editar, setEditar] = useState(false)
    //lista de produtos na tela
    const [arrProdutos, setArrProdutos] = useState([])

    //ciclos de vida e funções
    async function cadastrarProduto(e) {
        e.preventDefault()//não deixa o formulário ser postado

        //validar o formulário 
        if (nome.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || isNaN(quantidade)) {
            alert("Preencha os campos corretamente!")
            return false
        }


        //gerar o objeto que vai pra api
        const objCadastro = {
            nome,
            descricao,
            quantidade,
            preco,
            imagem: "imagem.jpg",
        }

        console.log(objCadastro);

        //cadastrar na api 
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                body: JSON.stringify(objCadastro),
                headers: {
                    "Content-Type": "application/json; carset=UTF-8"
                }
            })

            console.log(retornoAPI)
            //validando o retorno da API
            if (retornoAPI.status == 201) {
                const dados = retornoAPI.json()
                // console.log(dadosCadastrados); //dado que acabou de ser cadastrado
                setArrProdutos([...arrProdutos, dados])
                alert("Produto cadastrado com sucesso")
                //limpar o formulário
                limparFormulario();
            } else {
                alert("Problema inesperado")
            }

        } catch (error) {
            alert("Não foi possível salvar os dados")
            console.log(error);
        }
    }


    //Função que reinicia os states para limpar o formulário
    function limparFormulario() {
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)
    }

    async function getProdutos() {
        try { //faz requisição na api
            const retornoAPI = await fetch("http://localhost:3000/produtos")
            //transforma o retorno que é json em objeto javascript
            const dados = await retornoAPI.json()

            console.log(dados);
            //inserir os dados no state
            setArrProdutos(dados)

        } catch (error) {
            console.log("Erro ao buscar os produtos")
            console.log(error);
        }
    }

    //ciclo de vida do componente
    useEffect(() => {

        getProdutos()
    }, [])

    async function deletar(id) {
        try {
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
                method: "delete"
            })


            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto apagado com sucesso")

                //gerar uma nova lista com os produtos que sobraram
                const novaLista = arrProdutos.filter((prod) => {
                    return prod.id != id
                });

                //Atualizat a variável de produtos
                setArrProdutos(novaLista)
            } else {
                alert("Algum erro ocorreu ao apagar")
            }

        } catch (error) {
            alert("Erro ao apagar o produto")
            console.log(error)
        }
    }


    function editarProduto(e) {
        e.preventDefault();
        // Alert("Função editar chamada")

        //Put para editar os dados
        
    }


 

    //desenho do componente na tela em si
    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={(editar) ? editarProduto : cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade" type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" type="number" id="preco" placeholder="Preço" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" type="text" id="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>


                {/*Condicional para exibir o botão*/}
                {
                    editar
                    &&
                    <button
                        type="submit"
                        className="btn--cadastro"
                        onClick={() => {
                            setEditar(false)//mostra o botão editar
                            limparFormulario()//reseta os states dos inputs
                        }}>Cancelar</button>}
                {" "}
                <button type="submit" className="btn--cadastro">Adicionar Produto</button>
            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a href="" onClick={(e) => {
                            e.preventDefault()
                            deletar(prod.id)
                        }}>Apagar</a>

                        <button className="produtos__btn-comprar">Comprar</button>
                        <a href="" onClick={(e) => {
                            e.preventDefault()
                            //mostrar dados na form para edição
                            setNome(prod.nome)//mostra o botão editar
                            setDescricao(prod.descricao)
                            setPreco(prod.preco)
                            setQuantidade(prod.quantidade)
                            setEditar(true)
                        }}>Editar</a>
                    </div>
                ))}
            </section>
        </>
    )
}