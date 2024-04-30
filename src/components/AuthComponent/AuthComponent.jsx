import React, { useEffect, useState } from 'react';
import './AuthComponent.css';
import authBackground from'./../../assets/images/tavern-7411977_1920.jpg'

function AuthComponent({children}) {

    return (
        <div className='auth-container'>
            <div className="auth-background-panel">
                <img src={authBackground} alt="Unselectable Image" class="auth-background-img img-unselectable" />
            </div>
            {children}
        </div>
    )
}

export default AuthComponent;