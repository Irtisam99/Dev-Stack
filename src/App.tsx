import { Suspense, useState } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import type { ITechnology } from './types/technologyType'
import Technologies from './Technologies'
import { toast, ToastContainer } from 'react-toastify'


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
  const alreadyExists = selectedTechnologies.some(
    (selectedTechnology) =>
      selectedTechnology.id === technology.id
  );

  if (alreadyExists) {
    toast.warning(`${technology.name} is already in your stack!`);
    return;
  }

  setSeletectedTechnologies((previousTechnologies) => [
    ...previousTechnologies,
    technology,
  ]);

  toast.success(`${technology.name} added to your stack!`);
};

  // Remove from stack

// REMOVE FROM STACK
// REMOVE FROM STACK
const removeFromStack = (technologyId: string) => {
  const technology = selectedTechnologies.find(
    (technology) => technology.id === technologyId
  );

  if (!technology) {
    return;
  }

  setSeletectedTechnologies((previousTechnologies) =>
    previousTechnologies.filter(
      (technology) => technology.id !== technologyId
    )
  );

  toast.info(`${technology.name} removed from your stack.`);
};

  // Remove All
    const removeAllFromStack = () => {
    setSeletectedTechnologies([]);
    toast.success("All technologies removed from your stack.");

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
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
