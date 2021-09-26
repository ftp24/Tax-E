import Cards from "../general/cards";
import {useState,useEffect} from 'react'
import DriverNavbar from "./navbar";
import DriverScheduledCards from "../general/driver-scheduled-card";

const DriverScheduled = () => {

	const[dbData,setDbData]=useState([])
	let temp=''
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
		let data = await response.json();
		console.log("data-response",data);
		if('message' in data)
		{
			data=[]
		}
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
			setDbData(await scheduledDriver_db(user));
			console.log(dbData)
		}
		scheduledDriver()
	},[temp] )

	async function cancelRide()
	{




	}

    return (
        <div>
            <DriverNavbar currentPage='driver-scheduled'/>
			{dbData.map((data)=>(
				<DriverScheduledCards trip={data}/>
			))}
        </div>
    );
}

export default DriverScheduled;
