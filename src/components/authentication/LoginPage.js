import {useState,React} from 'react';
import addToCache from './functions/addToCache'
import {useHistory} from 'react-router-dom'
import Loading from '../general/loading'
function LoginPage() {

	const [isLoading,setIsLoading]=useState(false)

	let history=useHistory()
	async function loginUser_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/signin', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data-response",data);
		return data
	}

	async function loginUser(e)
	{
		e.preventDefault()
		let user = {
			'phoneno': (document.getElementById('phoneno')).value,
			'pwd': (document.getElementById('pwd')).value,
			'type': (document.getElementById('inputVehicleType')).value,
		};
		setIsLoading(true)
		console.log(user)
		let dbData= await loginUser_db(user)
		if(user.type=='rider')
		{
			user.type='customer'
		}
		dbData['type']=user.type
		console.log("check",user.type)
		addToCache(dbData)
		console.log(dbData)
		if('message' in dbData)
		{
			setIsLoading(false)
			alert(dbData.message)
		}
		else if(user.type=='driver')
		{
			console.log("success")
			history.push('/driver-available');
		}
		else if(user.type=='customer')
		{
			console.log("success")
			history.push('/customer-book');
		}


	}


    return (
		<div>{isLoading && <Loading/>}
	        {!isLoading && (<div>
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="col-8 mt-5">
							<div className="card">
								<div className="card-body">
									<h5 class="card-title">Login</h5>
										<form>
											<div className="form-group">
												<label for="phoneno">Phone Number</label>
												<input type="tel" className="form-control" id="phoneno" placeholder="Enter Phone Number"/>
											</div>
											<div className="form-group">
												<label for="pwd">Password</label>
												<input type="password" className="form-control mb-2" id="pwd" placeholder="Password"/>
												<div className="col-12">
													<label for="inputUserType">UserType</label>
													<select className="form-select mt-3 ml-4" id="inputVehicleType" name="inputVehicleType">
														<option value="rider">Customer</option>
														<option value="driver">Driver</option>
													</select>
												</div>
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
	        </div>)}
	</div>
    )
}

export default LoginPage
