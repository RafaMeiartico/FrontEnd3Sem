import './App.css'
import Title from './components/title/Title'
import Saudacao from "./components/exercicio01/Saudacao"
import Produto from './components/Exercicio02/Produto'
import Perfil from './components/exercicio03/Perfil'
import Botao from './components/exercicio04/Botao'
import Filme from './components/exercicio05/Filme'
import Aluno from './components/exercicio06/Aluno'
import MyChildren from './components/MyChildren/MyChildren'
import Produtos from './components/produtos/Produtos'
import Contato from './components/exercicio08/Contato'

function App() {
  return (
    // <>
    // <Title texto="Rafa" sobrenome="Artico"/>
    // <Title texto="Bia" sobrenome="Arenas"/>
    // <Title texto="Bia" sobrenome="Paz" idade="17"/>
    // <Title texto="Anne" sobrenome="Nicole" idade="18"/>
    // </>

    //Exercicio 01
    // <>
    //   <Saudacao nome ="Rafa"/>
    //   <Saudacao nome ="Anne"/>
    //   <Saudacao nome ="Kau"/>
    // </>

    //Exercicio 02
    // <>
    //     <Produto nome="Borracha" preco="2" descricao="branca de latéx"/>
    //     <Produto nome="Caderno" preco="10" descricao="de capa preta"/>
    //     <Produto nome="Lapis" preco="1" descricao="bic"/>
    // </>

    //Exercicio 3
    // <>
    //   <MyChildren>
    //     <Perfil nome="Rafaela" idade="20" profissao="Herdeira" />
    //     <Perfil nome="Beatryz" idade="25" profissao="Advogada" />
    //     <Perfil nome="Anna Beatriz" idade="28" profissao="Psicologa" />
    //   </MyChildren>
    // </>

    //Exercicio 4

    // <>
    //     <Botao texto="Eu sou Azul" cor="Azul"/> <br />
    //     <Botao texto="Eu sou vermelho" cor="Vermelho"/>
    // </>

    //exercicio 5

    // <>
    //     <Filme titulo="Central do Brasil" ano="1999" genero="Drama" nota="4,5/5"/>
    //     <Filme titulo="Fragmentado" ano=" 2016" genero=" Terror/Ficção policial" nota="4,2/5"/>
    //     <Filme titulo="Uma Mente Brilhante" ano=" 2001" genero="Thriller/Romance" nota="4,5/5"/>
    // </>

    //exercicio 6
    // <>
    //     <Aluno nome="Chappell Roan" curso="canto e lacre" />
    // </>

    //exercicio 7
    
    //exercicio 8
    <>
        <Contato nome="Rafaela" telefone="11 1538735502" email="rafa@gmail.com"/>
        <Contato nome="Anna Beatriz" telefone="11 1435086868" email="annabi@gmail.com"/>
        <Contato nome="Beatryz" telefone="11 1426148187" email="bia@gmail.com"/>
        <Contato nome="Anne" telefone="11 1824354279" email="anne@gmail.com"/>
        <Contato nome="Kauã" telefone="11 1823508765" email="kau@gmail.com"/>
    </>

    // <Produtos />
  )
}

export default App
