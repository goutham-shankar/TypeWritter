import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Components/Navbar';
import Tabs from './Components/Tabs';
import Subscibe from './Components/subscibe';
import Footer from './Components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Tabs />
    <Subscibe />
    <Footer />


  </React.StrictMode>
);
