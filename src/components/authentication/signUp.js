import  React from 'react'
import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'

function SignUp({phoneNo,setPhoneNo,pwd,setPwd,signUpType,setSignUpType}) {
	let history=useHistory()

	useEffect(() => {
	    console.log(phoneNo,pwd,signUpType)

	}, [pwd])

	function setLoggedIn(e) {
		e.preventDefault()
		// console.log(phoneNo)
		let inputPno=""
		let inputPwd=""
		let inputType=""

		inputPno=(document.getElementById('inputPhoneNo')).value
		inputPwd=(document.getElementById('InputPassword1')).value
		inputType=(document.getElementById('inputSignUpType')).value
		console.log(inputPwd)
		setPhoneNo(inputPno)
		setPwd(inputPwd)
		setSignUpType(inputType)

		if(inputType=='customer')
		{
			history.push('/customer-details')
		}
		else if(inputType=='driver')
			history.push('/driver-details')
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

export default SignUp
