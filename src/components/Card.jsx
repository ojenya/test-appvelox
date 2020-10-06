import React from 'react'
import CardAppointment from './CardAppointment'

import {
    Link
} 
from "react-router-dom";

function Card({data}) {

   const cutList = data.slice(0,2);

   
    return (
        <>  
            <div className="cards">

                {
                cutList ? cutList.map(
                (cardInfo,i)=> 
                <CardAppointment key={i} data={cardInfo} />
                ):
                <div>Loading...</div>
                }
                    <div className="more">
                        Еще {data.length - 2} записи <br/>
                       
                        <Link to="/profile_details">
                            Подробнее
                        </Link>
                    {/* <div calendar></div> */}
                    </div>
            </div>
  
        </>
    )
}



export default Card
