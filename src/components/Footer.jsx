import React from 'react'


const Footer = (props) => {
    return (
    <>
    <footer className="footer">
        <ul className="copyright">
            <li>© 2001-2018 <a href="#">ООО «Спейсвеб»</a></li>
            <li>Все права защищены.</li>
            <li>Лицензия <a href="#">N°163230</a></li>
        </ul>

        <ul className="contact">
            <li><a href="tel:+78123341222">+7 (812) 334-12-22</a> (в Санкт-Петербурге)</li>
            <li><a href="tel:+74956631612">+7 (495) 663-16-12</a> (в Москве)</li>
            <li><a href="tel:+780010011615">+7 (800) 100-16-15</a> (бесплатно по России)</li>
        </ul>
    </footer>
    </>
    )
}



export default Footer
