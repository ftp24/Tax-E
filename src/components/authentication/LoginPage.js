import React from 'react'
import loginUser from './functions/login'

function LoginPage() {

	
	
    return (
        <div>
			<div className="container">
				<div className="row justify-content-md-center">
					<div className="col-8 mt-5">
						<div className="card">
							<div className="card-body">
								<h5 class="card-title">Login</h5>

									<form>
										<div className="form-group">
											<label for="inputPhoneNo">Phone Number</label>
											<input type="tel" className="form-control" id="inputPhoneNo" placeholder="Enter Phone Number"/>
										</div>
										<div className="form-group">
											<label for="InputPassword1">Password</label>
											<input type="password" className="form-control" id="InputPassword1" placeholder="Password"/>
										</div>
										<div className="mb-3">
										<a href="/sign-up" className="text-info">Don't have an account yet?</a>
										</div>
											<button type="submit" className="btn btn-info" onClick={loginUser}>Log in</button>
									</form>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    )
}

export default LoginPage
