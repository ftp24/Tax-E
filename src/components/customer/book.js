import React from 'react'
import CustomerNavbar from './navbar'
function Book() {
    return (
		<div>
			<CustomerNavbar currentPage='customer-book'/>
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
	 			   <button type="submit" className="btn btn-info mt-2" onClick={test}>Submit</button>
	 		   </div>
	 	   </div>
	   </div>
    )
}

export default Book
