import  React from 'react'
import {useHistory} from 'react-router-dom'

function SignUpPage() {
	let history=useHistory()

	function navigateToNextForm(e) {
		e.preventDefault()

		
		let tempUser = {'phoneno': (document.getElementById('inputPhoneNo')).value,
		'pwd':(document.getElementById('InputPassword1')).value,
		'type' : (document.getElementById('inputSignUpType')).value};
		
		localStorage.tempUser = JSON.stringify(tempUser);

		if(tempUser.type==='customer')
			history.push('/sign-up/customer-details')
		else if(tempUser.type==='driver')
			history.push('/sign-up/driver-details')
		else
			console.log("invalid inputType")
	}

	//setLoggedIn()
    return (
        <div>
			<div className="container">
				<div className="row mt-5 align-items-center justify-content-md-center">
					<div className="col-8">
						<div className="card">
							<div className="card-body">
								<h5 class="card-title">Sign Up</h5>

									<form>
										<div className="form-group">
											<label for="inputPhoneNo">Phone Number</label>
											<input type="tel" className="form-control" id="inputPhoneNo" placeholder="Enter Phone Number"/>
										</div>
										<div className="form-group">
											<label for="InputPassword1">Password</label>
											<input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
										</div>
										<div className="form-group">
											<div className="row">
												<div className="col-12">
													<label for="inputUserType">UserType</label>
													<select className="form-select ml-4" id="inputSignUpType" name="inputSignUpType">
														<option value="customer">Customer</option>
														<option value="driver">Driver</option>
													</select>
												</div>
											</div>
										</div>
										<div className="mb-3">
										<a href="/login" className="text-info">Already have an account?</a>
										</div>
										<button type="submit" className="btn btn-info" onClick={navigateToNextForm}>Next</button>

									</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default SignUpPage
