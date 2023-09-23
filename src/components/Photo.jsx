import React, { useState } from 'react';
import Modal from './Modal';
import './Photo.scss';

function Photo({ id, title, image }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false)
    }

    return (
        <>
            <div className='photo'>
                <img
                    key={id}
                    id={id}
                    src={image}
                    alt={title}
                    className='openModal'
                    onClick={() => setShowModal(true)}
                />
                <p>{title}</p>
            </div>

            {showModal && 
                <Modal
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    handleClose={handleClose}
                />
            }
        </>
    )
}

export default Photo;