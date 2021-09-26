import {useHistory} from 'react-router-dom'

const CustomerScheduledCards = ({trip}) => {
	let history=useHistory()
    //person1,person2,from_loc,to_loc,
	async function ScheduledCustomer_db(user)
	{
		console.log('user', user);
		var request=user
		const response = await fetch('/trip-completed-driver', {
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
	 async function ScheduledCustomer()
	 {
		let phoneno = JSON.parse((localStorage.getItem('user'))).phoneno;
		let vehicletype = JSON.parse((localStorage.getItem('user'))).vehicletype;

		let user = {
			'tripid':`${trip.tripid}`
	};

		console.log("hello")
		let dbData=await ScheduledCustomer_db(user);
		console.log(dbData)
		history.push('/customer-history')
	}
    return (
        <div className="row justify-content-md-center">
            <div className="col-sm-6">
                <div className="card">
                <div class="card-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <span className="mx-2">
                                    {trip.time.split(" ")[1]}
                                </span>
                                <span className="mx-2">
                                    {trip.time.split(" ")[0]}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h3 className="card-title"><span class="badge badge-light">{`${trip.to_add} -> ${trip.from_add}`}</span></h3>
					<h3 className="card-title"><span class="badge badge-light">{`Vehicle Type : ${trip.vehicletype}`}</span></h3>
					<h3 className="card-title"><span class="badge badge-light">{`Cost : ${trip.amount} Rs`}</span></h3>
					<h3 className="card-title"><span class="badge badge-light">{`Status : ${trip.bookingstatus}`}</span></h3>
					{trip.bookingstatus!=="Pending" && (
					   <h3 className="card-title"><span class="badge badge-light">{`Driver Phone no : ${trip.Dphoneno}`}</span></h3>
				   ) }
				  {trip.bookingstatus!=="Pending" && ( <button type="button" class="btn btn-info" onClick={ScheduledCustomer}>Complete</button>
			  		)}
				</div>
                </div>
            </div>
        </div>
    );
}

export default CustomerScheduledCards;
