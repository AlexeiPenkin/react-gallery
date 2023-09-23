import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <Link to="/">Главная</Link>
            <Link to="/about">О приложении</Link>
            <Link to="/contacts">Контакты</Link>
        </div>
    )
}

export default Navigation;