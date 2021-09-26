import Cards from "../general/cards";
import DriverNavbar from "./navbar";
import {useState, useEffect} from 'react'

const DriverHistory = () => {

		const[dbData,setDbData]=useState([])

		let temp=''

	async function historyDriver_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/get-history-driver', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
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
			'phoneno':phoneno
		};
		async function historyDriver()
		{
			console.log("hello")
			setDbData(await historyDriver_db(user));
			console.log(dbData)
		}
		historyDriver()
	}, [temp])

    return (
        <div>
            <DriverNavbar currentPage='driver-history'/>
	 			   {dbData.map((data)=>(
	 				  <Cards trip={data}/>
	 			  ))}
        </div>
    );
}

export default DriverHistory;
