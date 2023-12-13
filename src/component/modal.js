import React, { useState } from 'react';
import MyModal from './modalshoe';

const Modal = () => {
    const [shoeModal, setShowModal] = useState(false);
    const Closemodal = () => setShowModal(false)
  return (
    <>
    <button onClick={() => {
        setShowModal(true)
    }}>open</button>
    {shoeModal && <MyModal closemodal = {Closemodal}/>}

    </>
  )
}

export default Modal;