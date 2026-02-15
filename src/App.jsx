import './App.css'
import {Appbar, Toolbar} from "@mui/material"
import { useState } from 'react'

function App() {

  const [searchProduct, setSearchProduct] = useState(""); 

  const cardData = [
    {
      id: 1, product: "phone", brand: "samsung", location: "local", price: 100,
    },
        {
      id: 2, product: "camera", brand: "canon", location: "usa", price: 150,
    },
        {
      id: 3, product: "printer", brand: "lg", location: "local", price: 120,
    },
        {
      id: 4, product: "set", brand: "oxford", location: "china", price: 10,
    },
        {
      id: 5, product: "usb", brand: "N/A", location: "local", price: 5,
    },    {
      id: 6, product: "notebook", brand: "N/A", location: "local", price: 5,
    },    {
      id: 7, product: "calculator", brand: "casio", location: "japan", price: 10,
    },    {
      id: 8, product: "earpods", brand: "apple", location: "local", price: 20,
    },    {
      id: 9, product: "socket", brand: "N/A", location: "korea", price: 7,
    },    {
      id: 10, product: "keyboard", brand: "samsung", location: "australia", price: 5,
    }
  ]

  function onSearch () {
    return console.log("searching")
  }

  return (
    <>
      <h3>Product dashboard</h3>
   
      <div className=''> 
            <label>
              <input type="text" value={searchProduct} placeholder='search' onChange={(e) =>  setSearchProduct(e.target.value)}/>
            </label>
            <button onClick={onSearch}>Search product</button>
      </div>

      <div className='products'>
          {cardData.map((card) => (
              <div key={card.id}>
                  <h3>{card.product}</h3>
                  <p>{card.brand}</p>
                  <p>{card.location}</p>
                  <p>{card.price}</p>
              </div>             
          ))}          
      </div>
    </>
  )
}

export default App