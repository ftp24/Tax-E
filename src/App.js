import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

import Login from './components/authentication/Login'
import LoggedInWrapper from './components/authentication/LoggedInWrapper';
import SignUp from './components/authentication/signUp';
import CustomerDetails from './components/authentication/customerDetails';
import DriverDetails from './components/authentication/driverDetails';


const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
	let history=useHistory()
	let userType;


	function checkLoggedIn() {
		if(!localStorage.getItem('loggedIn') || !localStorage.getItem('userType'))
		{
			console.log("Not logged in")
			history.push('/login')
		}
		userType = localStorage.getItem('userType');
	}
	//checkLoggedIn()


		return (
			<div>
			<Router>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/sign-up">
						<SignUp />
					</Route>
					<Route path="/customer-details">
						<CustomerDetails/>
					</Route>
					<Route path="/driver-details">
						<DriverDetails/>
					</Route>
					<Route path="/">
						<LoggedInWrapper userType={userType} />
					</Route>
				</Switch>
			</Router>
			</div>
		);
}

export default AppWrapper;
