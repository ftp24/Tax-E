const Cards = ({trip}) => {

    //person1,person2,from_loc,to_loc,

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


                    </div>
                    </div>
                </div>
            </div>
        );
}

export default Cards;
