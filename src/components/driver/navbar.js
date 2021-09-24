import {Link} from 'react-router-dom';

const DriverNavbar = () => {

    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary my-3 mx-5 rounded">
            <a class="navbar-brand" href="#">NITC TAXI</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link className="nav-link" to="/home-driver">Home</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default DriverNavbar;