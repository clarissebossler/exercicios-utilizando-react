import React, { useEffect, useState } from 'react'
import '../App.css'
import { api } from "../services/api"

function App() {
  const [tempo, setTempo] = useState(null)
  const cidade = "Diadema"

  async function handleGetWeather() {
    const resposta = await api.get(cidade)
    console.log(resposta.data)
    setTempo(resposta.data)
  }

  useEffect(() => {
    handleGetWeather()
  })

  return (

    <div className="App">

      {/*
      <header>
        <button onClick={handleGetWeather}>enviar</button>
      </header>
      */}

        {tempo &&
          <main>
            
            <h1>{cidade}</h1>

            <section className="clima-atual">  {/*dia atual*/}
              <h2>Clima atual</h2>
              <p>{tempo.description}</p>
              <p>{tempo.temperature}</p>
              <p>{tempo.wind}</p>
            </section>


            <section className="previsão">  {/*previsão para os dias seguintes*/}
              <h2>Previsão</h2>

              <ol>
              {
                tempo.forecast.map(day =>
                  <li>
                    <p>{day.temperature}</p>
                    <p>{day.wind}</p>
                  </li>
                )
              }
              </ol>
            </section>
          </main>
        }  
      
    </div>
  )
}

export default App
