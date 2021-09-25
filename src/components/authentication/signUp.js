import React from 'react'

function SignUp() {
	function setLoggedIn() {
		localStorage.setItem('loggedIn','true')
		localStorage.setItem('userType','customer')
		console.log("hi")
	}
	//setLoggedIn()
    return (
        <div>
			<div className="container">
				<div className="row align-items-center justify-content-md-center">
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
										<button type="submit" className="btn btn-primary">Submit</button>
									</form>
							</div>
						</div>
					</div>
				</div>	
			</div>	
        </div>
    )
}

export default SignUp
