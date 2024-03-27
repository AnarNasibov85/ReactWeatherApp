
import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Info from './components/Info/Info'

function App() {
const [info,setInfo]=useState({})


  return (
    <>
   <Form  setInfo={setInfo}/>
   <Info info={info} />
    </>
  )
}

export default App
