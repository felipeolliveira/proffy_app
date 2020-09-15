import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/19709577?s=460&v=4"
          alt="Felipe Oliveira"
        />
        <div>
          <strong>Felipe Oliveira</strong>
          <span>Professor de TI</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ante
        tortor. Vestibulum aliquet purus quis sem finibus, sed pellentesque erat
        imperdiet. Nullam sollicitudin vestibulum vehicula.
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$100,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
