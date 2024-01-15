import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState('')
  const [imageURL, setImageURL] = useState('')

  // Obtenemos el texto
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Obtenemos la imagen
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split(' ', 3)
    console.log(threeFirstWord)

    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size?50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImageURL(data._id)
      })
  }, [fact])

  return (
    <main>
      <h1>Prueba técnica</h1>
      <p>El siguiente texto se obtiene de un servicio externo:</p>
      {fact && <p>{fact} </p>}
      {imageURL && <img src={`https://cataas.com/cat/${imageURL}`} alt={`Image extracted using the first three word fo ${fact}`} />}
    </main>
  )
}
