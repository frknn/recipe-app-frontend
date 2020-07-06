import React from 'react'
import './styles/ModalWrapper.css'

function ModalWrapper(props) {
  return (
    <div className="modal-wrapper">
      {props.children}
    </div>
  )
}

export default ModalWrapper
