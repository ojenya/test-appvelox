import React from 'react'

import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import '../assets/style/card.scss'

function CardAppointment({data}) {
    const {date,
        depart,
        doc_depart,
        imageUrl,
        name} = data

        const unixTimestamp = date
        
    return (
        <>  
        {data? 
        (<div className="card">
                <div className="card-desc">
                    <div className="date"> 
                        <Moment format="dddd, D.MM.YYYY | H:mm" locale="ru" unix>{unixTimestamp}</Moment>
                    </div>

                    <div className="depart">
                        {depart}
                    </div>
                    
                    <div className="doc">
                        <div className="doc-photo">
                            <img src={imageUrl} alt="doc"/>
                        </div>
                        <div className="info">
                            <span className="fio">{name}</span>
                            <span className="doc-depart">{doc_depart}</span>
                        </div>
                    </div>
                </div>

                <div className="card-btn">
                    <button> <a href=""> Отменить</a></button>
                </div>
            </div>
        ):
        null}
     
        
    </>)
}



export default CardAppointment
