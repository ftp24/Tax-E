const Cards = ({time,date,from_loc,to_loc}) => {

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
                                        {date}
                                    </span>
                                    <span className="mx-2">
                                        {time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title"><span class="badge badge-light">{`${from_loc} -> ${to_loc}`}</span></h3>
                        
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                </div>
            </div>
        );
}

export default Cards;