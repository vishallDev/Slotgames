import React from 'react';
import ReactDOM from 'react-dom';

const Navbar=()=>{
    return(<>
        <nav className="Navbar Navbar-expand-sm  bg-dark ">
            <ul className="list-group d-flex flex-row justify-content-center text-uppercase ">
                <li className="list-unstyled m-2">🎰<a href="" className="text-decoration-none p-2 m-1 text-light" >Home</a></li>
                <li className="list-unstyled m-2"><a href="https://devvishal.netlify.app" className="text-decoration-none p-2 m-1 text-light" >Contact Us</a>🎰</li>
            </ul>
        </nav>
        <div className="container text-center my-2 p-1">🕹 Welcome To Slot Machine Game 🕹</div>
     </>   
    )
}

export default Navbar;