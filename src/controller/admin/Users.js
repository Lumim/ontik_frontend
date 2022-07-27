import React,{useEffect,useState} from 'react'
import Users_all from '../../views/admin/users/Users_all'
const Users=()=> {
    const[stat,setStat]=useState(0);
    const url=window.location.pathname
    useEffect(()=>{

    },[])
    return (
        <div>
            <Users_all/>
        </div>
    )
}

export default Users
