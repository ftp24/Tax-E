import React from 'react'
import CustomerNavbar from './navbar'
import moment from 'moment'
import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
function Book() {

	let history=useHistory()
	let currentDate=''
	let currentTime=''

	const [minDate,setMinDate]=useState('')
	const [minTime,setMinTime]=useState('')

	useEffect(() => {
		currentDate=moment().format("YYYY-MM-DD")
		currentTime=moment().format("HH:mm:ss")
		setMinDate(currentDate)
		setMinTime(currentTime)

	},)

	async function bookRide_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/book-ride', {
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


	async function bookRide(e)
	{
		e.preventDefault()
		let phoneno = JSON.parse((localStorage.getItem('user'))).phoneno;

		let submit=true
		let inputDate=(document.getElementById('inputDate')).value
		let inputTime=(document.getElementById('inputTime')).value

		let inputDateTime=inputDate+"T"+inputTime
 		inputDateTime=inputDateTime.slice(0, inputDateTime.length - 3);
		console.log("DateTime",inputDateTime)
		if(inputDate<currentDate)
		{
			submit=false
			alert("Please enter valid Date")
		}
		else if(inputTime<currentTime && inputDate==currentDate)
		{
			submit=false
			alert("Please enter valid Time")
		}
		// only forward request if submit is true
		if(submit==true)
		{
			let user = {
				'phoneno':phoneno,
				'from_add': (document.getElementById('inputFrom')).value,
				'to_add': (document.getElementById('inputTo')).value,
				'time': inputDateTime,
				'shared': (document.getElementById('inputShared')).value,
				'vehicletype': (document.getElementById('inputVehicleType')).value,
				'amount': '100'
			};
			let dbData=await bookRide_db(user);
			console.log(dbData)
			history.push('/customer-scheduled')
		}

	}


    return (
		<div>
			<CustomerNavbar currentPage='customer-book'/>
			<div className="row align-items-center justify-content-md-center">
				<div className="col-8 mt-5">
					<div className="card">
						<div className="card-body">
							<h5 class="card-title">Book Your Trip</h5>
							<form>
								<div className="form-group row">
									<div className="col-12 col-md-6">
										<label for="inputFrom">From</label>
										<input type="text" className="form-control mb-1" id="inputFrom" placeholder="Enter Location"/>
										<label for="inputDate">Date</label>
										<input type="date" min={minDate} className="form-control mb-2" id="inputDate" placeholder="Enter Date"/>

										<label for="inputVehicleType">Vehicle Type</label>
										<select className="form-select  ml-2" id="inputVehicleType" name="inputVehicleType">
											<option value="auto">Auto</option>
											<option value="sedan">Sedan</option>
											<option value="suv">SUV</option>
										</select>
									</div>

									<div className="col-12 col-md-6">
										<label for="inputTo">To</label>
										<input type="text" className="form-control mb-2" id="inputTo" placeholder="Enter Location"/>
										<label for="inputTime">Time</label>
										<input type="time" min={minTime} className="form-control mb-1" id="inputTime" placeholder="Enter Time"/>
										<label for="inputShared">Solo or Shared</label>
										<select className="form-select  ml-2" id="inputShared" name="inputShared">
											<option value="F">Solo</option>
											<option value="T">Shared</option>
										</select>
									</div>
									<div className="col-4">
										<button type="submit" className="btn btn-info mt-2" onClick={bookRide}>Book</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Book
