import React from 'react'

import '../assets/style/card.scss'

function CardAppointment({data}) {
    // console.log(data)
    const {date,
        depart,
        doc_depart,
        imageUrl,
        name} = data
    return (
        <>  
        {data? 
        (<div className="card">
                <div className="card-desc">
        <div className="date">{date} </div>
                    <div className="depart">{depart}</div>
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
