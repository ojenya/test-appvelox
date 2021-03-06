import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'

import {ReactComponent as ArrowLeft} from '../assets/img/arrow-left.svg'
import CardAppointment from '../components/CardAppointment'
import Calendar from '../components/Calendar'



const ProfileExt = () => {
    const [list,setList] = useState([])

    useEffect (()=>{
      fetch('https://appvelox.herokuapp.com/appointment/')
      .then(response => response.json())
      .then(json => setList(json))
              
    },[])



    return (
        <>
        <div className="container-content">
            <div className="wrapper">
                <nav className="profile_ext-nav">

                <NavLink to="/profile">
                    <div className="arrow-left">
                        <ArrowLeft/>
                    </div>
                    
                    <div className="title">
                    Мои записи
                    </div>
                    
                </NavLink>
                </nav>

                <div className="profile_ext-content">
                    <div className="list">
                        {
                list ? list.map(
                (cardInfo,i)=> 
                <CardAppointment key={i} data={cardInfo} />
                ):
                <div>Loading...</div>
                } 
                    </div>
                    <div className="calendar">
                    <Calendar list={list}/>

                    </div>
                </div>
               

            
            </div>
        </div>
        </>
    )
}

export default ProfileExt
