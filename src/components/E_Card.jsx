import React from 'react'
import {ReactComponent as InfoSVG} from  '../assets/img/info-pacient.svg'
import {ReactComponent as HistorySVG} from  '../assets/img/history.svg'
import {ReactComponent as AddInfoSVG} from  '../assets/img/add-info.svg'
import {ReactComponent as ResultSVG} from  '../assets/img/result.svg'



function ECard(props) {
    return (
        <>
            <div className="cards">
                <div className="e_card ">
                    <div className="e_card-logo">
                        <InfoSVG/>
                    </div>
                    <div className="e_card-desc">
                        <div className="e_card-title">Информация о пациенте</div>
                        <div className="hr"></div>
                        <ul>
                            <li><span>Ваши личные данные</span></li>
                            <li><span>Рекомендации врачей</span></li>
                            <li><span>История болезней</span></li>
                        </ul>

                    </div>
                </div>
                <div className="e_card ">
                    <div className="e_card-logo">
                        <ResultSVG/>
                    </div>
                    <div className="e_card-desc">
                        <div className="e_card-title">Результаты анализов</div>
                        <div className="hr"></div>
                        <ul>
                            <li><span>Вы можете узнать здесь результаты своих анализов</span></li>
              
                        </ul>

                    </div>
                </div>
                
            </div>


            <div className="cards">
                <div className="e_card ">
                    <div className="e_card-logo">
                        <AddInfoSVG/>
                    </div>
                    <div className="e_card-desc">
                        <div className="e_card-title">Добавить  информацию</div>
                        <div className="hr"></div>
                        <ul>
                            <li><span>Добавляйте в свою электронную медицинскую карту новые данные</span></li>
                          
                          
                        </ul>

                    </div>
                </div>
                <div className="e_card ">
                    <div className="e_card-logo">
                        <HistorySVG/>
                    </div>
                    <div className="e_card-desc">
                        <div className="e_card-title">История приемов</div>
                        <div className="hr"></div>
                        <ul>
                            <li><span>Вся информация о полученных услугах за все время хранится здесь</span></li>
                     
                        </ul>

                    </div>
                </div>
                
            </div>
        </>
    )
}



export default ECard
