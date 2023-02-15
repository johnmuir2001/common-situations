import { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText( event.target.value );
  }

  return (
    <>
      <h1>THIS IS AN UPDATED TAG</h1>
      <input type="text" onChange={ handleInputChange } ></input>
      <p> {inputText} </p>
    </>
  );
}

export default App;





// const App = () => {
//   const [numbers, setNumbers] = useState( [1, 2, 3, 4, 5] );

//   const handleAddNum = () => {
//     let numbersCopy = [...numbers];
//     numbersCopy.push( numbersCopy[ numbersCopy.length - 1 ] + 1 );
//     setNumbers( numbersCopy );
//   }

//   const handleRemoveNum = (selectedIndex) => {
//     let numbersCopy = [...numbers];
//     numbersCopy.splice( selectedIndex, 1);
//     setNumbers( numbersCopy );
//   }

//   return (
//     <div>
//       <h1>Common Situations</h1>

//       {numbers.map( (curNumber, index) => {
//         return <p key={index} onClick={() => handleRemoveNum(index) } > {curNumber} </p>
//       })}

//       <button onClick={ handleAddNum } >Add New Number</button>

//     </div>
//   );
// }
