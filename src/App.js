
import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
        nome: 'Projetos',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Mercado',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Gestão',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    }
]

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
