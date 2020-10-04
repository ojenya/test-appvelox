import React from 'react'
import Card from './Card2'
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
        <Router>
        <div className="container-content">
            <div className="wrapper">
                <div className="subtitle">Поддержка</div>
                <div className="title">Поддержка</div>

                {/* <div className="separator"></div> */}
                <hr className="rounded"></hr>
                <nav className="content-nav">
                    <ul>
                        <NavLink to="/order">
                            Заявка
                        </NavLink>

                        <NavLink to="/templates">
                            Шаблоны
                        </NavLink>

                        <NavLink to="/history">
                            История заявок
                        </NavLink>
                    </ul>
                </nav>

                <Switch>
                        <Route path="/order">

                        </Route>

                        <Route path="/templates">

                        </Route>

                        <Route path="/history">
                        {list?list.map((el,i)=>(<Card key={i} {...el}/>)):<div  Name="fail"></div>}
                        </Route>
                     
                    </Switch>

            </div>
        </div>
        </Router>
        </>
    )
}



export default Support
