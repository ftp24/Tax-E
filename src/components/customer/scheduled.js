import CustomerScheduledCards from "../general/customer-scheduled-card";
import CustomerNavbar from "./navbar";
import {useEffect,useState} from 'react'
const CustomerScheduled = () => {
		const[dbData,setDbData]=useState([])
		let temp=''
		async function scheduledCustomer_db(user)
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
			if('message' in data)
			{
				data=[]
			}
			return data
		}
		let userTemp= JSON.parse((localStorage.getItem('user')))
	  	useEffect(() => {
			let phoneno = JSON.parse((localStorage.getItem('user'))).phoneno;
			let user = {
				'phoneno':phoneno
			};
			async function scheduledCustomer()
			{
				console.log("hello")
				setDbData(await scheduledCustomer_db(user));
				console.log(dbData)
		    }
			scheduledCustomer()
		},[temp] )


    return (
        <div>
            <CustomerNavbar currentPage='customer-scheduled'/>
			{dbData.map((data)=>(
				<CustomerScheduledCards trip={data}/>
			))}
		</div>
    );
}

export default CustomerScheduled;
