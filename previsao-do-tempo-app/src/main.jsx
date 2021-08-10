import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

/*
ReactDOM.render() é um metodo com 2 argumentos:

O primeiro (StrictMode) mostra quais apps serão injetados no index.html.

O segundo ('root') indica ONDE, ou seja, em qual parte do index.html eles serão injetados.
*/
