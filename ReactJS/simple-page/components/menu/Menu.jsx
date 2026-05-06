import "./Menu.css";
import Chappell from "../../src/assets/ChappellRoan.jpg";

function Menu() {
    return (
        // bloco/block
        <nav class="menu">

            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem Somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--signin">Entrar</a>
            <a href="#" className="menu__item menu__item--signup">Cadastrar</a>

            <div class="card-perfil">
                <img class="card-perfil__image" scr={Chappell} alt="imagem da chappel" />
            </div>
        </nav>
    );
}

export default Menu