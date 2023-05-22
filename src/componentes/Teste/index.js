import './Teste.css'

const Teste = ({imagem, texto, nota, corTexto, corBack}) => {
    return (
        <div className='teste' style={{ backgroundColor: corBack }} >
            <img src={imagem} alt={`icone-${texto}`}/>
            <h2 style={{ color: corTexto }}>{texto}</h2>
            <p><strong>{nota}</strong> / 100</p>
        </div>
    );
}

export default Teste