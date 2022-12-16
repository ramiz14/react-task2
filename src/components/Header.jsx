import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row all">
            <div className="col-lg-8 col-6 icn">
                <Link to='/'>Code.az</Link>
            </div>
            <div className="col-lg-4 col-6 nav">
                <Link to='/'>Home</Link>
                <Link to='/login'>Admin</Link>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header