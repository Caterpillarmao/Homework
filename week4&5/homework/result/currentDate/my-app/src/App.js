import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import APP1 from './Component/App1/App1';
import APP2 from './Component/App2/App2';

function App() {


  return (
    <div>
      <APP1/>
      <APP2/>
    </div>
  );
}

export default App;
