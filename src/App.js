import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import {useState, useEffect} from 'react'

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

	const [user, setUser] = useState({});

	let history=useHistory()

	const pathname = window.location.pathname;
	const baseRoutes = ['/login','/sign-up','/sign-up/customer-details','/sign-up/driver-details'] //All the pages that can be accessed without logging in
	

	useEffect(() => {
		setUser(localStorage.getItem('user'));
		if(!user) //if user is not present
		baseRoutes.includes(pathname) ? history.push(pathname) : history.push('/login');
		else{
			baseRoutes.includes(pathname) ? history.push(`/${user.userType}-home`) : history.push(pathname);
		}
	},[user]);

	
	
	


		return (
			<div>
			<Router>
				<Switch>
					<Route exact path="/login"><LoginPage /></Route>
					<Route exact path='/sign-up' render ={(props)=>(
						<>
						<SignUpPage  phoneNo={phoneNo} setPhoneNo={setPhoneNo}  pwd={pwd} setPwd={setPwd} signUpType = {signUpType} setSignUpType={setSignUpType} />
						</>
					)}/>
					<Route exact path='/sign-up/customer-details' render ={(props)=>(
								<>
								<CustomerDetailsForm phoneNo={phoneNo} pwd={pwd} signUpType = {signUpType}></CustomerDetailsForm>
								</>
							)}/>

					<Route exact path='/sign-up/driver-details' render ={(props)=>(
								<>
								<DriverDetailsForm phoneNo={phoneNo} pwd={pwd} signUpType = {signUpType}></DriverDetailsForm>
								</>
							)}/>
					
					<Route exact path='/book' render ={(props)=>(
							<>
							<Book></Book>
							</>
						)}/>
					
					{/* Customer Routes */}
					<div className="customer">
						<CustomerNavbar/>
						<Switch>
							<Route exact path="/home-customer"><CustomerHome /></Route>
							<Route exact path="/history"><CustomerHistory/></Route>
						</Switch>
					</div>
					{/* Drover Routes */}
					<div className="driver">
						<DriverNavbar/>
						<Switch>
							<Route exact path="/home-driver"><DriverHome /></Route>
						</Switch>
					</div>
				</Switch>
			</Router>
			</div>
		);
}

export default AppWrapper;
