import Cards from "../general/cards";
import DriverNavbar from "./navbar";
const DriverAvailable = () => {
    return (
        <div>
            <DriverNavbar currentPage='driver-available'/>
            <Cards time={"11:00pm"} date={"11/09/2021"} to_loc="Trivandrum" from_loc="Calicut"/>
        </div>
    );
}

export default DriverAvailable;
