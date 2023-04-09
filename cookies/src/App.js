import './App.css';
import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';

function App() {
  const [cookie,setCookie] = useCookies(['user']);

  useEffect(()=>
  {
    const fetchdata = async ()=>{
      const response = await fetch("https://randomuser.me/");
      const data = await response.json();
      // console.log(data);
      const maindata = data.results;
      console.log(maindata[0].email);
      setCookie('Email',maindata[0].email,{path:'/'})
    }
    fetchdata()
  })
  return (
    <>
     Learining coockies :
     {
      cookie.email && <p> cookie.email</p>
     }
    </>
  );
}

export default App;
