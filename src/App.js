import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation} from "react-router-dom";
import {useState} from 'react'

import Login from './components/authentication/Login'
import LoggedInWrapper from './components/authentication/LoggedInWrapper';
import SignUp from './components/authentication/signUp';
import CustomerDetails from './components/authentication/customerDetails';
import DriverDetails from './components/authentication/driverDetails';
import Book from './components/customer/book';

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}


function App() {
	const [phoneNo,setPhoneNo]= useState('')
	const [pwd,setPwd]= useState('')
	const [signUpType,setSignUpType]= useState('')

	let history=useHistory()
	let userType;
	const pathname = window.location.pathname;
	let accessFlag = false;

	const baseRoutes = ['/login','/sign-up']


	function checkLoggedIn() {

		baseRoutes.forEach(element => {
			console.log(element);
			if(pathname === element){
				accessFlag=true;
			}
		});



		if(!accessFlag && (!localStorage.getItem('loggedIn') || !localStorage.getItem('userType')))
		{
			console.log("Not logged in");
			history.push('/login');
		}else if(localStorage.getItem('loggedIn') && localStorage.getItem('userType') && accessFlag){
			console.log("logged in");
			history.push('/');
		}
		userType = localStorage.getItem('userType');
	}
	// checkLoggedIn()


		return (
			<div>
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path='/sign-up' render ={(props)=>(
						<>
						<SignUp  phoneNo={phoneNo} setPhoneNo={setPhoneNo}  pwd={pwd} setPwd={setPwd} signUpType = {signUpType} setSignUpType={setSignUpType}></SignUp>
						</>
					)}/>
					<Route path='/customer-details' render ={(props)=>(
						<>
						<CustomerDetails phoneNo={phoneNo} pwd={pwd} signUpType = {signUpType}></CustomerDetails>
						</>
					)}/>
				<Route path='/book' render ={(props)=>(
							<>
							<Book></Book>
							</>
						)}/>
					<Route path='/driver-details' render ={(props)=>(
						<>
						<DriverDetails phoneNo={phoneNo} pwd={pwd} signUpType = {signUpType}></DriverDetails>
						</>
					)}/>
					<Route path="/">
						<LoggedInWrapper userType={userType} />
					</Route>
				</Switch>
			</Router>
			</div>
		);
}

export default AppWrapper;
