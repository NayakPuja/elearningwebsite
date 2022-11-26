import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";

const Logout=()=>{
    const history=useHistory()
    const logout=async ()=>{
        try{
            const res = await fetch("/logout", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
              credentials: "include"
                })
            
            if (res.status === 400 || !res) {
                window.alert("please logout later");
            } else {
                
                
               
                history.push("/")
                window.location.reload();
            }
            
        } catch (error) {
            console.log(error);
        }
    }
useEffect(()=>{
    logout();
},[]);
return(
    <>
    <div>

    </div>
    </>
);
        }
export default Logout;