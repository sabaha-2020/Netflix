import logo from './logo.svg';

import './App.css';

import {originals,action,comedy} from './Urls'
import React from 'react';
import Navbar from './Component/navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Rowpost from './Component/RowPost/Rowpost';

import Card from './Component/Card/Card';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost url={originals}  title='Netflix Originals'/>
     <Rowpost url={action} title='Action' isSmall/>
     <Card url={comedy} title ='Comedy Movie' />
    
     
    </div>
  );
}

export default App;
