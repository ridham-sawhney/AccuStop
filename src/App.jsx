import { useState,useEffect, useRef } from 'react'
import './App.css'
import Dialog from './components/Dialog/Dialog';
import GlitchLoader from './components/ReusableComponents/GlitchLoader/GlitchLoader';
import GameIntro from './components/GameIntro/GameIntro';
function App() {
  const [loadingStatus,updateLoadingStatus] = useState('on');
  let dialogRef = useRef();
  function onRestart(){
    console.log('Dialog closed..')
  }
  if(loadingStatus == 'on'){
    setTimeout(()=>{
      updateLoadingStatus('off');
      dialogRef.current.open();
    },1500)
  }
    
 
  return (
    <>
      <GameIntro/>
      <Dialog ref={dialogRef} onAction={onRestart}/>
      {loadingStatus == 'on' ? <GlitchLoader loadingStatus={loadingStatus} loadingText={'Loading...'}/> :undefined}
    </>
  )
}

export default App
