import React from 'react'
import Card from '../components/Card'
import E_Card from '../components/E_Card'


const Profile = ({list}) => {

    return (
        <>
        <div className="container-content">
            <div className="wrapper">
                <div className="appointments title">Записи на прием</div>
                <Card data={list}/>

                <div className="separator"></div>
                <div className="el-card title">Электронная карта</div>
                <E_Card/>
            </div>
        </div>
        </>
    )
}

export default Profile
