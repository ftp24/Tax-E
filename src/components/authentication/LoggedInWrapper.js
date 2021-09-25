import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import CustomerNavbar from '../customer/navbar';
import CustomerHome from '../customer/home';
import CustomerHistory from '../customer/history';

import DriverNavbar from '../driver/navbar';
import DriverHome from '../driver/home';



export default function LoggedInWrapper({userType}) {
    

    if(userType === 'customer')
        return (
            <div>
                <Router>
                    <div className="App">
                        <CustomerNavbar />
                        <div className="content">
                            <Switch>
                                <Route exact path="/home-customer"><CustomerHome /></Route>
                                <Route exact path="/history"><CustomerHistory/></Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    else
        return (
            <div>
            <Router>
                <Switch>
                <div className="App">
                        <DriverNavbar />
                        <div className="content">
                            <Switch>
                                <Route exact path="/home-driver"><DriverHome /></Route>
                            </Switch>
                        </div>
                    </div>
                </Switch>
            </Router>
            </div>
        );
}
