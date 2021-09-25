import { useHistory } from "react-router";

function addToCache(user) {
    localStorage.setItem('user', JSON.stringify(user));
    if(localStorage.getItem('tempUser'))
        localStorage.removeItem('tempUser');
}

export default addToCache;