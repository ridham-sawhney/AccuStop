import {useState,forwardRef,useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';
import GlitchButton from '../ReusableComponents/GlitchButton/GlitchButton';
import './Dialog.css'
export default forwardRef(function Dialog({onAction},ref){
var dialogRef = useRef();
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
           <h1>Great ! </h1>
           <h3>Score: 40</h3>
           <p>Time Left: 10 ms</p>
           <form method="dialog" onSubmit={onAction}>
           <GlitchButton label={'Try Again'}/>
           </form>
        </div>
    </dialog>,document.querySelector('body'));
});