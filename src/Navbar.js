import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render(){
        return(
            <div>
                <div>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                </div>
                <div>
                <Link to="/Equipment">機材</Link>
                <Link to="/Reservation">予約</Link>
                <Link to="/ResultManagement">実績管理</Link>
                <Link to="/UserManagement">ユーザー管理</Link>
                <Link to="/Recycle">リサイクル</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;