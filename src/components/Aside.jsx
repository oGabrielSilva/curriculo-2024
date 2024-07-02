export function Aside() {
  return (
    <aside className="cell">
      <section className="py-3">
        <ul>
          <li>Brasileiro, 23 anos</li>
          <li>
            <hr />
          </li>
          <li>
            <span className="icon">
              <i className="fa-brands fa-github" />
            </span>
            <a href="https://github.com/oGabrielSilva" target="_blank" rel="noopener noreferrer">
              github.com/oGabrielSilva
            </a>
          </li>
          <li className="pt-1">
            <span className="icon">
              <i className="fa-brands fa-whatsapp" />
            </span>
            <a
              href="https://wa.me/5587996494152?text=Ol%C3%A1%2C%20Gabriel"
              target="_blank"
              rel="noopener noreferrer"
            >
              +55 (87) 9 9649-4152
            </a>
          </li>
          <li className="pt-1">
            <span className="icon">
              <i className="fa-solid fa-envelope" />
            </span>
            <a href="mailto:odev.gabriel@gmail.com" target="_blank" rel="noopener noreferrer">
              odev.gabriel@gmail.com
            </a>
          </li>
          <li className="pt-1">
            <span className="icon">
              <i className="fa-solid fa-globe" />
            </span>
            <a href="https://gabrielsilva.vercel.app" target="_blank" rel="noopener noreferrer">
              https://gabrielsilva.vercel.app
            </a>
          </li>
          <li className="pt-1">
            <span className="icon">
              <i className="fa-brands fa-linkedin" />
            </span>
            <a
              href="https://www.linkedin.com/in/ogabriel-henrique"
              target="_blank"
              rel="noopener noreferrer"
            >
              in/ogabriel-henrique
            </a>
          </li>
        </ul>
      </section>
      <section className="py-3">
        <h1 className="title is-4 mb-0">Tecnologias</h1>
        <ul className="mt-3">
          <li>JavaScript | TypeScript | Java</li>
          <li>React.js | Vue.js</li>
          <li>Spring Boot | Node</li>
        </ul>
      </section>
      <section className="py-3">
        <h1 className="title is-4 mb-0">Formação Acadêmica</h1>
        <ul className="mt-3">
          <li>
            <p>
              <strong>Gestão da Tecnologia da Informação</strong>, Instituto Federal do Sertão
              Pernambucano.
            </p>
            <p>Superior de Tecnologia</p>
            <p>Ingresso: 2021 | aguardando diploma</p>
          </li>
        </ul>
      </section>
      <section className="py-3">
        <h1 className="title is-4 mb-0">Certificados</h1>
        <ul>
          <li className="py-3">
            <p>
              <strong>Introdução à Ciência da Computação com Python</strong> - 40 horas
            </p>
            <p>Coursera - Professor Fabio Kon</p>
            <a
              href="https://github.com/oGabrielSilva/curriculo-2024/blob/main/public/py-coursera.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veja o certificado aqui
            </a>
          </li>
          <li>
            <p>
              <strong>React e Next</strong> - 92 horas
            </p>
            <p>Udemy - Professor Luiz Otávio Miranda</p>
            <a
              href="https://github.com/oGabrielSilva/curriculo-2024/blob/main/public/react-next.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Veja o certificado aqui
            </a>
          </li>
        </ul>
      </section>
    </aside>
  );
}
