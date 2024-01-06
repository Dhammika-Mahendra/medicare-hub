import { useState } from "react";
import Admin from "./Admin";


function App() {

  const [alignment, setAlignment] =useState('L');

  const handleAlignment = (event, newAlignment) => {
    console.log(newAlignment)
    setAlignment(newAlignment);
  };

  return (
    <>
      <Admin></Admin>
    </>
  );
}

export default App;
