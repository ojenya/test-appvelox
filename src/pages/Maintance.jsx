import React from 'react'

const Maintance = (props) => {
    return (
        <>
         <div className="container-content">
                    <div className="wrapper">
                        <div className="subtitle">Тестовое задание</div>
                        <div className="title">appvelox</div>
                        <hr/>

                        <div className="subtitle">
                            ✅Задание: необходимо реализовать SPA состоящее из 2 экрнов:
                            <br/><br/>
                            <ul>
                                <li><b> Личный кабинет список учреждений и поиск врачей</b></li>
                                <li><b> Личный кабинет записи на прием</b>

                                    (переход к этому экрану производится при клике на ссылку <a href="">Подробнее</a>  на экране "личный кабинет список учреждений и поиск врачей")
                                    <br/> 
                                    Предполагается, что мы список записей загрузили по сети с некоего сервера (в формате JSON).</li>
                            </ul>
                           
                            <br/>      
                            Адаптивность не обязательна.
<br/><br/>
                            Фреймворк: React(можно использовать любые доп. библиотеки)                  
                           <br/><br/>
                           Результат задания направить в виде ссылки на открытый репозиторий в Github или Bitbucket.
                           <br/><br/>
                           Срок реализации не более 1 недели.
                        </div>
                    </div>
            </div>    
        </>
    )
}



export default Maintance
