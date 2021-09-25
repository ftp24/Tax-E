import {Link, useHistory} from 'react-router-dom';

const CustomerNavbar = () => {

    let history=useHistory()

    function SignOut() {
        localStorage.removeItem('user');
        history.push('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-3 mx-5 rounded">
            <a class="navbar-brand" href="#">NITC TAXI</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="container">
                    <ul class="navbar-nav">
                        <li class="nav-item"><Link className="nav-link" to="/home-customer">Home</Link></li>
                        <li class="nav-item"><Link className="nav-link" to="/history">History</Link></li>
                    </ul>
                    <button class="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={SignOut}>Sign Out</button>
                </div>
            </div>
        </nav>
    )
}

export default CustomerNavbar;