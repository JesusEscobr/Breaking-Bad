import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/header'
import PersonajesGrid from './components/PersonajesGrid'

const App=() =>  {

  const [items,setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{

    const fetchItems = async () => {
      const resultado = await axios.get('/personajes.json')
      setItems(resultado.data)
      setLoading(false)
    }

    fetchItems()
  },[])

  return (
    <div className="container">
      <Header />
      <PersonajesGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App