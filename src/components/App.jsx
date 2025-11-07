import Header from './Header.jsx';
import Navegation from './Navegation.jsx';
import Item from './Item.jsx';
import Link from './Link.jsx';
import List from './List.jsx';


function App() {


  return (
    <>
      <Header 
        corFundo='bg-black'
        corTexto='text-white'
        espacamento='px-[12.5rem]'
      >
        <Navegation 
        modeloCaixa='flex'
        justificacao='justify-between'
        >
          <Link texto='Bicarte'/>
          <List 
          modeloCaixa='flex'
          distanciamento ='gap-[2,5rem]'
          >
            <Item>
              <Link texto='modelos'/>
            </Item>
            <Item>
              <Link texto='contato'/>
            </Item>
            <Item>
              <Link texto='sobre'/>
            </Item>
          </List>
        </Navegation>
      </Header>
    </>
  )
}

export default App;
