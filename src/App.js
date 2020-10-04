import React,{useState,useEffect} from 'react';
import './App.scss';

import {Home}  from './pages'

function App() {


  const [list,setList] = useState()

useEffect (()=>{
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => setList(json))

  fetch('https://sweb.ru/export/turbojournal/')
            .then(response => response.text())
            .then(text => {
                const xml = new DOMParser().parseFromString(text, 'text/xml')
                let items = xml.getElementsByTagName('item')
                let api = []
                for (let i = 0; i < items.length; i++) {
                    api.push({title:items[i].children[2].textContent,desc:items[i].children[4].textContent})
                }

                setList(api)

            })
            .catch(err => console.error(err))
          
},[])


  








  return (
   <Home list={list}/>
   
  );
}

export default App;