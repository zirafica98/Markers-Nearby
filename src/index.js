import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MyMap } from './Map/Map';
import reportWebVitals from './reportWebVitals';
import ChangeRadius from './RadiusChange';
import SearchForm from './custom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cityName=urlParams.get('location')
root.render(
  <React.StrictMode>
    <MyMap cityName={cityName}></MyMap>
    <SearchForm></SearchForm>
  </React.StrictMode>
  
);



reportWebVitals();
