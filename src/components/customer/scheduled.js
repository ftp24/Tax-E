import Cards from "../general/cards";
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
			return data
		}

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

				<Cards trip={data}/>
			))}
        </div>
    );
}

export default CustomerScheduled;
