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

  // SelectedOnes

  const [selectedTechnologies, setSeletectedTechnologies]=useState<ITechnology[]>([])


  // ADD TO STACK
  const addToStack = (technology: ITechnology) => {
  setSeletectedTechnologies((previousTechnologies) => {
    const alreadyExists = previousTechnologies.some(
      (selectedTechnology) =>
        selectedTechnology.id === technology.id
    );

    if (alreadyExists) {
      return previousTechnologies;
    }

    return [...previousTechnologies, technology];
  });
};

  // Remove from stack

    const removeFromStack = (technologyId: string) => {
    setSeletectedTechnologies((previousTechnologies) =>
      previousTechnologies.filter(
        (technology) => technology.id !== technologyId
      )
    );
  };

  // Remove All
    const removeAllFromStack = () => {
    setSeletectedTechnologies([]);
  };


  return (
    <>
        <Nav></Nav>
        <Hero></Hero>
        <Suspense fallback={<h2>Loading....</h2>}>
             <Technologies
              technologyPromise={technologyPromise}
              selectedTechnologies={selectedTechnologies}
              addToStack={addToStack}
              removeFromStack={removeFromStack}
              removeAllFromStack={removeAllFromStack}

             />
        </Suspense>
    
    </>
  )
}

export default App
