import {useState,React} from 'react';
import {useHistory} from 'react-router-dom';
import addToCache from './functions/addToCache';
import Loading from '../general/loading'

function DriverDetailsForm() {

	const [isLoading,setIsLoading]=useState(false)
	const tempUserData = localStorage.getItem('tempUser');
	// console.log(tempUser['type'])
	const history = useHistory();

	if(!tempUserData)
		history.push('/sign-up')

	let tempUser = JSON.parse(tempUserData);

	async function signUpDriver_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/signup', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data-response",data);
	}


	async function signupDriver(e){
		e.preventDefault()

		let user = {
		'phoneno': tempUser.phoneno,
		'pwd':tempUser.pwd,
		'type' : 'driver',
		'name': (document.getElementById('name')).value,
		'email': (document.getElementById('email')).value,
		'aadharid': (document.getElementById('aadharid')).value,
		'licenseno': (document.getElementById('licenseno')).value,
		'vehicleno' : (document.getElementById('vehicleno')).value,
		'vehicletype': (document.getElementById('vehicletype')).value,
	};
		setIsLoading(true)
		await signUpDriver_db(user)
		console.log(user);
		addToCache(user);

		history.push('/driver-available');
	}

    return (
		<div>{isLoading && <Loading/>}
   			{!isLoading && (<div className="container">
				<div className="row align-items-center justify-content-md-center">
					<div className="col-8 mt-5">
						<div className="card">
							<div className="card-body">
								<h5 class="card-title">Enter your details</h5>
									<form>
										<div className="form-group row">
											<div className="col-12 col-md-6">
												<label for="inputName">Name</label>
												<input type="text" className="form-control mb-1" id="name" placeholder="Enter Full Name"/>
												<label for="inputEmail">Email</label>
												<input type="Email" className="form-control mb-1" id="email" placeholder="Email"/>
												<label for="inputAadharNo">Aadhar Number</label>
												<input type="text" className="form-control mb-1" id="aadharid" placeholder="Enter ID Number"/>
											</div>
											<div className="col-12 col-md-6">
												<label for="inputLicenseNo">License Number</label>
												<input type="text" className="form-control mb-1" id="licenseno" placeholder="Enter License Number"/>
												<label for="inputVehicleNo">Vehicle Number</label>
												<input type="text" className="form-control mb-2" id="vehicleno" placeholder="Enter Vehicle Number"/>

											<label for="inputVehicleType">Vehicle Type</label>
												<select className="form-select" id="vehicletype" name="vehicletype">
													<option value="auto">Auto</option>
													<option value="sedan">Sedan</option>
													<option value="suv">SUV</option>
												</select>

											</div>
											<div className="col-4">
												<button type="submit" className="btn btn-info mt-2" onClick={signupDriver}>Sign Up</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					</div>
				</div>
			</div>)}
		</div>
    )
}

export default DriverDetailsForm
