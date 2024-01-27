import React from 'react'
import { forwardRef, useImperativeHandle ,useRef} from 'react';

const ResultModel = forwardRef(function ResultModel({result,targetTime},ref) {
    const dialog = useRef();
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    } );

    return (
    <>
    <dialog ref={dialog} className='result-modal'  >
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong> Second.</p>
        <p>The target time was <strong>X Second left.</strong></p>
        <form mothod="dialog" >
            <button>Close</button>
        </form>
    </dialog>
    </>
  );
})
export default ResultModel;
