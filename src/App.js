import Categorias from "./componentes/Categorias";
import Resultados from "./componentes/Resultados";

function App() {
    return (
        <div className="App">
            <section className="secao">
                <Resultados />
                <Categorias />
            </section>
        </div>
    );
}

export default App;
