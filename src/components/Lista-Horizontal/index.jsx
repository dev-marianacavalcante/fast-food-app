import './index.css'
import { useState } from 'react';

function RenderItems() {
  let [items, setItems] = useState([
    {
      id: '1',
      name: 'Entrada',
      selected: false,
    },
    {
      id: '2',
      name: 'Hamburguer',
      selected: true,
    },
    {
      id: '3',
      name: 'Bebidas',
      selected: false,
    },
    {
      id: '4',
      name: 'Sobremesa',
      selected: false,
    },
    {
      id: '5',
      name: 'Sobremesa',
      selected: false,
    },
    {
      id: '6',
      name: 'Sobremesa',
      selected: false,
    },
    {
      id: '7',
      name: 'Sobremesa',
      selected: false,
    }
  ])
  
  function selectItem(item) {
    const temp = items.map(i => {
      if (i.id == item.id) {
        i.selected = true;
      } else if (i.id) {
        i.selected = false;
      }

      return i;
    });
    setItems(temp)
  }

  return items.map(item => <a onClick={() => selectItem(item)}><li key={item.id} className={item.selected ? "item-selected" : "item"}>{item.name}</li></a>)
}

function ListaHorizontal() {
  return (
    <div className='list-item'> 

        
      <RenderItems/>

      
    </div>
  )
}
export default ListaHorizontal
