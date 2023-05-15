import './bootstrap';
import react from 'react'
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import MyApp from './components/MyApp';
ReactDom.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <MyApp />
    </BrowserRouter>
)