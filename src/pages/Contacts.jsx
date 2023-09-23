import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Contacts.scss';

function Contacts() {
    // const navigate = useNavigate();

    // const goHome = () => {
    //     navigate("/");
    // }

    // const goAbout = () => {
    //     navigate("/about");
    // }

    return (
        <div className="contacts">
            <div className="container">
                <strong>Контактная информация:</strong>
                <p><span>Адрес:</span> г.Адресенск, ул.Адресная, д.1, оф.1</p>
                <p><span>Тел.:</span> +7 777 777 77 77</p>
                <p><span>E-mail:</span> email@email.email</p>
            </div>
            {/* или сделать навигацию кнопками */}
            {/* <div className="nav-btn">
                <a href='/' onClick={goHome}>Главная</a>
            </div>
            <div className="nav-btn">
                <a href='/about' onClick={goAbout}>О проекте</a>
            </div> */}
        </div>
    )
}

export default Contacts;