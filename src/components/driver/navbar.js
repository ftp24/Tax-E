import {useHistory,Link} from 'react-router-dom';

const DriverNavbar = ({currentPage}) => {
	let history=useHistory()

	function SignOut() {
			localStorage.removeItem('user');
			history.push('/login');
	}

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info my-3 mx-5 rounded">
            <a class="navbar-brand" href="#">NITC TAXI</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
			<div className="container">
                <ul class="navbar-nav">
					<li class={`nav-item ${currentPage === 'driver-available' ? 'active' : ''}`}><Link className="nav-link" to="/driver-available">Available Trips</Link></li>
					<li class={`nav-item ${currentPage === 'driver-scheduled' ? 'active' : ''}`}><Link className="nav-link" to="/driver-scheduled">Scheduled Trips</Link></li>
					<li class={`nav-item ${currentPage === 'driver-history' ? 'active' : ''}`}><Link className="nav-link" to="/driver-history">History</Link></li>
                </ul>
				<button class="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={SignOut}>Sign Out</button>
            </div>
			</div>
        </nav>
    )
}

export default DriverNavbar;
