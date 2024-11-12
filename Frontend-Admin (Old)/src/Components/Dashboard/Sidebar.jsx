import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import './Dashboard.css'
 import { FaHome } from "react-icons/fa";
 import { PiUsers } from "react-icons/pi";
 import { MdOutlineBedroomChild } from "react-icons/md";
 import { Link } from 'react-router-dom';
  import { LiaUserSolid } from "react-icons/lia";


function Sidebar({openSidebarToggle, OpenSidebar}) {
  // return (
  //   <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
  //       <div className={styles['sidebar-title']}>
  //           <div className={styles['sidebar-brand']}>
  //               <BsCart3  className={styles['icon_header']}/> SHOP
  //           </div>
  //           <span n className={`${styles.icon} ${styles.close_icon}`} onClick={OpenSidebar}>X</span>
  //       </div>

  //       <ul className={styles['sidebar-list']}>
  //           <li className={styles['sidebar-list-item']}>
  //               <Link to="">
  //                   <BsGrid1X2Fill className='icon'/> Dashboard
  //               </Link>
  //           </li>
  //           <li className={styles['sidebar-list-item']}>
  //               <Link to="">
  //                   <BsFillArchiveFill className={styles['icon']}/> Products
  //               </Link>
  //           </li>
  //           <li className={styles['sidebar-list-item']}>
  //               <Link to="">
  //                   <BsFillGrid3X3GapFill className={styles['icon']}/> Categories
  //               </Link>
  //           </li>
  //           <li className={styles['sidebar-list-item']}>
  //               <Link to="">
  //                   <BsPeopleFill className={styles['icon']}/> Customers
  //               </Link>
  //           </li>
  //           <li className={styles['sidebar-list-item']}>
  //               <Link to="">
  //                   <BsListCheck className={styles['icon']}/> Inventory
  //               </Link>
  //           </li>
  //           <li className={styles['sidebar-list-item']}>
  //               <Link to="">
  //                   <BsMenuButtonWideFill className={styles['icon']}/> Reports
  //               </Link>
  //           </li>
  //           <li className={styles['sidebar-list-item']}>
  //               <Link to="">
  //                   <BsFillGearFill className={styles['icon']}/> Setting
  //               </Link>
  //           </li>
  //       </ul>
  //   </aside>
  // )

  return (
 
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            {/* <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> Menu
            </div> */}
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                <FaHome /> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/users-page">
                <PiUsers/> Users
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/dashboard-section/rooms-page">
                <MdOutlineBedroomChild /> Rooms
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsPeopleFill className='icon'/> Customers
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsListCheck className='icon'/> Registration
                </Link>
            </li>
            {/* <li className='sidebar-list-item'>
                <Link to="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li> */}
        </ul>
    </aside>
 
    

  )


  
}

export default Sidebar