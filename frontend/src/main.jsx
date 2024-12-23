import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import store from './store'; // Путь к вашему store
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)

//<StrictMode>
//  <App />
//</StrictMode>,