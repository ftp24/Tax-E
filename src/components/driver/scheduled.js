import Cards from "../general/cards";
import {useEffect} from 'react'
import DriverNavbar from "./navbar";
const DriverScheduled = () => {

	async function scheduledDriver_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/get-scheduled-rides', {
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

	useEffect(() => {
		let phoneno = JSON.parse((localStorage.getItem('user'))).phoneno;

		let user = {
			'phoneno':phoneno,
		};
		async function scheduledDriver()
		{
			console.log("hello")
			let dbData=await scheduledDriver_db(user);
			console.log(dbData)
		}
		scheduledDriver()
	}, )

	async function cancelRide()
	{




	}

    return (
        <div>
            <DriverNavbar currentPage='driver-scheduled'/>
            <Cards time={"11:00pm"} date={"11/09/2021"} to_loc="Trivandrum" from_loc="Calicut"/>
        </div>
    );
}

export default DriverScheduled;
