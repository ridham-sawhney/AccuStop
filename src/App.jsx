import { useState,useEffect, useRef } from 'react'
import './App.css'
import Dialog from './components/Dialog/Dialog';
import GlitchLoader from './components/ReusableComponents/GlitchLoader/GlitchLoader';
import GameIntro from './components/GameIntro/GameIntro';
import GameGround from './components/GameGround/GameGround';
function App() {
  const [loadingStatus,updateLoadingStatus] = useState('on');
  
  if(loadingStatus == 'on'){
    setTimeout(()=>{
      updateLoadingStatus('off');
      // dialogRef.current.open();
    },1500)
  }
    
 
  return (
    <>
      <GameIntro/>
      <GameGround/>
      {loadingStatus == 'on' ? <GlitchLoader loadingStatus={loadingStatus} loadingText={'Loading...'}/> :undefined}
    </>
  )
}

export default App
