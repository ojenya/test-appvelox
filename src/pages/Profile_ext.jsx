import React,{useEffect,useState} from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../components/Card'
import {ReactComponent as ArrowLeft} from '../assets/img/arrow-left.svg'
import CardAppointment from '../components/CardAppointment'


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
                        
                    </div>
                    <div className="calendar">
                        calendar
                    </div>
                </div>
                {
                list ? list.map(
                (cardInfo,i)=> 
                <CardAppointment key={i} data={cardInfo} />
                ):
                <div>Loading...</div>
                }

            
            </div>
        </div>
        </>
    )
}

export default ProfileExt
