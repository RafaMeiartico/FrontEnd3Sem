import "./Filme.css"

function Filme({ titulo, ano, genero, nota }) {
   return (
      <p>Titulo: {titulo} | Ano: {ano} | Gênero: {genero} | Nota: {nota}</p>
   )
}

export default Filme