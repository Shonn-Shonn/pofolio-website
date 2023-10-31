import React from 'react'
import styles from '../modules/Navbar.module.css';
import navbarImg from '../images/navigation-bar.png';

export default function Navbar() {

  function toggleFunction()
  {
    console.log('hello');
  }

  return (
   <>
    <div className={`${styles.appHeader}`}>
    </div>
         <nav className={`${styles.navbar}`}>
              <h1>AWINT</h1>
              <ul className={`${styles.ul}`}>
                <li className={`${styles.li}`}>Home</li>
                <li className={`${styles.li}`}>About</li>
                <li className={`${styles.li}`}>Service</li>
                <li className={`${styles.li}`}>
                   <a href='#' onClick={toggleFunction}>
                    <img  src={navbarImg} width={30} />
                   </a>
                </li>
              </ul>
         </nav>
   </>
  )
}
