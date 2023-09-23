import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = (props) => {
    console.log(props)
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }
    return ReactDOM.createPortal(
        <>
            <div className='overlay'>
                <div className='modal'>
                    <div className='container'>
                        <button
                            className='closeModal'
                            onClick={()=> props.handleClose()}>
                            &#10006;
                        </button>
                        <div className='modal-photo'>
                            <img className='modal-img'
                                key={props.id}
                                id={props.id}
                                src={props.image}
                                alt={props.title}
                                handleClose={() => handleClose}
                            />
                            <hr class="hr-sloping-lines" />
                            <p>{props.title}</p>
                            <hr class="hr-sloping-lines" />
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('modal')
    )
}

export default Modal;