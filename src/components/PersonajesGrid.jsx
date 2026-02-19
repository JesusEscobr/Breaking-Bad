import React from 'react'
import Spinner from './Spinner'
import PersonajeItem from './PersonajeItem'

const PersonajesGrid = ({items, isLoading}) => {
  return isLoading ? (
    <Spinner />
  ):(
    <section className="cards">
      {items.map((item)=>(
        <PersonajeItem key={item.char_id} item={item} />
      ))}  
    </section>
  )
}

export default PersonajesGrid