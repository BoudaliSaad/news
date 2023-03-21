import './bootstrap';
import react from 'react'
import ReactDom from 'react-dom/client';

import MyApp from './components/MyApp';
ReactDom.createRoot(document.getElementById('app')).render(
    <MyApp/>
)