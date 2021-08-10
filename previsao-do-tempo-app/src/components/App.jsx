import React, { useEffect, useState } from 'react'
import '../App.css'
import { api } from "../services/api"
import { FaTemperatureHigh, FaWind } from 'react-icons/fa'

function App() {
  const [tempo, setTempo] = useState(null)
  const [cidade, setCidade] = useState(" ")
  const [busca, setBusca] = useState("(busque uma cidade)")

  async function handleGetWeather(event) {
    event.preventDefault()
    const resposta = await api.get(busca)
    setCidade(busca)
    
    console.log(resposta.data)
    setTempo(resposta.data)
  }

  useEffect(() => {
    //handleGetWeather()
  }, [])

  return (

    <div className="App">

      
      <header>
        <form onSubmit={handleGetWeather}>
          <input
            type="text" value={busca}
            onChange={(event) => setBusca(event.target.value)}
          />
          <button onClick={handleGetWeather}>enviar</button>
        </form>
      </header>
      

        {tempo &&
          <main>
            
            <h1>{cidade.toUpperCase()}</h1>

            <section className="clima-atual">  {/*dia atual*/}
              <h2>Clima atual</h2>
              <p>{tempo.temperature}</p>
              <p>{tempo.description}</p>
              <p>{tempo.wind}</p>
            </section>


            <section className="previsao">  {/*previsão para os dias seguintes*/}
              <h2>Previsão para os próximos 3 dias</h2>

              <ol>
              {
                tempo.forecast.map(day =>
                  <li>
                    <div>
                      <FaTemperatureHigh />
                      <p>{day.temperature}</p>
                    </div>

                    <div>
                      <FaWind />
                      <p>{day.wind}</p>
                    </div>
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
