import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Crunker from 'crunker'
import './App.css'
import ReactAudioPlayer from 'react-audio-player';


let crunker  = new Crunker()

const dictionary = {
  'a': '../Abc/A.mp3',
  'b': '../Abc/B.mp3',
  'c': '../Abc/C.mp3',
  'd': '../Abc/D.mp3',
  'e': '../Abc/E.mp3',
  'f': '../Abc/F.mp3',
  'g': '../Abc/G.mp3',
  'h': '../Abc/H.mp3',
  'i': '../Abc/I.mp3',
  'j': '../Abc/J.mp3',
  'k': '../Abc/K.mp3',
  'l': '../Abc/L.mp3',
  'm': '../Abc/M.mp3',
  'n': '../Abc/N.mp3',
  'ñ': '../Abc/N.mp3',
  'o': '../Abc/O.mp3',
  'p': '../Abc/P.mp3',
  'q': '../Abc/Q.mp3',
  'r': '../Abc/R.mp3',
  's': '../Abc/S.mp3',
  't': '../Abc/T.mp3',
  'u': '../Abc/U.mp3',
  'v': '../Abc/V.mp3',
  'w': '../Abc/W.mp3',
  'x': '../Abc/X.mp3',
  'y': '../Abc/Y.mp3',
  'z': '../Abc/Z.mp3'
}

function App() {
  const [userInput, setUserInput] = useState('');

    const changeHandler = (e) => {
        setUserInput(e.target.value);
    }

    useEffect(()=> {
    },[userInput])

  return (
    <div className="App">
      <br/>
      <h1>Ingresar texto</h1>
      <h1>¡La Rosalía 🙋🏻‍♀️ lo deletra! 🙅🏻‍♀️</h1>
      <br/>
      <br/>
      <input 
        onChange={changeHandler} 
        value={userInput}
        type="text"
        placeholder="Ingresar palabra"
      />


      <button 
      onClick={()=>{
          let letters = userInput.toLowerCase().split('').map(letter => {
            return dictionary[letter]
          })

          crunker
              .fetchAudio(...letters)
              .then((buffers) => crunker.concatAudio(buffers))
              .then((concat) => crunker.export(concat, 'audio/mp3'))
              .then((output) => {
                document.querySelector("#rosalia").append(output.element);
              })
              .catch((error) => {
                throw new Error(error);
              });
      }}> OK </button> 

      <div className="container">
        <div id="rosalia" /> 
      </div>
    </div>
  )
}

export default App
