import React from 'react'
import { E_Card } from '.'
import Card from './Card'
import ECard from './E_Card'


const Profile = (props) => {
    return (
        <>
        <div className="container-content">
            <div className="wrapper">
                <div className="appointments title">Записи на прием</div>
                <Card/>

                <div className="separator"></div>
                <div className="el-card title">Электронная карта</div>
                <E_Card/>
            </div>
        </div>
        </>
    )
}

export default Profile
