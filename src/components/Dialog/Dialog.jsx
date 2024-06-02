import {useState,forwardRef,useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';
import GlitchButton from '../ReusableComponents/GlitchButton/GlitchButton';
import './Dialog.css'
export default forwardRef(function Dialog({scoreObject,onAction},ref){
var dialogRef = useRef();
function getPressedTime(){
 var _totalTime = scoreObject.totalTime*1000;
 var _remainingTime = scoreObject.remainingTime;
 console.log(_totalTime+" "+_remainingTime)
 var secondsPassed = Math.floor((_totalTime-_remainingTime)/1000);
 var millisecondsPassed = (_totalTime-_remainingTime)%1000;
 if(secondsPassed>0){
  return secondsPassed+' sec,'+millisecondsPassed+" ms";
 }
 else{
  return millisecondsPassed+' ms';
 }
}
useImperativeHandle(ref,()=>{
  return{
    open(){
        dialogRef.current.showModal();
    }
  } 
});
return createPortal(
    <dialog ref={dialogRef} className='dialogDimensions'>
        <div className='restartDialog'>
           {scoreObject.remainingTime>=0 && <h1>{scoreObject.remainingTime==0 ? 'Great !' : 'You Lost !'}</h1>}
           {scoreObject.remainingTime<0 && <h1>You Missed !</h1>}
           <h3>Score: {scoreObject.remainingTime < 0 ? 0 :((scoreObject.totalTime*1000 - scoreObject.remainingTime)/(scoreObject.totalTime*1000) * 100).toFixed(2)}</h3>
           {scoreObject.remainingTime >=0 && <p>Pressed after :  {getPressedTime()}</p>}
           <form method="dialog" onSubmit={onAction}>
           <GlitchButton label={'Try Again'}/>
           </form>
        </div>
    </dialog>,document.querySelector('body'));
});