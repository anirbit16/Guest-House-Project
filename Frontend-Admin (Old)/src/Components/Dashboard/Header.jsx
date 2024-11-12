import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import './Dashboard.css'
function Header({OpenSidebar}) {
  return (
    // <header className={styles['header']}>
    //     <div className={styles['menu-icon']}>
    //         <BsJustify className={styles['icon']} onClick={OpenSidebar}/>
    //     </div>
    //     <div className={styles['header-left']}>
    //         <BsSearch  className={styles['icon']}/>
    //     </div>
    //     <div className={styles['header-left']}>
    //         <BsFillBellFill className={styles['icon']}/>
    //         <BsFillEnvelopeFill className={styles['icon']}/>
    //         <BsPersonCircle className={styles['icon']}/>
    //     </div>
    // </header>
    <header className='header'>
    <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar}/>
    </div>
    <div className='header-left'>
        <BsSearch  className='icon'/>
    </div>
    <div className='header-right'>
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>
    </div>
</header>


  )
}

export default Header