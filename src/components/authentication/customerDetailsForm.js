import React from 'react';
import {useHistory} from "react-router-dom";
import addToCache from './functions/addToCache';

function CustomerDetailsForm({phoneNo,pwd,signUpType}) {

	const tempUserData = localStorage.getItem('tempUser');
	// console.log(tempUser['type'])
	const history = useHistory();

	if(!tempUserData)
		history.push('/sign-up')

	let tempUser = JSON.parse(tempUserData);

	function signupCustomer(e){
		e.preventDefault()

		let user = {
		'phoneno': tempUser.phoneno,
		'pwd':tempUser.pwd,
		'type' : tempUser.type,
		'name': (document.getElementById('name')).value,
		'email': (document.getElementById('email')).value,
	};
		console.log(user);
		addToCache(user);

		history.push('/customer-book');
	}

    return (
        <div>
			<div className="container">
				<div className="row align-items-center justify-content-md-center">
					<div className="col-8 mt-5">
						<div className="card">
							<div className="card-body">
								<h5 class="card-title">Enter your details</h5>
									<form>
										<div className="form-group">
											<label for="inputPhoneNo">Name</label>
											<input type="tel" className="form-control" id="name" placeholder="Enter Full Name"/>
										</div>
										<div className="form-group">
											<label for="InputPassword1">Email</label>
											<input type="Email" className="form-control" id="email" placeholder="Email"/>
										</div>
										<button type="submit" className="btn btn-info" onClick={signupCustomer}>Sign Up</button>
									</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default CustomerDetailsForm
