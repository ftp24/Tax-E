import React from 'react'

function Login() {
	function setLoggedIn() {
		localStorage.setItem('loggedIn','true')
		console.log("hi")
	}
	// setLoggedIn()
    return (
        <div>
		<p>helloo</p>
        </div>
    )
}

export default Login
