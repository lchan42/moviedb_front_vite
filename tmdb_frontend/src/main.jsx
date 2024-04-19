import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CtxProvider} from './Context/ContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CtxProvider>
      <App />
    </CtxProvider>
  </React.StrictMode>,
)
