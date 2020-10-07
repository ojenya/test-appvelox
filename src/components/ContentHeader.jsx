import React from 'react'

import {ReactComponent as Search} from  '../assets/img/search.svg'
import {ReactComponent as Notification} from  '../assets/img/notification.svg'
import {ReactComponent as Eye} from  '../assets/img/eye.svg'
import {ReactComponent as Circle} from  '../assets/img/circle.svg'
import {ReactComponent as Arrow} from  '../assets/img/arrow-down.svg'

import userImg from '../assets/img/doc.png' 


const Contentheader = (props) => {
    return (
        <>
            <div className="container-header">
                <span>Мой профиль</span>
                <ul>
                    {/* <li><a href=""><img src={search} alt="search" /></a></li>
                    <li><a href=""><img src={notification} alt="notification" /></a></li>
                    <li><a href=""><img src={eye} alt="eye" /></a></li>
                    <li><a href=""><img src={circle} alt="circle" /></a></li>
                    <li><a href=""><img src={arrow} alt="arrow-down" /></a></li> */}
                    <Search/>
                    <Notification/>
                    <Eye/>
                    <Circle />
                    <Arrow/>
                </ul>
            </div>  
        </>
    )
}



export default Contentheader
