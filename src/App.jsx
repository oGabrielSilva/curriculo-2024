import { About } from './components/About';
import { Aside } from './components/Aside';
import { Experience } from './components/Experience';

function App() {
  return (
    <>
      <section className="section fixed-grid has-3-cols">
        <div className="grid">
          <main className="cell is-col-span-2">
            <div>
              <h1 className="title">Gabriel Henrique da Silva</h1>
              <h2 className="subtitle m-0">
                Desenvolvedor web | Gestor da Tecnologia da Informação
              </h2>
            </div>
            <About />
            <Experience />
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
