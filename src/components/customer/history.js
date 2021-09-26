import Cards from "../general/cards";
import CustomerNavbar from "./navbar";
import {useEffect,useState} from 'react'
const CustomerHistory = () => {

	const[dbData,setDbData]=useState([])
	let temp=''
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
		async function historyCustomer()
		{
			console.log("hello")
			setDbData(await historyCustomer_db(user));
			console.log(dbData)
		}
		historyCustomer()
	}, [temp])

    return (
        <div>
            <CustomerNavbar currentPage='customer-history'/>
				{dbData.map((data)=>(
	 			   <Cards trip={data}/>
	 		   ))}
        </div>
    );
}

export default CustomerHistory;
