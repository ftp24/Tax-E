import React from 'react'
import CustomerNavbar from './navbar'
import moment from 'moment'
import {useState,useEffect} from 'react'

function Book() {

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

	function bookRide(e)
	{
		e.preventDefault()
		let submit=true
		let inputDate=(document.getElementById('inputDate')).value
		let inputTime=(document.getElementById('inputTime')).value

		if(inputDate<currentDate)
		{
			submit=false
			alert("Please enter valid Date")
		}
		else if(inputTime<currentTime)
		{
			submit=false
			alert("Please enter valid Time")
		}
		//only forward request if submit is true
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
