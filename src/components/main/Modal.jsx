import React from 'react'
import { useState } from 'react'
import '../../css/modal.css'
const Modal = () => {
  return (
    <div className='modal-background'>
      <div className='modal-container'>
      <button>X</button>
      <div>File</div>
      <div>Num of qs</div>
      <div>difficulty</div>
      <button>start quiz</button>
    </div>
    </div>
  )
}

export default Modal


