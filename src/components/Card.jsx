import React from 'react'
import doc from '../assets/img/doc.png'
import '../assets/style/card.scss'

function Card(props) {
    return (
        <>  
        <div className="cards">
                <div className="card">
                    <div className="card-desc">
                        <div className="date">Понедельник 15.06.20 | 15:30 </div>
                        <div className="depart">СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А</div>
                        <div className="doc">
                            <img src={doc} alt="doc"/>
                            <div className="info">
                                <span className="fio">Малушко Т. Н.</span>
                                <span className="doc-depart">Хирургия</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-btn">
                        <button> <a href=""> Отменить</a></button>
                    </div>
                </div>

                <div className="card">
                    <div className="card-desc">
                        <div className="date">Понедельник 15.06.20 | 15:30 </div>
                        <div className="depart">СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А</div>
                        <div className="doc">
                            <img src={doc} alt="doc"/>
                            <div className="info">
                                <span className="fio">Малушко Т. Н.</span>
                                <span className="doc-depart">Хирургия</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-btn">
                        <button> <a href=""> Отменить</a></button>
                    </div>
                </div>

                <div className="more">
                Еще 3 записи <br/>
               <a href="">Подробнее</a>
                </div>
            </div>

            
        </>
    )
}



export default Card
