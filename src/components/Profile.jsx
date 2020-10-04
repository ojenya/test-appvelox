import React from 'react'
import Card from './Card'

const Profile = (props) => {
    return (
        <>
        <div className="container-content">
            <div className="wrapper">
                <div className="appointments title">Записи на прием</div>
                <Card/>

                <div className="separator"></div>
                <div className="el-card title">Электронная карта</div>
            </div>
        </div>
        </>
    )
}

export default Profile
