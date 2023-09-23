import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './About.scss';
 
function About() {
    // const navigate = useNavigate();

    // const goHome = () => {
    //     navigate("/");
    // }

    // const goContacts = () => {
    //     navigate("/contacts");
    // }

    return (
        <div className='about'>
            <div className="container">
                <strong>О проекте:</strong>
                <p>
                    Проект представляет собой небольшое приложение на React JS.<br></br>В приложении отображаются фотографии с сайта Flickr. Данные рендерятся из массива в формате JSON. Массив храниться в базе данных JSON-сервера (JSON-server).
                </p>
            </div>
            {/* или сделать навигацию кнопками */}
            {/* <div className="nav-btn">
                <a href='/' onClick={goHome}>Главная</a>
            </div>
            <div className="nav-btn">
                <a href='/contacts' onClick={goContacts}>Контакты</a>
            </div> */}
        </div>
    )
}

export default About;