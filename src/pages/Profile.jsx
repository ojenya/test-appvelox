import React,{useEffect,useState} from 'react'
import Card from '../components/Card'
import E_Card from '../components/E_Card'


const Profile = () => {
    const [list,setList] = useState([])

    useEffect (()=>{
      fetch('https://appvelox.herokuapp.com/appointment/')
      .then(response => response.json())
      .then(json => setList(json))
              
    },[])
    return (
        <>
        <div className="container-content">
            <div className="wrapper">
                <div className="appointments title">Записи на прием</div>
                <Card data={list}/>
                
                <div className="el-card title">Электронная карта</div>
                <E_Card/>
            </div>
        </div>
        </>
    )
}

export default Profile
