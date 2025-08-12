import './App.css'

import HomePage from './Components/HomePage';
import SimpleForm from './Components/SimpleForm';
import OptionalForm from './Components/OptionalForm'
import { Routes, Route } from "react-router-dom";

import { useState } from 'react'



function App() {
  // const [count, setCount] = useState(0)

  return (

    <>
    <Routes>

      <Route path="/" element={<HomePage/>} />
      <Route path="/maintask" element={<SimpleForm/>}/>
      <Route path="/optionaltask" element={<OptionalForm/>}/>

    </Routes>
      
    </>

  )
}

export default App;
