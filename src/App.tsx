import { useState } from 'react'
import useSound from 'use-sound'
import Silver_Lights from './COCONUTS_-_Silver_Lights_65897459.mp3'
import gif from './assets/3d-saul-saul-goodman.gif'
import rooster from './assets/rooster-mask.png'
import room from './assets/room.png'
import room_horse from './assets/room_horse.png'
import './App.css'

const full_dialog = [
  "click to start",
  "Before you go, here's three questions to ponder.",
  "Do you enjoy hurting people?",
  "Where are you right now?",
  "And the final question:",
  "Why are we having this conversation?",
  "That's all for now. See you soon...",
]

function App() {
  const [play_Silver_Lights, control_Silver_Lights] = useSound(Silver_Lights);
  const [dialog, setDialog] = useState(full_dialog[0])

  function nextDialog(){
    if(dialog === full_dialog[0]){
      setDialog(full_dialog[1]);
      control_Silver_Lights.stop();
      play_Silver_Lights();
      setTimeout(() => { 
        setDialog(full_dialog[2]);
        setTimeout(() => {
          setDialog(full_dialog[3]);
          setTimeout(() => {
            setDialog(full_dialog[4]);
            setTimeout(() => {
              setDialog(full_dialog[5]);
              setTimeout(() => {
                setDialog(full_dialog[6]);
                setTimeout(() => {
                  window.close();
                }, 5000);
              }, 5000);
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }
  }

  return (
    <div className="App" onClick={nextDialog}>
      { dialog === "click to start" ? <></> : 
      <div>
        <div className='yellow'></div>
        <img className='room'
        src={room}
        alt="rooster mask" 
        height="400"/>
        <img className='rooster'
        src={rooster} 
        alt="rooster mask" 
        height="400"/>
      </div>}
      <span>{dialog}</span>
      <span className='copy'>{dialog}</span>
    </div>
  )
}

export default App
