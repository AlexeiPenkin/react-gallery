import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

function Header() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    const goAbout = () => {
        navigate("/about");
    }

    const goContacts = () => {
        navigate("/contacts");
    }

    return (
        <div className="header__nav">
            <div className="nav-btn">
                <a href="/" onClick={goHome}>Главная</a>
            </div>
            <div className="nav-btn">
                <a href="/about" onClick={goAbout}>О приложении</a>
            </div>
            <div className="nav-btn">
                <a href="/contacts" onClick={goContacts}>Контакты</a>
            </div>
        </div>
    )
}

export default Header;