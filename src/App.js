import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom"

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
	let history=useHistory()
	function checkLoggedIn() {
		if(!localStorage.getItem('loggedIn'))
		{
			console.log("hello")
			history.push('/login')
		}
	}
	checkLoggedIn()

	return (
		<div>
		<Router>
			<Switch>
				<Route path="/login">
	      		<Login></Login>
				</Route>
			</Switch>
		</Router>
	  	</div>
	);
}

export default AppWrapper;
