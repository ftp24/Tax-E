import Cards from "../general/cards";
import DriverNavbar from "./navbar";
import {useEffect} from 'react'

const DriverHistory = () => {
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
			let dbData=await historyDriver_db(user);
			console.log(dbData)
		}
		historyDriver()
	}, )

    return (
        <div>
            <DriverNavbar currentPage='driver-history'/>
            <Cards time={"11:00pm"} date={"11/09/2021"} to_loc="Trivandrum" from_loc="Calicut"/>
        </div>
    );
}

export default DriverHistory;
