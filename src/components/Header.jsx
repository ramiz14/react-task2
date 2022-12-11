import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row all">
            <div className="col-lg-9 icn">
                <Link to='/'>Code.az</Link>
            </div>
            <div className="col-lg-3 nav">
                <Link to='/'>Home</Link>
                <Link to='/add'>Add User</Link>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header