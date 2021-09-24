import './App.css';
import Login from './components/authentication/Login'
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import LoggedInWrapper from './components/authentication/LoggedInWrapper';

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
	checkLoggedIn()


		return (
			<div>
			<Router>
				<Switch>
					<Route path="/login">
					<Login />
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
