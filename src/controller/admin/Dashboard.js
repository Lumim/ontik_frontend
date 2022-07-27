import React from 'react'
import {reactLocalStorage as rl} from 'reactjs-localstorage';

import { Link,} from "react-router-dom";

const Dashboard = ()=> {
   
    return (
        <div>
            <ul>
                <li>
                <Link to ='/admin/player/player_all'><button className="btn btn-success">Player Module</button></Link>

                </li>
                <br></br>
                <li>
                <Link to ='/admin/stadium/stadium-all'><button className="btn btn-warning">Stadium Module</button></Link>
                    
                </li>
            </ul>
        
        </div>
    )
}

export default Dashboard
