import React from 'react'
import '../assets/style/card.scss'
import CardAppointment from './CardAppointment'
import Profile_ext from '../pages/Profile_ext'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} 
from "react-router-dom";

function Card({data}) {

   const cutList = data.slice(0,2);

   
    return (
        <>  
        <Router>
            <div className="cards">

                {cutList ? cutList.map((cardInfo,i)=> <CardAppointment key={i} data={cardInfo} />):<div>Loading...</div>}
                
                    <div className="more">
                        Еще {data.length - 2} записи <br/>
                       
                        <Link to="/profile_details">
                            Подробнее
                        </Link>

                    </div>
            </div>
            <Switch>
            {/* <Route exact path='/profile_details' render={() => <Profile_ext />}/> */}

                <Route exact path="/profile_details">
                    <Profile_ext/>
                </Route>
            </Switch>
        </Router>
        </>
    )
}



export default Card
