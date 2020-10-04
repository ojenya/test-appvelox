import React from 'react'
import Card from '../components/Card'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


const Support = (props) => {

    const{list} = props
    return (
        <>
          <div className="container-content">
            <div className="wrapper">
                <div className="subtitle">Сообщения</div>
                <div className="title">Сообщения</div>

            </div>
        </div>  
        </>
    )
}



export default Support
