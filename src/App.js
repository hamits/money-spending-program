import products from './products.json'
import Product from './components/Product.js'
import Basket from './components/Basket.js'
import { useState } from 'react';

function App() {


  const [basket,setBasket]=useState([])


  return (
    <div>
      <div className='container'>
        {products.map((e)=>{return(Product(e,basket,setBasket))})}
      </div>
      {Basket(basket)}
    </div>
  );
}

export default App;
