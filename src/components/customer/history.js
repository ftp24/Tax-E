import Cards from "../general/cards";
import CustomerNavbar from "./navbar";
const CustomerHistory = () => {
    return (
        <div>
            <CustomerNavbar currentPage='customer-history'/>
            <Cards time={"11:00pm"} date={"11/09/2021"} to_loc="Trivandrum" from_loc="Calicut"/>
        </div>
    );
}

export default CustomerHistory;