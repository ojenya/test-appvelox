import React,{useState,useEffect} from 'react'

import {
    ContentHeader
} 
from '../components'


import Messages from './Messages';
import Maintance from './Maintance';
import Profile from './Profile';
import Test from './Test';
import Useful from './Useful';
import Doctors from './Doctors';
import Profile_ext from './Profile_ext';





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


// import logo from '../assets/img/logo.png'

const Home = (props) => {

    const [list,setList] = useState([])

    useEffect (()=>{
      fetch('https://appvelox.herokuapp.com/appointment/')
      .then(response => response.json())
      .then(json => setList(json))
              
    },[])
    

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
                        {/* <img src={logo} alt="appvelox" /> */}
                        <LogoSVG/>
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
                            <Doctors />
                        </Route>
                        <Route path="/messages">
                            <Messages />
                        </Route>
                        <Route path="/test">
                            <Test />
                        </Route>
                        <Route path="/useful">
                            <Useful />
                        </Route>

                        
                            
                        <Route exact path="/profile_details">
                            <Profile_ext/>
                        </Route>
                        <Route path="/">
                            <Maintance />
                        </Route>
                        
                    </Switch>
                </div>
            </main>
        </Router>
        </>
    )
}


export default Home



