import Cards from "../general/cards";
import CustomerNavbar from "./navbar";
import {useEffect} from 'react'
const CustomerHistory = () => {
	async function historyCustomer_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/get-history-customer', {
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
		async function historyCustomer()
		{
			console.log("hello")
			let dbData=await historyCustomer_db(user);
			console.log(dbData)
		}
		historyCustomer()
	}, )

    return (
        <div>
            <CustomerNavbar currentPage='customer-history'/>
            <Cards time={"11:00pm"} date={"11/09/2021"} to_loc="Trivandrum" from_loc="Calicut"/>
        </div>
    );
}

export default CustomerHistory;
