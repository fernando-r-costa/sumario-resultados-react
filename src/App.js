import Sumario from "./componentes/Sumario";
import Resultados from "./componentes/Resultados";

function App() {
    return (
        <div className="App">
            <section className="secao">
                <Resultados />
                <Sumario />
            </section>
        </div>
    );
}

export default App;
