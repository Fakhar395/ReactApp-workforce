import React from 'react'
import "./style.css"

function Header({ setIsAdding }) {
 

    return (
        <header>
            <h1 >Workforce Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee Detail</button>
            </div>
        </header>
    )
}

export default Header