import {  Route, useHistory, useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';


export default function LoggedInWrapper({user,checkLoggedIn}) {
    const history=useHistory()
    const location=useLocation();
 let routes=['/','/home']

	function checkLoggedIn(){
        console.log(location.pathname,location.pathname in routes)
        if(routes.includes(location.pathname))
        {
            if(!!user)
            {
                history.push('/home')
            }
            else{
                history.push('/login')
            }
        }
	}
 return (
	 <div></div>
    )
}
