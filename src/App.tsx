import { useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import type { ITechnology } from './types/technologyType'


const technologiesFetch=async():Promise<ITechnology[]>=>{
  const res=await fetch('/data.json');
  const data=await res.json();
  return data
}

function App() {
  const[technologyPromise]=useState(()=>technologiesFetch())
  console.log(technologyPromise)

  return (
    <>
        <Nav></Nav>
        <Hero></Hero>
    
    </>
  )
}

export default App
