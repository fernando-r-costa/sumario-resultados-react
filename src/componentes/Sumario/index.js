import Botao from '../Botao';
import Teste from '../Teste';
import './Sumario.css'

const sumarioNotas = [
    {
      texto: 'Reação',
      nota: 80,
      imagem: './assets/images/icon-reaction.svg',
      corTexto: 'var(--Light-red)',
      corBack: 'var(--Light-red-back)'
    },
    {
      texto: 'Memoria',
      nota: 92,
      imagem: './assets/images/icon-memory.svg',
      corTexto: 'var(--Orangey-yellow)',
      corBack: 'var(--Orangey-yellow-back)'
    },
    {
      texto: 'Oral',
      nota: 61,
      imagem: './assets/images/icon-verbal.svg',
      corTexto: 'var(--Green-teal)',
      corBack: 'var(--Green-teal-back)'
    },
    {
      texto: 'Visual',
      nota: 72,
      imagem: './assets/images/icon-visual.svg',
      corTexto: 'var(--Cobalt-blue)',
      corBack: 'var(--Cobalt-blue-back)'
    }
  ]

const Sumario = () => {

    return (
        <div className="sumario">
            <h1>Sumário</h1>

            {sumarioNotas.map(nota => <Teste 
                key={nota.texto}
                texto={nota.texto}
                imagem={nota.imagem}
                nota={nota.nota}
                corTexto={nota.corTexto}
                corBack={nota.corBack}
            />)}
            

            <Botao />

        </div>

    );
}

export default Sumario