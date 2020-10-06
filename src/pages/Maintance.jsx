import React from 'react'

const Maintance = (props) => {
// Вывод heroku из сна, пока читаем :)
    fetch('https://appvelox.herokuapp.com/appointment/')
      .then(response => response.json())

              
    return (

        <>
         <div className="container-content">
                    <div className="wrapper">
                        <div className="title">Тестовое задание для <b> appvelox</b></div>
                        <hr/>

                        <div className="subtitle">
                           <span role="img" aria-label="Close">✅</span> Задание: необходимо реализовать SPA состоящее из 2 экрнов:
                            <br/><br/>
                            <ol>
                                <li><b> Личный кабинет список учреждений и поиск врачей</b></li>
                                <li><b> Личный кабинет записи на прием</b>

                                    (переход к этому экрану производится при клике на ссылку <a href="/">Подробнее</a>  на экране "личный кабинет список учреждений и поиск врачей")
                                    <br/> 
                                    PS Предполагается, что мы список записей загрузили по сети с некоего сервера (в формате JSON).</li>
                            </ol>
                           
                            <br/>      
                            Адаптивность не обязательна.
<br/><br/>
                            Фреймворк: React(можно использовать любые доп. библиотеки)                  
                           <br/><br/>
                           Срок реализации не более 1 недели.
                        </div>
                    </div>
            </div>    
        </>
    )
}



export default Maintance
