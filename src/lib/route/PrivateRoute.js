import React from "react";
import { Cookies } from "react-cookie";


const isAdmin = () => {

    let cookies = new Cookies;

    if(cookies.get('userInfo')){
        if(cookies.get('userInfo').userRole == "ROLE_ADMIN,ROLE_USER"){
            return true;
        }
        return false;
    }
    return false;

}

export default isAdmin;