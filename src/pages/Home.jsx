import React from 'react'

import {
    ContentHeader,
    Card,
    E_Card,
} 
from '../components'


import Messages from './Messages';
import Maintance from './Maintance';
import Profile from './Profile';
import Test from './Test';
import Useful from './Useful';
import Doctors from './Doctors';




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} 
from "react-router-dom";



import {ReactComponent as ProfileSVG} from '../assets/img/profile.svg';
import {ReactComponent as TestSVG} from '../assets/img/test.svg'
import {ReactComponent as DoctorsSVG} from  '../assets/img/doctors.svg'
import {ReactComponent as MessagesSVG} from  '../assets/img/messages.svg'
import {ReactComponent as UsefulSVG} from  '../assets/img/useful.svg'
import {ReactComponent as HelpSVG} from  '../assets/img/help.svg'
import {ReactComponent as LogoSVG} from  '../assets/img/logo.svg'


import logo from '../assets/img/logo.png'

const Home = (props) => {

    const list = props.list
    return (
        <>
        <Router>
            <main className="main">
                <nav className="nav">
                    <div className="logo">
                        <Link to="/">
                          Logotype
                        </Link>
                    </div>
                    <div className="aside">
                        <ul>
                            <NavLink to="/profile">
                            {/* <img src={profile} alt="Profile"/>  */}
                            <ProfileSVG/>
                            Профиль
                            </NavLink>

                            <NavLink to="/doctors">
                            <DoctorsSVG/>
                            Врачи и клиники
                            </NavLink>

                            <NavLink to="/messages">
                            <MessagesSVG/>

                            Сообщения
                            </NavLink>

                            <NavLink to="/test">
                            <TestSVG/>

                            Тестирование
                            </NavLink>

                            <NavLink to="/useful">
                            <UsefulSVG/>

                            Полезно знать
                            </NavLink>

                            
                            <a href=""><button>Подать заявку</button></a>



                        </ul>
                     
                        <div className="footer">
                        <NavLink to="/help">
                            <HelpSVG/>
                            Помощь
                        </NavLink>
                        <img src={logo} alt="appvelox" />
                        </div>
                    </div>
                </nav>

                <div className="conent">
                    <ContentHeader/>
                    <Switch>
                        <Route path="/profile">
                            <Profile list={list}/>
                        </Route>
                        <Route path="/doctors">
                            <Doctors list={list}/>
                        </Route>
                        <Route path="/messages">
                            <Messages list={list}/>
                        </Route>
                        <Route path="/test">
                            <Test list={list}/>
                        </Route>
                        <Route path="/useful">
                            <Useful list={list}/>
                        </Route>
                        <Route path="/">
                            <Maintance list={list}/>
                        </Route>
                        
                    </Switch>
                </div>
            </main>
        </Router>
        </>
    )
}


export default Home



