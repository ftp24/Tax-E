import React from 'react';
import {useHistory} from 'react-router-dom';
import signupUser from './functions/signup';


function DriverDetailsForm({phoneNo,pwd,signUpType}) {

	console.log("driver page",phoneNo,pwd,signUpType)
	let history=useHistory()
	
    return (
        <div>
			<div className="container">
				<div className="row align-items-center justify-content-md-center">
					<div className="col-8 mt-5">
						<div className="card">
							<div className="card-body">
								<h5 class="card-title">Enter your details</h5>
									<form>
										<div className="form-group row">
											<div className="col-12 col-md-6">
												<label for="inputName">Name</label>
												<input type="text" className="form-control mb-1" id="inputName" placeholder="Enter Full Name"/>
												<label for="inputEmail">Email</label>
												<input type="Email" className="form-control mb-1" id="inputEmail" placeholder="Email"/>
												<label for="inputAadharNo">Aadhar Number</label>
												<input type="text" className="form-control mb-1" id="inputAadharNo" placeholder="Enter Full Name"/>
											</div>
											<div className="col-12 col-md-6">
												<label for="inputLicenseNo">License Number</label>
												<input type="text" className="form-control mb-1" id="inputLicenseNo" placeholder="Enter Full Name"/>
												<label for="inputVehicleNo">Vehicle Number</label>
												<input type="text" className="form-control mb-2" id="inputVehicleNo" placeholder="Enter Full Name"/>

											<label for="inputVehicleType">Vehicle Type</label>
												<select className="form-select" id="vehicleType" name="vehicleType">
													<option value="auto">Auto</option>
													<option value="sedan">Sedan</option>
													<option value="suv">SUV</option>
												</select>

											</div>
											<div className="col-4">
												<button type="submit" className="btn btn-info mt-2" onClick={signupUser}>Sign Up</button>
											</div>
										</div>
									</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default DriverDetailsForm
