import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Master from './components/Master.jsx'
import "./App.jsx";

createRoot(document.getElementById('root')).render(
   <Master></Master>,
)
