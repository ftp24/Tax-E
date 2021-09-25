import Cards from "../general/cards";
import CustomerNavbar from "./navbar";
const CustomerScheduled = () => {
    return (
        <div>
            <CustomerNavbar currentPage='customer-scheduled'/>
            <Cards time={"11:00pm"} date={"11/09/2021"} to_loc="Trivandrum" from_loc="Calicut"/>
        </div>
    );
}

export default CustomerScheduled;
