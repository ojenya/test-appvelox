import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes'
import { BrowserRouter as Router , Link, NavLink} from 'react-router-dom'

import ContentHeader from './components/ContentHeader'


import {ReactComponent as ProfileSVG} from './assets/img/profile.svg';
import {ReactComponent as TestSVG} from './assets/img/test.svg'
import {ReactComponent as DoctorsSVG} from  './assets/img/doctors.svg'
import {ReactComponent as MessagesSVG} from  './assets/img/messages.svg'
import {ReactComponent as UsefulSVG} from  './assets/img/useful.svg'
import {ReactComponent as HelpSVG} from  './assets/img/help.svg'
import {ReactComponent as LogoSVG} from  './assets/img/logo.svg'


import './App.scss';



ReactDOM.render(
  <React.StrictMode>
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

                <LogoSVG/>
                </div>
            </div>
        </nav>
        <div className="conent">
            <ContentHeader/>
        </div>
        <Routes/>
    </main>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
