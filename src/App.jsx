import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layouts/Card';
import Familia from './components/basicos/Familia';
import Familia2 from './components/basicos/Familia2';
import Familia3 from './components/basicos/Familia3';
import FamiliaMembro from './components/basicos/FamiliaMembro';

import './App.css'
import ListaAlunos from './components/reprticao/ListaAlunos';
import TabelaProdutos from './components/reprticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import { DiretaPai } from './components/comunicacao/DiretaPai';
import { IndiretaPai } from './components/comunicacao/IndiretaPai';
import { IndiretaPaiComEstado } from './components/comunicacao/IndiretaPaiComEstado';
import { Input } from './components/formulario/input';
import { Contador } from './components/contador/Contador';
import { ContadorSeparado } from './components/contador/separado/ContadorSeparado';
import { MegaSena } from './components/MegaSena/MegaSena';
const App = () =>
<div className='App'>
  <h1>Fundamentos React</h1>

  <div className="Cards">

    <Card titulo ='#16 - Mega Sena' color='#11df2d'>
      <MegaSena />
    </Card>
    
    <Card titulo ='#15.1 - Contador separado' color='#ee06e2'>
      <ContadorSeparado valorInicial={120}/>
    </Card>
   
    <Card titulo ='#15 - Contador' color='#ee06e2'>
      <Contador valorInicial={12}/>
    </Card>
   
    <Card titulo ='#14 - Coponentes controlados' color='#aeca0e'>
      <Input />
    </Card>
    
    <Card titulo ='#13 - Comunicação Indireta com Estado' color='#c77dc3'>
      <IndiretaPaiComEstado />
    </Card>
    
    <Card titulo ='#12 - Comunicação Indireta' color='#c77dc3'>
      <IndiretaPai />
    </Card>
   
    <Card titulo ='#11 - Comunicação Direta' color='#211e49'>
      <DiretaPai />
    </Card>
    
    <Card titulo ='#10 - Renderização condicional' color='#664c86'>
      <ParOuImpar numero={11} />
      <UsuarioInfo usuario={{nome: 'Bruno B.'}} />
      <UsuarioInfo />
      <UsuarioInfo usuario={{email: 'teste@domain.com'}}/>
    </Card>
   
    <Card titulo ='#09 - Repetição #02' color='#664c86'>
      <TabelaProdutos />
    </Card>
    
    <Card titulo ='#08 - Repetição' color='#4c326b'>
      <ListaAlunos />
    </Card>

    <Card titulo ='#07 - Componentes com Filhos #03' color='#3d6d3d'>
      <Familia3 sobrenome='Ferreira'>
        <FamiliaMembro nome='Pedro'/>
        <FamiliaMembro nome='Ana'/>
        <FamiliaMembro nome='Gustavo'/>
      </Familia3>
    </Card>
    
    <Card titulo ='#06 - Componentes com Filhos #02' color='#4f8f4f'>
      <Familia2 sobrenome='Ferreira'>
        <FamiliaMembro nome='Pedro'/>
      </Familia2>
    </Card>
    
    <Card titulo ='#05 - Componentes com Filhos' color='#358a35'>
      <Familia sobrenome='Ferreira'/>
    </Card>
    
    <Card titulo ='#04 - Desafio aleatório' color='#a7519f'>
      <Aleatorio min={2} max={7} />
    </Card>
    
    <Card titulo ='#03 - Fragmento' color='#c183ff'>
      <Fragmento />
    </Card>
    
    <Card titulo ='#02 - Componente com parametro' color='#ffacff'>
    <ComParametro title='Componente com propriedades' content='Testando componentes com parametros' />
    </Card>
    
    <Card titulo ='#01 - Primeiro componnte' color='#423b21'>
    <Primeiro />
    </Card>
  </div>
</div>

export default App