import DriverCards from "../general/driver-cards";
import DriverNavbar from "./navbar";
import {useEffect,useState} from 'react'

const DriverAvailable = () => {
	let temp=''
	const[dbData,setDbData]=useState([])

	async function availableDriver_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/get-available-rides', {
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
		let vehicletype = JSON.parse((localStorage.getItem('user'))).vehicletype;

		let user = {
			'phoneno':phoneno,
			'vehicletype':vehicletype
		};
		async function availableDriver()
		{
			console.log("hello")
			 setDbData(await availableDriver_db(user));
			 if('message' in dbData)
			 {
				 setDbData([])
			 }
			console.log(dbData)
		}
		availableDriver()
	},[temp] )

    return (
        <div>
            <DriverNavbar currentPage='driver-available'/>
			{
				dbData.filter((data)=>('bookingstatus' in data)&&data.bookingstatus==="Pending").map((data)=>(
   				<DriverCards trip={data}/>
   			))}
        </div>
    );
}

export default DriverAvailable;
