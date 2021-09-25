import React from 'react'


function CustomerDetails({phoneNo,pwd,signUpType}) {


	function setLoggedIn(e) {
		localStorage.setItem('loggedIn','true')
		localStorage.setItem('userType','customer')
		history.push('/')
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
											<input type="tel" className="form-control" id="inputName" placeholder="Enter Full Name"/>
										</div>
										<div className="form-group">
											<label for="InputPassword1">Email</label>
											<input type="Email" className="form-control" id="inputEmail" placeholder="Email"/>
										</div>
										<button type="submit" className="btn btn-info" onClick={setLoggedIn}>Submit</button>
									</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default CustomerDetails
