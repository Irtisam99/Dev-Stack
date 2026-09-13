import { Suspense, useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import type { ITechnology } from './types/technologyType'
import Technologies from './Technologies'


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
        <Suspense fallback={<h2>Loading....</h2>}>
             <Technologies technologyPromise={technologyPromise}></Technologies>
        </Suspense>
    
    </>
  )
}

export default App
