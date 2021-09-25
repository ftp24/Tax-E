import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import {useState} from 'react'

import LoginPage from './components/authentication/LoginPage';
import SignUpPage from './components/authentication/signUpPage';
import CustomerDetailsForm from './components/authentication/customerDetailsForm';
import DriverDetailsForm from './components/authentication/driverDetailsForm';
import Book from './components/customer/book';
import CustomerNavbar from './components/customer/navbar';
import DriverNavbar from './components/driver/navbar';
import CustomerHistory from './components/customer/history';
import Error404 from'./components/general/Error404';
import CustomerScheduled from './components/customer/scheduled';
import DriverHistory from './components/driver/history';
import DriverScheduled from './components/driver/scheduled';
import DriverAvailable from './components/driver/available';





const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}


function App() {
	// const [phoneNo,setPhoneNo]= useState('')
	// const [pwd,setPwd]= useState('')
	// const [signUpType,setSignUpType]= useState('')





	let history=useHistory();
	let user = {};

	const pathname = window.location.pathname;
	const baseRoutes = ['/login','/sign-up','/sign-up/customer-details','/sign-up/driver-details'] //All the pages that can be accessed without logging in

	user = localStorage.getItem('user');
	console.log(user);
	if(!user) //if user is not present
	baseRoutes.includes(pathname) ? history.push(pathname) : history.push('/login');
	else{
		user = JSON.parse(user);
		if(baseRoutes.includes(pathname) || pathname === '/')
		{
			if((user.type)=='customer')
			{
				history.push('/customer-book')
			}
			else if((user.type)=='driver')
			{
				history.push('driver-available')
			}
		}
		// (baseRoutes.includes(pathname) || pathname === '/') ? history.push(`/${user.type}-`) : history.push(pathname);
	}




		return (
			<div>
			<Router>
				<Switch>
					<Route exact path="/login"><LoginPage /></Route>
					<Route exact path="/sign-up"><SignUpPage /></Route>
					<Route exact path='/sign-up/customer-details'><CustomerDetailsForm/></Route>
					<Route exact path='/sign-up/driver-details'><DriverDetailsForm/></Route>


					{/* Customer Routes */}
						<Route exact path="/customer-history"><CustomerHistory/></Route>
						<Route exact path='/customer-book'><Book/></Route>
						<Route exact path='/customer-scheduled'><CustomerScheduled/></Route>

					{/* Drover Routes */}
						<Route exact path="/driver-history"><DriverHistory/></Route>
						<Route exact path="/driver-scheduled"><DriverScheduled/></Route>
						<Route exact path='/driver-available'><DriverAvailable/></Route>
					<Route path="*"><Error404/></Route>

				</Switch>
			</Router>
			</div>
		);
}

export default AppWrapper;
