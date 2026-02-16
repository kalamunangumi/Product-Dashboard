import './App.css'
import { useState } from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { red } from '@mui/material/colors';

function App() {

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

  const [searchVal, setSearchVal] = useState("");
  const [products, setProducts] = useState(cardData)

  function onSearch (e) {
    e.preventDefault();

    if (searchVal === "") {
      setProducts(cardData)
    }

    const filterBySearch = cardData.filter( (item)=> {
      if (item.brand.toLowerCase().includes(searchVal.toLocaleLowerCase())) 
        return item;
    })
    setProducts(filterBySearch)
  }

  return (
    <>
      <AppBar position='static'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit'>
                <ArrowDropDownCircleIcon/>
            </IconButton>
            <Typography variant='h6'>
Header            </Typography>

            <Stack direction='row' spacing={2} bgcolor={red}>
              <Button>Police</Button>
              <Button>Pastor</Button>               
              <Button>...</Button>
            </Stack>
          </Toolbar>
      </AppBar>

      <h3>Product dashboard</h3>
   
      <div className='searchForm'> 
          <form>
            <label>
            <input name='search' type="text" placeholder='search' onChange={(e) =>  setSearchVal(e.target.value)}/>
            </label>
            <button onClick={onSearch}>Search product</button>
          </form>
      </div>

      <div className='products'>
          {products.map((card) => (
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