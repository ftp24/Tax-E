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
import CustomerHome from './components/customer/home';
import CustomerHistory from './components/customer/history';
import DriverHome from './components/driver/home';
import Error404 from'./components/general/Error404';

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
		(baseRoutes.includes(pathname) || pathname === '/') ? history.push(`/${user.type}-home`) : history.push(pathname);
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
					<div className="customer">
						<Switch>
							<Route exact path="/customer-home"><CustomerHome /></Route>
							<Route exact path="/customer-history"><CustomerHistory/></Route>
							<Route exact path='/customer-book'><Book/></Route>
						</Switch>
					</div>
					{/* Drover Routes */}
					<div className="driver">

						<Switch>
							<Route exact path="/driver-home"><DriverHome /></Route>
						</Switch>
					</div>

					<Route path="*"><Error404/></Route>

				</Switch>
			</Router>
			</div>
		);
}

export default AppWrapper;
