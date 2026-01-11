import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/*TODO через stricktmode подвійне рендерення відбувається, розібратись пізніше як це впливає на застосунок та як це виправити*/}
    <App />
  </React.StrictMode>,
)
