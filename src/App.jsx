import { About } from './components/About';
import { Aside } from './components/Aside';

function App() {
  return (
    <>
      <section className="section fixed-grid has-3-cols">
        <div className="grid">
          <main className="cell is-col-span-2">
            <div>
              <h1 className="title">Gabriel Henrique da Silva</h1>
              <h2 className="subtitle m-0">Desenvolvedor web FullStack</h2>
              <h3 className="subtitle is-6">Formado em Gestão da Tecnologia da Informação</h3>
            </div>
            <About />
            <section className="py-3">
              <h2 className="title is-4">Experiência</h2>
              <ul>
                <li>
                  <div>
                    <h3 className="title is-5 mb-0">
                      <strong>Pescape</strong>
                    </h3>
                    <p>
                      Desenvolvedor FullStack, Floresta - PE{' | '}
                      <small className="small">Abril, 2023 - Janeiro, 2024</small>
                    </p>

                    <p className="pt-2">
                      Responsável por desenvolver desde os requisitos ao código backend e frontend.
                      Usamos TypeScript com NextJS para desenvolver o frontend. No backend foi
                      utilizado o Prisma para estruturar todo banco MongoDB. Foram aplicadas as
                      heurísticas de Nielsen para criar as melhores interfaces responsivas.
                    </p>
                    <p>
                      <strong>Tecnologias: </strong>React, Next, TypeScript, Prisma, Node e MongoDB
                    </p>
                  </div>
                </li>
                <li className="pt-5">
                  <div>
                    <h3 className="title is-5 mb-0">
                      <strong>UP! Solução Digital</strong>
                    </h3>
                    <p>
                      Desenvolvedor FullStack estagiário, Floresta - PE{' | '}
                      <small className="small">Agosto, 2023 - Novembro, 2023</small>
                    </p>

                    <p className="pt-2">
                      A empresa UP! iniciou um projeto interno e constituiu uma equipe composta por
                      5 estagiários, me colocando como líder. Coordenei reuniões de validação e
                      alinhamento tanto com a empresa quanto com os estagiários. Assumi a
                      responsabilidade pela seleção das tecnologias utilizadas no projeto e prestei
                      assistência aos demais membros da equipe.
                    </p>
                    <p>
                      <strong>Tecnologias: </strong>JavaScript, TypeScript, Node, Express e Firebase
                    </p>
                  </div>
                </li>
                <li className="pt-5">
                  <div>
                    <h3 className="title is-5 mb-0">
                      <strong>Caprinu - solução para caprinovinocultura</strong>
                    </h3>
                    <p>
                      Desenvolvedor FullStack, Floresta - PE{' | '}
                      <small className="small">Dezembro, 2021 - Dezembro, 2022</small>
                    </p>

                    <p className="pt-2">
                      Responsável por desenvolver o sistema de informações que unificava os
                      caprinovinocultores da região. Participei da equipe como desenvolvedor
                      FullStack, mas também fui responsável por definir reuniões da equipe e pelas
                      validações com clientes.
                    </p>
                    <p>
                      <strong>Tecnologias: </strong>Python, Django, MySQL, JavaScript, JQuery, HTML,
                      CSS
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section className="py-3">
              <h1 className="title is-4 mb-0">Artigos Científicos</h1>
              <ul className="mt-3">
                <li>
                  <p>
                    Silva, G. H. da ., & Araújo, B. L. G. de M. . (2024). Pescape: A tool developed
                    to record environmental crimes in fishing in Pernambuco.{' '}
                    <em>Research, Society and Development, 13</em>(1), e10813144812.{' '}
                    <a
                      href="https://doi.org/10.33448/rsd-v13i1.44812"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://doi.org/10.33448/rsd-v13i1.44812
                    </a>
                  </p>
                </li>
              </ul>
            </section>
          </main>
          <Aside />
        </div>
      </section>
    </>
  );
}

export default App;
