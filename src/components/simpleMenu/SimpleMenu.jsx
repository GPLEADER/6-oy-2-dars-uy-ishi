import React from 'react'
import './SimpleMenu.css'
function SimpleMenu() {
    return (
        <div>
            <nav>
                <ul className='ul'>
                    <li className='li'><a href="#">Bosh sahifa</a></li>
                    <li className='li'><a href="#">Biz haqimizda</a></li>
                    <li className='li'><a href="#">Aloqa</a></li>
                    <li className='li'><a href="#">Yangiliklar</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SimpleMenu